<script setup>

const emit = defineEmits(['changeListPage'])
const props = defineProps(['idPageList', 'countPage'])

const loadPage = async (direction) => {
  if (direction) {
    if ((props.idPageList - 1) >= 0) {
      emit('changeListPage', props.idPageList - 1,'left')
    }
  } else {
    if ((props.idPageList + 1) < props.countPage.length) {
      emit('changeListPage', props.idPageList + 1)
    }
  }
}

</script>
<template>
  <div class="border border-sky-500 rounded-md">
    <div class="flex justify-center ">
      <div class="flex items-center cursor-pointer" @click="loadPage(true)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </div>
      <slot name="PaginationBtn"></slot>
      <div class="flex items-center cursor-pointer" @click="loadPage(false)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  </div>
</template>
