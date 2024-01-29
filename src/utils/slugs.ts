export function slugify(string: string) {
  return string
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll('ă', 'a')
    .replaceAll('â', 'a')
    .replaceAll('î', 'i')
    .replaceAll('ș', 's')
    .replaceAll('ț', 't')
    .replace(/[^\w-]/g, '')
    .replace(/\-+/g, '-')
}
