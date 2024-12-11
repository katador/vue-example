<script setup>
import { ref, onMounted } from 'vue'
import { arrayChunk, restHttp } from '@/utils/general.js'

const props = defineProps(['detailCharacter'])

const listCharacter = ref([])
const listCharacterPagination = ref([])
const listPaginationSelect = ref({})
const NavBtnSelect = ref(0)

const locationCharacter = async (url) => {
    const list = await restHttp(url)
    for (const element of list.residents) {
        const { name, image } = await restHttp(element)
        listCharacter.value.push({ name, image })
    }
}
const pagePagination = async (key) => {
    NavBtnSelect.value = key
    listPaginationSelect.value = listCharacterPagination.value[key]
}

onMounted(async () => {
    const url = props.detailCharacter.location.url
    await locationCharacter(url)
    listCharacterPagination.value = await arrayChunk(listCharacter.value, 20)
    listPaginationSelect.value = listCharacterPagination.value[0]
})

</script>
<template>
    <div v-if="detailCharacter" id="popup" class="z-30 bg-sky-600 w-screen h-screen fixed pt-10 top-0 left-0">
        <slot name="closed"></slot>
        <div class=" flex justify-center pb-3">
            <ItemList>
                <template v-slot:img>
                    <img class="rounded-md w-40 h-40" :src="detailCharacter.image">
                </template>
                <template v-slot:name>{{ detailCharacter.name }}</template>
                <template v-slot:gender>{{ detailCharacter.gender }}</template>
                <template v-slot:species>{{ detailCharacter.species }}</template>
            </ItemList>
        </div>
        <div class="">
            <div class="flex flex-wrap">
                <ItemList v-for="value in listPaginationSelect" :key="value.name">
                    <template v-slot:img>
                        <img class="rounded-md w-20 h-20" :src="value.image">
                        <div><span class="!text-[10px] text-yellow-400">{{ value.name }}</span></div>
                    </template>
                </ItemList>
            </div>
            <PaginationNav :idPageList="NavBtnSelect" @changeListPage="pagePagination" :countPage="listCharacterPagination">
                <template v-slot:PaginationBtn>
                    <PaginationBtn :class="(key == NavBtnSelect) ? '!bg-sky-400' : ''"
                         v-for="(value, key)  in listCharacterPagination" @click="pagePagination(key)" :key="value.name">
                        {{ key + 1 }}
                    </PaginationBtn>
                </template>
            </PaginationNav>
        </div>
    </div>
</template>

<style scoped></style>
