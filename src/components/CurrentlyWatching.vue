<script setup lang="ts">
import { ref, onMounted } from 'vue'

const data: any = ref([])

onMounted(async () => {
  const response = await fetch(
    `https://www.episodate.com/api/show-details?q=arrow`,
  )

  data.value = await response.json()

  console.log(data.value + ' aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
})
</script>

<template>
  <div class="show">
    <div class="cover"></div>
    <div class="name"></div>
    <div class="progress"></div>
    <div class="background"></div>
  </div>
</template>

<style lang="scss">
.show {
  position: relative;
  display: flex;

  .cover {
    position: absolute;
    height: 225px;
    width: 155px;
    border-radius: 16px;
    border: 1px solid red;
    bottom: 25px;
    left: 35px;
  }

  .background {
    background-color: lightcyan;
    height: 175px;
    width: 500px;
    bottom: 0;
    border-radius: 16px;
    border: 1px solid;
  }
}
</style>
