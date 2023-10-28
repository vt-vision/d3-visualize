<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p class="read-the-docs">Click on the 2D and 3D logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
