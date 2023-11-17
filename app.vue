<template lang="pug">
div(ref="screen" class="relative min-h-screen bg-[#a89180] overflow-x-hidden")
  transition: div(
    v-if="loaded"
    :style="style"
    class="w-full h-full bg-gradient-to-b from-[#ecceb1] to-[#e2c7ac] shadow-xl"
  )
    div(class="absolute w-full h-full")
      img(src="@/assets/bg-top.webp")
      img(src="@/assets/bg-bottom.webp" class="absolute bottom-0")
    roof
</template>
<script setup lang="ts">
let screen = ref()
let loaded = ref(false)
let scale = ref(0)
const style = computed(() => {
  let screenElement = screen.value
  if (!screenElement) return
  let targetWidth = screenElement.clientWidth < 768 ? 375 : 1200
  let margin = 0
  if (screenElement.clientWidth > 1200) {
    margin = (screenElement.clientWidth - 1200) / 2
  }
  return {
    transform: `scale(${scale.value})`,
    "transform-origin": "left top",
    // width: Math.min(targetWidth * scale.value, 1200) + "px",
    width: targetWidth + "px",
    "margin-left": margin + "px",
  }
})
function setScale() {
  let screenElement = screen.value
  if (!screenElement) return
  let targetWidth = screenElement.clientWidth < 768 ? 375 : 1200
  console.log(screenElement.clientWidth)
  const boxWidth = Math.min(screenElement.clientWidth, 1200) * devicePixelRatio
  scale.value = boxWidth / targetWidth / devicePixelRatio
}
onMounted(() => {
  setScale()
  addEventListener("resize", setScale)
  setTimeout(() => (loaded.value = true), 20)
  loaded.value = true
})
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 300ms ease-in-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
