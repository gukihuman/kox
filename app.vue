<template lang="pug">
div(ref="doc"
  class="relative min-h-screen "
  :style="docStyle")
  div(ref="box"
    :style="boxStyle"
    class="w-full h-full mx-auto bg-gradient-to-r from-[#ecceb1] to-dark-vanilla shadow-xl pb-[70px] md:pb-[125px] overflow-hidden opacity-0")
    div(class="absolute w-full h-full -z-10 opacity-[0.1]")
      img(src="@/assets/bg-top.webp" class="w-full object-cover")
      img(src="@/assets/bg-bottom.webp" class="absolute bottom-0 w-full object-cover")
    roof
    mobile-column(v-if="!GLOBAL.desktop")
    div(class="flex mx-[24px]" v-if="GLOBAL.desktop")
      desktop-column-left
      desktop-column-right
</template>
<script setup lang="ts">
let doc = ref()
let box = ref()
let scale = ref(1)
const docStyle = computed(() => {
  if (typeof window === "undefined") return
  let targetHeight = innerWidth < 768 ? 1182 : 1593
  return {
    "max-height": targetHeight * scale.value + "px",
  }
})
const boxStyle = computed(() => {
  if (typeof window === "undefined") return
  let targetWidth = innerWidth < 768 ? 375 : 1200
  const styleObject = {
    transform: `scale(${scale.value})`,
    "transform-origin": "left top",
    width: targetWidth + "px",
  }
  if (innerWidth < 1200) {
    _.merge(styleObject, { "margin-left": "0px" })
  }
  return styleObject
})
onMounted(() => {
  REFS.doc = doc.value
  setScale()
  addEventListener("resize", setScale)

  box.value.style.opacity = 1
})
function setScale() {
  if (typeof window === "undefined") return
  let targetWidth = 1200
  if (innerWidth < 768) {
    targetWidth = 375
    GLOBAL.desktop = false
  } else {
    GLOBAL.desktop = true
  }
  const boxWidth = Math.min(innerWidth, 1200) * devicePixelRatio
  scale.value = boxWidth / targetWidth / devicePixelRatio
}
</script>
<style>
html {
  background-color: #a89180;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 300ms ease-in-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>
