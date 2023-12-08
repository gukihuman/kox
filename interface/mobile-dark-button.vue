<template lang="pug">
div(class="w-fit h-[27px] bg-gradient-to-r from-[#763937] to-[#9f5f49] flex items-center justify-center px-3 rounded-[10px] hover:brightness-125 hover:scale-[1.03] transition-all duration-300 cursor-pointer pb-[1px]")
  p(class="text-justify text-montserrat font-semibold text-[14px] leading-[17px] text-dark-vanilla brightness-[1.1]") {{ props.text }}
</template>
<script setup>
const props = defineProps(["indent", "text"])
</script>
