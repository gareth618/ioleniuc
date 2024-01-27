export function fileIndex(file: string) {
  return parseInt(file.slice(0, file.indexOf('-')))
}

export function fileName(file: string) {
  return file.slice(file.indexOf('-') + 1)
}
