<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const destinationID = computed(() => useRoute().params.id)

const data: any = ref([])

onMounted(async () => {
  const response = await fetch(
    `https://www.episodate.com/api/show-details?q=${destinationID.value}`,
  )

  data.value = await response.json()

  console.log('dentro del onmounted - single show')
})

console.log('%cfuera del onmounted - single show', 'color: red')
</script>

<template>
  <div class="content">
    <h1>Estoy muy orgulloso de mi cosita bonita jeje</h1>
    {{ data.tv_show.name }}
  </div>
</template>

<style lang="scss"></style>
