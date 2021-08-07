<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Vuex:{{ store.state.user.name }}</h1>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>
