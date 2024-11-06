<script lang="ts" setup>
import SearchSVG from '@/assets/Search.svg'
let search: string
</script>

<template>
  <div class="search-bar">
    <input type="text" v-model="search" placeholder="Buscar..." />
    <img :src="SearchSVG" alt="" />
  </div>
</template>

<style lang="scss">
.search-bar {
  position: relative;
  height: fit-content;

  input {
    border: 1px solid;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 16px;
  }

  img {
    position: absolute;
    height: 50%;
    top: 0;
    bottom: 3px;
    right: 10px;
    margin: auto 0;
  }
}
</style>
