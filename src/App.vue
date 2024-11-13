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
  flex-direction: column;
  padding: 0 50px;

  .header {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
