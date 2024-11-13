<script setup lang="ts">
import WatchList from './WatchList.vue'
import Watching from './Watching.vue'
</script>

<template>
  <div class="content">
    <Watching />
    <WatchList />
  </div>
</template>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 100px;
}
</style>
