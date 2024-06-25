export function currencyFormat(value) {
  if (!value) return ''
  value = Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN'
  })
  return value
}

export function formatDate(value) {
  let currentDate = new Date(value)
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
  return currentDate.toLocaleDateString('en-US', options)
}
