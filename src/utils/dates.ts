export function dateToString(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const yy = year.toString()
  const mm = (month < 10 ? '0' : '') + month.toString()
  const dd = (day < 10 ? '0' : '') + day.toString()
  return `${dd} / ${mm} / ${yy}`
}
