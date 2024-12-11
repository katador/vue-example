<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import {SERVICE_API} from '@/utils/constans.js'
import {arrayChunk,restHttp} from '@/utils/general.js'

const { locale } = useI18n()

import BoxPanel from '@/components/BoxPanel.vue'

const list = ref({})
const NavBtnSelect = ref(0)
const urlDetail = ref('')
const statePopup = ref(false)
const stateLanguage = ref(false)
const detailCharacter = ref({})
const listPaginationSelect = ref({})

const openDetail = async (arg) => {
    urlDetail.value = arg
    const result = await restHttp(urlDetail.value)
    detailCharacter.value = result
    await actionPopup()
}
const actionPopup = async () => {
    statePopup.value = !statePopup.value
}

const changeLanguage = async () => {
    stateLanguage.value = !stateLanguage.value
    locale.value = (stateLanguage.value) ? 'es' : 'en'
}

const pagePagination = async (key) => {
    NavBtnSelect.value = key
    listPaginationSelect.value = list.value.results[key]
}

onMounted(async () => {
    const path = SERVICE_API.CHARACTER
    const result = await restHttp(path)
    console.log(result.results,'result.results')
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

    <div class="flex justify-center pt-10">
        <div class="bg-sky-600 rounded-[15px] w-80 min-h-96 p-3 relative">

            <div @click="changeLanguage"
                class="bg-cyan-300 hover:bg-cyan-200  rounded-md p-2 text-[10px] absolute right-4 cursor-pointer">
                <span v-if="stateLanguage">EN</span>
                <span v-else>ES</span>
            </div>

            <div class="pt-4 pb-4 text-white">
                {{ $t('title.view') }}
            </div>
        
            <ItemList  v-for="(value, key) in listPaginationSelect">
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

            <PaginationNav>
                <template v-slot:PaginationBtn>
                    <PaginationBtn :class="(key == NavBtnSelect)? '!bg-sky-400':''" v-for="(value, key)  in list.results" @click="pagePagination(key)">
                        {{ key + 1 }}
                    </PaginationBtn>
                </template>
            </PaginationNav>
        </div>
    </div>
</template>
<style scoped></style>