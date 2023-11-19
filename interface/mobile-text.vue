<template lang="pug">
p(
  class="text-justify text-montserrat font-semibold text-[14px] leading-[17px] text-chocolate-cosmos"
  :class="props.indent ? 'indent-[40px]' : ''"
) {{ props.text }}
</template>
<script setup>
const props = defineProps(["indent", "text"])
</script>
