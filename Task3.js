function duplicateCount(text) {
  if (text.length === 0) return 0
  text = text.toLowerCase()
  let obj = {}
  let obj2 = {}
    for (let y of text) {
      if (y in obj) obj[y] += 1
      else obj[y] = 1 
    }
    for (let n in obj) {
      if (obj[n] > 1) 
       obj2[n] = 1
    }
    let sum = Object.values(obj2).reduce((a, b) => a+b, 0)
    return sum
}
