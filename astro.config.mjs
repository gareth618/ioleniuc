import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import { textPlugin, linkPlugin } from './remark/link.mjs'

export default defineConfig({
  integrations: [mdx(), tailwind(), vue()],
  markdown: {
    remarkPlugins: [textPlugin, linkPlugin],
  },
})
