<script setup>
</script>
<template>
    <div class="flex pb-3">
        <figure class="flex-none ">
            <slot name="img"></slot>
        </figure>
        <div class="grow ml-4">
            <h4 class="text-yellow-400">
                <slot name="name"></slot>
            </h4>
            <div class="text-xs text-gray-300">
                <slot name="gender"></slot>
            </div>
            <div class="text-xs text-gray-300">
                <slot name="species"></slot>
            </div>
            <div class="text-xs text-gray-300">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>