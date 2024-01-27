<script setup lang="ts">
import { computed } from 'vue'
import twemoji from 'twemoji'

type Props = {
  emoji: string
}

const props = defineProps<Props>()

const source = computed(() => {
  return twemoji.parse(props.emoji, { folder: 'svg', ext: '.svg' }).match(/(?<=src=").+(?=")/)![0]
})
</script>

<template>
  <img class="size-full" :src="source" :alt="emoji" draggable="false" />
</template>
