<script setup lang="ts">
import { ref, onMounted } from 'vue'

const data: any = ref([])

onMounted(async () => {
  const response = await fetch(
    'https://www.episodate.com/api/most-popular?page=1',
  )
  data.value = await response.json()

  console.log(data.value.tv_shows[1])
})
</script>

<template>
  <h2 class="title">Por ver</h2>

  <div v-for="(show, index) in data.tv_shows" :key="index">
    {{ show.name }}
  </div>
</template>

<style lang="scss"></style>
