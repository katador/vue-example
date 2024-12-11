<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

import LayoutList from '@/modules/ListCards/LayoutList.vue'
import LayoutLGame from '@/modules/GameMemory/LayoutGame.vue'

const stateLanguage = ref(false)
const pageView = ref(true)

const changeLanguage = async () => {
  stateLanguage.value = !stateLanguage.value
  locale.value = (stateLanguage.value) ? 'es' : 'en'
}

const selectPage = async (status) => {
  pageView.value = status
}

onMounted(async () => {

})
</script>
<template>

  <div class="flex justify-center pt-10">
    <div class="bg-sky-600 rounded-[15px] w-80 min-h-96 p-3 relative">

      <div @click="changeLanguage"
        class="bg-cyan-300 hover:bg-cyan-200  rounded-md p-2 text-[10px] absolute right-4 cursor-pointer">
        <span v-if="stateLanguage">EN</span>
        <span v-else>ES</span>
      </div>
      <div class="flex pb-4">
        <div @click="selectPage(true)"
          class="bg-cyan-300 hover:bg-cyan-200 font-bold rounded-md p-2 text-[10px]  cursor-pointer mr-2">
          {{ $t('title.view') }}
        </div>
        <div @click="selectPage(false)"
          class="bg-cyan-300 hover:bg-cyan-200 font-bold rounded-md p-2 text-[10px]  cursor-pointer">
          {{ $t('title.game') }}
        </div>
      </div>

      <div v-if="pageView">
        <LayoutList></LayoutList>
      </div>
      <div v-else>
        <LayoutLGame></LayoutLGame>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
