<template lang="pug">
div(class="w-screen bg-slate-400 min-h-screen")
  h1(class="text-5xl font-bold text-center") кох
</template>
<script setup lang="ts"></script>
<style>
.fast-enter-active,
.fast-leave-active {
  transition: opacity 70ms ease;
}
.fast-enter-from,
.fast-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 200ms ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* disable scrollbar */
/* ::-webkit-scrollbar {
  display: none;
} */
</style>
