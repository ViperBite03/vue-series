<script setup lang="ts">
import CurrentlyWatching from '@/components/CurrentlyWatching.vue'
</script>

<template>
  <div class="section">
    <h2 class="title">Currently watching</h2>

    <CurrentlyWatching />
  </div>
</template>

<style lang="scss">
.section {
  max-height: 50vh;
  height: 100%;
}
</style>
