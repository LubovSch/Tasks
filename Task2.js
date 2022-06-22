function countBits (n) {
  if (n === 0) return 0
  
let twoNum = n.toString(2)
let sum = 0
let arr = []

  for (let i = 0; i < twoNum.length; i ++) {
      arr.push(parseInt(twoNum[i]))
  }
  return arr.filter(cur => cur === 1).length
}
