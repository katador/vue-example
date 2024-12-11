<script setup>
    const props = defineProps(['textButton'])
</script>
<template>
   <button class="bg-sky-900 p-1 hover:bg-sky-500 rounded-md text-[11px]">
      {{props.textButton}}
   </button>
</template>
