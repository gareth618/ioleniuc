<script setup lang="ts">
import { computed } from 'vue'
import twemoji from 'twemoji'

type Props = {
  emoji: string
}

const props = defineProps<Props>()

const source = computed(() => {
  const oldSource = twemoji.parse(props.emoji, { folder: 'svg', ext: '.svg' }).match(/(?<=src=").+(?=")/)![0]
  const lastSlashIndex = oldSource.lastIndexOf('/')
  return 'https://abs-0.twimg.com/emoji/v2/svg/' + oldSource.slice(lastSlashIndex + 1)
})
</script>

<template>
  <img class="size-full" :src="source" :alt="emoji" draggable="false" />
</template>
