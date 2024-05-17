<template>
  <div class="relative">
    <Icon class="absolute top-[50%] translate-y-[-50%] w-6 h-6" name="mdi:magnify"></Icon>
    <!-- @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" -->
    <input :value="modelValue" 
     type="text" placeholder="Rechercher un lien" class=" pl-10 py-5 h-6 inline-block">
  </div>
  {{  modelValue }}
</template>

<script lang="ts" setup>
// const props = defineProps<{
//   modelValue?:string;
// }>();

const modelValue = defineModel() // on entend du parent une props modelValue
</script>

<style lang="scss" scoped></style>