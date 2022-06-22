function highestRank(arr) {
  
 const obj = {}
 
   for (let num of arr) {
     if (num in obj) obj[num] += 1
     else obj[num] = 1
   }
  
 let arrValue = Object.values(obj)
 let number = Math.max(...arrValue)
 let numVin = []
 
   for (let nums in obj) {
     if (obj[nums] === number) 
      numVin.push(nums)
   }
  
   return numVin.length === 1 ? Number(numVin) : Math.max(...numVin)
}
