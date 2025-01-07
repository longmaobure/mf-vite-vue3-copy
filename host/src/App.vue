<script setup>
import Counter from './components/Counter.vue';
import { defineAsyncComponent } from 'vue';
const RemoteMFE = defineAsyncComponent(()=>import('remote/remote-app'));
</script>

<template>
  <div>
    <div>
      <h1>host component</h1>
      <Counter />
    </div>
    <RemoteMFE />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
