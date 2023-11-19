export function getSchedule() {
  const hours = new Date().getHours()
  let greeting = ''

  switch (true) {
    case hours >= 5 && hours < 12:
      greeting = 'Good morning'
      break
    case hours >= 12 && hours < 18:
      greeting = 'Good afternoon'
      break
    default:
      greeting = 'Goodnight'
      break
  }

  return { greeting }
}
