import {
  defineStore
} from "pinia";

export const useStore = defineStore('countStore', {
  state: () => ({
    count: 0
  }),
  getters: {
    getCount() {
      return this.count;
    }
  },
  actions: {
    increment() {
      this.count++;
    }
  }
})

