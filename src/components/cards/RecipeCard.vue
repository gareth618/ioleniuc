<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  title: string
  youtube: string
  ingredients: [number, string, string][]
}

const props = defineProps<Props>()
const factor = ref(1)
const active = ref(new Array(props.ingredients.length).fill(true))
</script>

<template>
  <article class="flex flex-col">
    <div class="flex items-center justify-between bg-gray-800 p-4">
      <div class="font-bold">{{ title }}</div>
      <input v-model="factor" class="w-10 bg-gray-700 px-1 text-center font-mono" type="number" />
    </div>
    <div class="flex h-full flex-col justify-between gap-4 bg-gray-700 p-4">
      <div class="grid w-fit grid-cols-[auto,_auto,_auto,_auto] items-center gap-x-4">
        <template v-for="(ingredient, index) in props.ingredients">
          <button class="aspect-square h-4" :class="active[index] ? 'border-2 border-gray-500' : 'bg-gray-500'" @click="active[index] = !active[index]" />
          <div :class="{ 'text-gray-500': !active[index] }" class="text-right font-mono text-sm">{{ Math.round(ingredient[0] * factor * 100) / 100 }}</div>
          <div :class="{ 'text-gray-500': !active[index] }" class="text-center">{{ ingredient[1] }}</div>
          <div :class="{ 'text-gray-500': !active[index] }" class="overflow-hidden whitespace-nowrap">{{ ingredient[2] }}</div>
        </template>
      </div>
      <iframe class="aspect-video w-full" :src="props.youtube" :title="props.title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
    </div>
  </article>
</template>
