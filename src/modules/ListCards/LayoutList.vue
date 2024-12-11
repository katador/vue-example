<script setup>
import { ref, onMounted } from 'vue'

import { SERVICE_API } from '@/utils/constans.js'
import { arrayChunk, restHttp, resHttpStorage } from '@/utils/general.js'
import BoxPanel from '@/components/BoxPanel.vue'

const list = ref({})
const listPaginationSelect = ref({})
const urlDetail = ref('')
const detailCharacter = ref({})
const statePopup = ref(false)
const NavBtnSelect = ref(0)

const actionPopup = async () => {
  statePopup.value = !statePopup.value
}

const openDetail = async (arg) => {
  urlDetail.value = arg
  const result = await restHttp(urlDetail.value)
  detailCharacter.value = result
  await actionPopup()
}

const pagePagination = async (key) => {
  NavBtnSelect.value = key
  listPaginationSelect.value = list.value.results[key]
}

onMounted(async () => {
  const path = SERVICE_API.CHARACTER
  const result = await resHttpStorage(path,'listCards')
  list.value.results = await arrayChunk(result.results, 10)
  listPaginationSelect.value = list.value.results[0]
})
</script>
<template>
  <BoxPanel v-if="statePopup" :detailCharacter="detailCharacter">
    <template v-slot:closed>
      <Close @click="actionPopup"></Close>
    </template>
  </BoxPanel>
  <div class="flex flex-wrap">

    <CardData  v-for="value in listPaginationSelect" :key="value.name">
      <template v-slot:img>
      <img class="rounded-md w-20 h-20" :src="value.image">
    </template>
    <template v-slot:name>{{ value.name }}</template>
    <template v-slot:gender>{{ value.gender }}</template>
    <template v-slot:species>{{ value.species }}</template>

      <template v-slot:button>
      <Button @click="openDetail(value.url)" :statusLoad="statePopup">
        <template v-slot:textBtn>
          <span class="underline underline-offset-4">{{ $t('button.detail') }}</span>
        </template>
        <template v-slot:iconBtn>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </template>
      </Button>
    </template>
    </CardData>
</div>
  <PaginationNav :idPageList="NavBtnSelect" @changeListPage="pagePagination" :countPage="list.results">
    <template v-slot:PaginationBtn>
      <PaginationBtn :class="(key == NavBtnSelect) ? '!bg-sky-400' : ''" v-for="(value, key)  in list.results"
        @click="pagePagination(key)" :key="value.name">
        {{ key + 1 }}
      </PaginationBtn>
    </template>
  </PaginationNav>
</template>
