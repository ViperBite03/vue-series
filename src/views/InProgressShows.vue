<script setup lang="ts">
import CurrentlyWatching from '@/components/CurrentlyWatching.vue'

const progressList = ['', '', '', '', '']

import { ref, onMounted } from 'vue'

const data: any = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch(
      `https://www.episodate.com/api/show-details?q=arrow`,
    )

    data.value = await response.json()

    //console.log(data.value.tvShow)
  } catch (error) {
    console.error('Error al cargar los datos:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="section">
    <h2 class="title">Currently watching</h2>

    <div v-if="isLoading">Cargando...</div>

    <div v-else-if="data.tvShow" class="show-row">
      <div v-for="(show, index) in progressList" :key="index">
        <CurrentlyWatching
          :name="data.tvShow.name"
          :cover="data.tvShow.image_thumbnail_path"
        />
      </div>
    </div>

    <div v-else>No se encontró información</div>
  </div>
</template>

<style lang="scss">
.section {
  max-height: 50vh;
  height: 100%;

  .show-row {
    display: flex;
    overflow-x: scroll;
    padding-top: 50px;
    gap: 75px;
  }
}
</style>
