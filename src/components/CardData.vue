<script setup>
</script>
<template>
    <div class="bg-white rounded-lg shadow-lg  max-w-80 borderButtomCard" >
          <div class="">
            <div v-if="$slots.button" class="flex justify-between items-center">
              <div class="bg-app-btn-success text-white rounded-full py-1 px-4">
                Active
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <figure class="pt-5 pb-6">
                <slot name="img"></slot>
              </figure>
              <div class="text-app-text-title font-bold text-lg">
                <slot name="name"></slot>
              </div>
              <div class="text-app-text-subtitle">
                <slot name="gender"></slot>
              </div>
            </div>

          </div>
          <div>
            <div  v-if="$slots.species" class="bg-app-box-plomo border-2 border-app-box-border rounded-lg p-4 mt-5 mb-5">
              <div class="p-1"># <span class="italic">#</span><slot name="species"></slot></div>
              <div class="p-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5 mr-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
                <span>Managerial</span>
                <span class="px-2">.</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5 mr-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <span>Fulltime</span>
              </div>
              <div class="p-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5 mr-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

                <span class="bg-white border-2 py-1 px-2 rounded-full text-app-text-blue">heloozan@gmail.com</span>
              </div>
              <div class="p-1"><span
                  class="bg-white border-2 py-1 px-2 rounded-full text-app-text-blue">(64)630613343</span></div>
            </div>
            <div v-if="$slots.button" class="flex justify-between items-center">
              <div class="text-app-text-title"><span class="text-app-text-subtitle">Joined at</span> 21 Sep, 2018</div>
              <div class="text-app-text-title font-semibold">
                <slot name="button"></slot>
                </div>
            </div>
          </div>
        </div>
</template>
