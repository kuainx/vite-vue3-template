<template>
  <h1>props:{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <button type="button" @click="state.count++">count is: {{ state.count }} | {{ refA }}</button>
  <h3>vuex test</h3>
  <p>
    <input @input="refresh" :value="name" />
  </p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
defineProps({
  msg: String
})
const state = reactive({ count: 0 })
const refA = ref('A')
const name = computed(() => store.state.user.name)
const refresh = e => {
  store.dispatch('user/saveName', e.target.value)
  // store.commit('user/SET_NAME', e.target.value)
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
