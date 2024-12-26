<script setup lang="ts">
import WatchList from './WatchList.vue'
import InProgressShows from './InProgressShows.vue'
</script>

<template>
  <div class="content">
    <InProgressShows />
    <WatchList />
  </div>
</template>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 100px;
  height: 100%;
  margin-left: 100px;
}
</style>
