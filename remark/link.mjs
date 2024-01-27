import { visit } from 'unist-util-visit'

export function linkPlugin() {
  return tree => {
    visit(tree, 'link', node => {
      if (!node.url.startsWith('/')) {
        node.data ??= {}
        node.data.hProperties ??= {}
        node.data.hProperties.target = '_blank'
      }
    })
  }
}
