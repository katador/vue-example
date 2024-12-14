<script setup>
import { ref } from 'vue'

const player = ref(false)

const actionOpen = async () => {
  player.value = true
}

</script>
<template>
  <div class=" max-w-xs bg-music-background rounded-xl ">
    <div>
      <div class="bg-[url('./img/fondo_app.jpg')] bg-cover bg-no-repeat bg-center rounded-xl">
        <div class="  multi-bg-example p-5 rounded-xl grid content-end h-64">
          <div class="text-white text-4xl pr-20">F.L.A.ME.</div>
          <div class="flex pt-4 pb-2">
            <button @click="actionOpen"
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
          <div class="flex flex-col ">
            <div class="pb-3">
              <img class="rounded-lg" src="https://placehold.co/128">
            </div>
            <div class="text-white text-sm">Title Music</div>
            <div class="text-music-text-silver text-xs">2024</div>
          </div>
        </div>
        <div class="w-32 mr-4 flex-none">
          <div class="flex flex-col ">
            <div class="pb-3">
              <img class="rounded-lg" src="https://placehold.co/128">
            </div>
            <div class="text-white text-sm">Title Music</div>
            <div class="text-music-text-silver text-xs">2024</div>
          </div>
        </div>
        <div class="w-32 mr-4 flex-none">
          <div class="flex flex-col ">
            <div class="pb-3">
              <img class="rounded-lg" src="https://placehold.co/128">
            </div>
            <div class="text-white text-sm">Title Music</div>
            <div class="text-music-text-silver text-xs">2024</div>
          </div>
        </div>
        <div class="w-32 mr-4 flex-none">
          <div class="flex flex-col ">
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
          <figure>
            <img class="rounded-lg" src="https://placehold.co/80">
          </figure>
          <div class="grow ml-4 flex justify-between py-4">
            <div>
              <h4 class="text-white text-sm">King of screens</h4>
              <p class="text-music-text-silver text-xs">015 . Easy living </p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div v-if="player == false" class="bg-[url('./img/fondo_app.jpg')] max-w-xs bg-cover bg-no-repeat bg-center rounded-xl">
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

  <div v-if="player == true"  class="bg-music-background max-w-xs p-6 rounded-xl grid content-end  min-h-500 mt-5">
    <div class="flex justify-end">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6 fill-music-text-silver">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    </div>
    <div>
      <div class="flex justify-center mb-4">
        <img src="../../assets/img/fondo_app.jpg" class="w-50">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 fill-white">
          <path fill-rule="evenodd"
            d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 fill-white">
          <path fill-rule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-20 fill-white">
          <path fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 fill-white">
          <path fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 fill-white">
          <path fill-rule="evenodd"
            d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
            clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <div>
      <div class="text-music-text-silver text-xs text-center mt-6">
        Lyrics
      </div>
      <div class="flex justify-center mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="size-6 fill-music-text-silver">
          <path fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>

</template>
