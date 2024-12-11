<script setup>
import { ref } from 'vue'
const props = defineProps(['statusLoad'])

</script>
<template>
  <button class="bg-sky-900 p-1 hover:bg-sky-500 rounded-md text-[11px]">
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
