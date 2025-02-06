const HOURS_PER_DAY = 7.45

export const calculateManDays = (hours) => {
  if (hours === '' || isNaN(hours) || hours < 0) {
    return ''
  }

  const hoursNum = parseFloat(hours)
  const manDays = (hoursNum / HOURS_PER_DAY).toFixed(2)

  return manDays
}