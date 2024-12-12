<script setup>
const props = defineProps(['statusLoad'])
</script>
<template>
  <button class=" p-1 hover:text-sky-500 rounded-md text-[11px]">
    <div v-if="props.statusLoad">Cargando...</div>
    <div v-else class="flex">
      <div>
        <slot name="textBtn"></slot>
      </div>
      <div class="pl-2">
        <slot name="iconBtn"></slot>
      </div>
    </div>

  </button>
</template>
