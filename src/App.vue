<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainMenu from '@/components/MainMenu.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
  <div class="global">
    <MainMenu />
    <div class="header">
      <SearchBar />
    </div>

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.global {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 50px;

  .header {
    position: absolute;
    top: 0;
    right: 0;

    padding: 20px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
