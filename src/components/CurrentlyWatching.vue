<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'

const showBG = ref<HTMLElement | null>(null)

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  if (showBG.value) {
    showBG.value.style.backgroundImage = `url(${props.cover})`
  }
})
</script>

<template>
  <div class="show">
    <div class="cover">
      <img :src="cover" alt="" />
    </div>

    <div class="background" ref="showBG">
      <div class="BG">
        <div class="name">{{ name }}</div>
        <div class="progress"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.show {
  position: relative;
  display: flex;

  .cover {
    position: absolute;
    height: 150px;
    width: 99px;
    border-radius: 12px;
    bottom: 25px;
    left: 35px;
    overflow: hidden;
    z-index: 4;

    img {
      height: 100%;
    }
  }

  .background {
    background-color: lightcyan;
    height: 125px;
    width: 325px;
    bottom: 0;
    border-radius: 12px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    overflow: hidden;

    .BG {
      backdrop-filter: blur(15px) brightness(75%);
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 15px 25px 15px 170px;

      color: white;
      text-align: end;
    }
  }
}
</style>
