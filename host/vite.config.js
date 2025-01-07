import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import {
  federation
} from "@module-federation/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [federation({
    name: 'host',
    remotes: {
      remote: {
        type: "module",
        name: 'remote',
        entry: "http://localhost:4174/remoteEntry.js"
      }
    },
    shared: {
      vue: {
        // 确保只加载一个 Vue 实例
        singleton: true
      },
      pinia:{
        singleton:true
      }
    },
    // 即使主机模块不暴露任何模块，filename 仍然会生成一个 remoteEntry.js 文件
    // ，其中包含模块联邦的元数据（例如共享模块的信息）。这个文件对模块联邦运行时至关重要。
    filename: "remoteEntry.js"
  }), vue(), vueJsx()],
})