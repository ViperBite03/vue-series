<script setup lang="ts">
const x = await fetch('https://www.episodate.com/api/most-popular?page=1')
const h = await x.json()

//console.log(h.tv_shows[1])
</script>

<template>
  <h2 class="title">Por ver</h2>

  <div v-for="(show, index) in h.tv_shows" :key="index">
    {{ show[index].name }}
  </div>
</template>

<style lang="scss"></style>
