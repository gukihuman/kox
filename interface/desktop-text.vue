<template lang="pug">
p(
  class="text-justify text-montserrat font-semibold text-[21px] leading-[26px] text-chocolate-cosmos"
  :class="class_object"
) {{ props.text }}
</template>
<script setup>
const props = defineProps(["indent", "text", "bold"])
const class_object = computed(() => {
  return {
    "indent-[40px]": props.indent,
    "font-bold": props.bold,
  }
})
</script>
