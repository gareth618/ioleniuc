import sharp from 'sharp'
import { existsSync, statSync } from 'fs'
import { mkdir, readdir, rm } from 'fs/promises'

async function compressCollection(collection, width, height) {
  if (existsSync(`public/${collection}`)) {
    await rm(`public/${collection}`, { recursive: true, force: true })
  }
  await mkdir(`public/${collection}`)

  for (const file of await readdir(`inputs/${collection}`)) {
    const position = file.lastIndexOf('.')
    const name = file.slice(0, position)
    const extension = file.slice(position + 1)
    if (!['png', 'jpg', 'jpeg', 'webp', 'avif'].includes(extension)) continue

    await sharp(`inputs/${collection}/${file}`)
      .rotate()
      .resize(width, height, { fit: 'fill' })
      .webp()
      .toFile(`public/${collection}/${name}.webp`)

    const size1 = statSync(`inputs/${collection}/${file}`).size / (1 << 20)
    const size2 = statSync(`public/${collection}/${name}.webp`).size / (1 << 20)
    console.log(size1.toFixed(2), '=>', size2.toFixed(2), Math.floor(100 - size2 / size1 * 100) + '%')
  }
}

await compressCollection('photo', 300, 300)
await compressCollection('book', 230, 350)
await compressCollection('series', 240, 350)
await compressCollection('author', 300, 300)
