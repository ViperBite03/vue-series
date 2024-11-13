<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import HomeSVG from '@/assets/Home.svg'

interface IOption {
  icon: string
  link: string
}

const options = ref<IOption[]>([
  { icon: HomeSVG, link: '/' },
  { icon: HomeSVG, link: 'miquelview' },
  { icon: HomeSVG, link: 'watchlist' },
  { icon: HomeSVG, link: 'myList' },
])
</script>

<style lang="scss">
.options {
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  gap: 5px;

  border: 1px solid;
  border-radius: 50px;
  margin-right: 50px;

  .option {
    height: 35px;
    aspect-ratio: 1/1;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    padding: 5px;
    transition: 0.3s ease;

    &:hover {
      transition: 0.3s ease;
      background-color: lightgray;
    }

    img {
      height: 30px;
    }
  }

  .solid {
    border-top: 1px solid;
    width: 30px;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    height: 30px;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="options">
    <div v-for="(option, index) in options" :key="index" class="option">
      <RouterLink :to="option.link">
        <img :src="option.icon" alt="" />
      </RouterLink>
    </div>

    <hr class="solid" />

    <div class="option">
      <button>
        <img src="@/assets/Plus.svg" alt="" />
      </button>
    </div>
  </div>
</template>
