<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainMenu from '@/components/MainMenu.vue'
</script>

<template>
  <div class="global">
    <MainMenu />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.global {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: space-between;
}
</style>
