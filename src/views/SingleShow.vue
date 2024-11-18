<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const destinationID = ref(route.params.id)

const data = ref<{ tvShow?: { name?: string } }>({})
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch(
      `https://www.episodate.com/api/show-details?q=${destinationID.value}`,
    )
    data.value = await response.json()
  } catch (error) {
    console.error('Error al cargar los datos:', error)
  } finally {
    isLoading.value = false
  }
})

watch(
  () => route.params.id,
  async newID => {
    destinationID.value = newID
    isLoading.value = true

    try {
      const response = await fetch(
        `https://www.episodate.com/api/show-details?q=${newID}`,
      )
      data.value = await response.json()
    } catch (error) {
      console.error('Error al cargar los datos:', error)
    } finally {
      isLoading.value = false
    }
  },
)
</script>

<template>
  <div v-if="isLoading">Cargando...</div>
  <h1 v-else-if="data.tvShow?.name">{{ data.tvShow.name }}</h1>
  <div v-else>No se encontró información</div>
</template>

<style lang="scss"></style>
