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
  <div class="watch-list">
    <h2 class="title">Por ver</h2>

    <div class="shows">
      <div v-for="(show, index) in data.tv_shows" :key="index">
        <div class="show">
          <img class="thumbnail" :src="show.image_thumbnail_path" alt="" />
          <span class="name">{{ show.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.watch-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75vh;
  overflow: scroll;

  .shows {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 50px;

    .show {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      overflow: hidden;

      &:hover {
        cursor: pointer;

        .name {
          transition: 0.3s ease;
          color: black;
        }
      }

      .thumbnail {
        height: 225px;
        width: 155px;
        border-radius: 8px;
      }

      .name {
        transition: 0.3s ease;
        width: 100%;
        text-align: left;
        padding-left: 20px;
        color: gray;
      }
    }
  }
}
</style>
