export function getFormattedDate(date: Date) {
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  const days = date.getDate().toString().padStart(2, '0')
  const months = (date.getMonth() + 1).toString().padStart(2, '0')
  const years = date.getFullYear()
  return `${hours}:${minutes}:${seconds}, ${days}.${months}.${years}`
}
