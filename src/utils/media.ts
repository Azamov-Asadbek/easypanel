const fSExt = ['Bytes', 'KB', 'MB', 'GB']

export const getSize = (s: number) => {
  let fSize = s
  let i = 0
  while (fSize > 900) {
    fSize /= 1024
    i++
  }

  return `${Math.round(fSize * 100) / 100} ${fSExt[i]}`
}
