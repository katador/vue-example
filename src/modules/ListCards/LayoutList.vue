<script setup>
import { ref, onMounted } from 'vue'

import { SERVICE_API } from '@/utils/constans.js'
import { arrayChunk, restHttp } from '@/utils/general.js'
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
  const result = await restHttp(path)
  console.log(result.results, 'result.results')
  list.value.results = await arrayChunk(result.results, 4)
  listPaginationSelect.value = list.value.results[0]
})
</script>
<template>
  <BoxPanel v-if="statePopup" :detailCharacter="detailCharacter">
    <template v-slot:closed>
      <Close @click="actionPopup"></Close>
    </template>
  </BoxPanel>
  <ItemList v-for="value in listPaginationSelect" :key="value.name">
    <template v-slot:img>
      <img class="rounded-md w-20 h-20" :src="value.image">
    </template>
    <template v-slot:name>{{ value.name }}</template>
    <template v-slot:gender>{{ value.gender }}</template>
    <template v-slot:species>{{ value.species }}</template>
    <template v-slot:button>
      <Button @click="openDetail(value.url)" :textButton="$t('button.detail')"></Button>
    </template>
  </ItemList>
  <PaginationNav :idPageList="NavBtnSelect" @changeListPage="pagePagination" :countPage="list.results">
    <template v-slot:PaginationBtn>
      <PaginationBtn :class="(key == NavBtnSelect) ? '!bg-sky-400' : ''" v-for="(value, key)  in list.results"
        @click="pagePagination(key)" :key="value.name">
        {{ key + 1 }}
      </PaginationBtn>
    </template>
  </PaginationNav>
</template>
