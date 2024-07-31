<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  id: string
}

const props = defineProps<Props>()
const active = ref(true)

function toggleSection() {
  active.value = !active.value
  document.getElementById(props.id)!.style.display = active.value ? 'initial' : 'none'
}
</script>

<template>
  <button class="relative flex aspect-square h-10 items-center justify-center bg-gray-800 hover:bg-gray-700" @click="toggleSection">
    <div class="absolute h-1 w-6 origin-center bg-gray-200 transition-transform" :class="active ? 'rotate-45' : 'rotate-180'" />
    <div class="absolute h-1 w-6 origin-center bg-gray-200 transition-transform" :class="active ? '-rotate-45' : 'rotate-90'" />
  </button>
</template>
