export function getHours() {
  const data = new Date()
  const hours = String(data.getHours()).padStart(2, '0')
  const minutes = String(data.getMinutes()).padStart(2, '0')
  const suffix = hours >= 12 ? 'PM' : 'AM'

  const currentTime = `${hours}:${minutes} ${suffix}`

  return { currentTime }
}
