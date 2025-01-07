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
  server:{
    port:4174
  },
  plugins: [federation({
    name: 'remote',
    filename: 'remoteEntry.js',
    exposes: { // 暴露 app 组件出去给 host 用
      './remote-app': "./src/App.vue"
    },
    // 共享vue 和 pinia 依赖
    shared: {
      vue: {
        // 确保只加载一个 Vue 实例
        singleton: true
      },
      pinia:{
        singleton:true
      }
    },

  }), vue(), vueJsx()],
})