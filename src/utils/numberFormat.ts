export function formatNumber(number: number | string) {
  const price = typeof number === 'string' ? Number(number) : number
  if (!isNaN(price)) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
    })
    return formatter.format(price).replace(',', ' ')
  } else {
    return number
  }
}

export const FixNumbers = (numOrStr: number | string) => {
  const num = Number(numOrStr)
  const number = Number(num.toFixed(2))
  return formatNumber(isNaN(number) ? numOrStr : number)
}
