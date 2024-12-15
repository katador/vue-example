<script setup>
import { ref } from 'vue'

const player = ref(0)

const actionOpen = async () => {
  player.value = 1
}
const actionBackMain = async () => {
  player.value = player.value - 1
}
const actionPlayMusic = async() => {
  player.value = player.value + 1
}

</script>
<template>
  <div v-if="player === 1" class=" max-w-xs bg-music-background rounded-xl ">
    <div>
      <div class="bg-[url('./img/armin3.jpg')] bg-cover bg-no-repeat bg-center rounded-xl">
        <div class="  multi-bg-example p-5 rounded-xl grid content-end h-64">
          <div class="text-white text-4xl pr-20">F.L.A.ME.</div>
          <div class="flex pt-4 pb-2">
            <button @click="actionBackMain"
                    class="w-28 text-xs font-semibold rounded-full bg-music-btn-green text-music-text-btn-green py-2">Subcribe</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-between px-5 py-5 items-center ">
        <div class="text-white font-semibold flex items-center">
          <IconMusic class="mr-3"></IconMusic> Discography
        </div>
        <div class="text-music-text-silver text-xs">View all</div>
      </div>
      <div class="pl-5 flex overflow-hidden whitespace-nowrap cursor-grab">
        <div class="w-32 mr-4 flex-none">
          <div @click="actionPlayMusic" class="flex flex-col ">
            <div class="pb-3">
              <img class="rounded-lg" src="https://placehold.co/128">
            </div>
            <div class="text-white text-sm">Title Music</div>
            <div class="text-music-text-silver text-xs">2024</div>
          </div>
        </div>
        <div class="w-32 mr-4 flex-none">
          <div @click="actionPlayMusic" class="flex flex-col ">
            <div class="pb-3">
              <img class="rounded-lg" src="https://placehold.co/128">
            </div>
            <div class="text-white text-sm">Title Music</div>
            <div class="text-music-text-silver text-xs">2024</div>
          </div>
        </div>
        <div class="w-32 mr-4 flex-none">
          <div @click="actionPlayMusic" class="flex flex-col ">
            <div class="pb-3">
              <img class="rounded-lg" src="https://placehold.co/128">
            </div>
            <div class="text-white text-sm">Title Music</div>
            <div class="text-music-text-silver text-xs">2024</div>
          </div>
        </div>
        <div class="w-32 mr-4 flex-none">
          <div @click="actionPlayMusic" class="flex flex-col ">
            <div class="pb-3">
              <img class="rounded-lg" src="https://placehold.co/128">
            </div>
            <h4 class="text-white text-sm">Title Music</h4>
            <p class="text-music-text-silver text-xs">2024</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-between px-5 py-5 items-center">
        <div class="text-white font-semibold flex items-center">
          <IconStart class="mr-3"></IconStart> Popular singles
        </div>
        <div class="text-music-text-silver text-xs">View all</div>
      </div>
      <div class="px-5">
        <div class="flex justify-between mb-2">
          <figure @click="actionPlayMusic">
            <img class="rounded-lg" src="https://placehold.co/80">
          </figure>
          <div class="grow ml-4 flex justify-between py-4">
            <div>
              <h4 class="text-white text-sm">King of screens</h4>
              <p class="text-music-text-silver text-xs">015 . Easy living </p>
            </div>
            <div>
              <IconEllipsisVertical></IconEllipsisVertical>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div v-if="player === 0" class="bg-[url('./img/armin3.jpg')] max-w-xs bg-cover bg-no-repeat bg-center rounded-xl">
    <div class="  multi-bg-example p-5 rounded-xl grid content-end  min-h-500">
      <div class="text-white text-4xl pr-20">Enjoy your favorite music</div>
      <div class="flex pt-6 pb-4">
        <button @click="actionOpen" class=" grow text-xs font-semibold rounded-full bg-music-btn-green text-music-text-btn-green py-3">Get
          Started</button>
      </div>
      <div class="flex mb-6">
        <button
          class=" grow border-2 border-music-border-btn-green text-xs font-semibold rounded-full bg-music-background text-music-text-border-green py-3">Continue
          with Email</button>
      </div>
      <div class="text-music-text-silver text-xs1 text-center px-10">
        By continuing you agree to the Terms of Service & Privacy Policy
      </div>
    </div>
  </div>

  <div v-if="player === 2" class="bg-music-background max-w-xs p-6 rounded-xl grid content-end  min-h-500 mt-5">
    <div class="flex justify-between">
      <IconBackMain class="cursor-pointer" @click="actionBackMain" ></IconBackMain>
      <IconHeart></IconHeart>
    </div>
    <div>
      <div class="flex justify-center mb-4">
        <img src="../../assets/img/armin4.jpg" class="w-50">
      </div>
      <div class="text-white text-2xl text-center">
        Eternal Chains
      </div>
      <div class="text-music-text-silver text-center">
        Animal
      </div>
    </div>
    <div class="mt-10">
      <div class="bg-music-btn-green rounded-xl h-1"></div>
      <div class="flex justify-between mt-2">
        <div class="text-music-text-silver text-xs">2:53</div>
        <div  class="text-music-text-silver  text-xs">4:47</div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="cursor-pointer">
        <IconAleatory></IconAleatory>
      </div>
      <div class="cursor-pointer">
        <IconBackMain></IconBackMain>
      </div>
      <div class="cursor-pointer">
        <IconPlay></IconPlay>
      </div>
      <div class="cursor-pointer">
        <IconNext></IconNext>
      </div>
      <div class="cursor-pointer">
        <IconRePlay></IconRePlay>
      </div>
    </div>
    <div>
      <div class="text-music-text-silver text-xs text-center mt-6">
        Lyrics
      </div>
      <div class="flex justify-center mt-1">
        <IconMore></IconMore>
      </div>
    </div>
  </div>

</template>
