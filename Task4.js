function findOutlier(integers){
  let arr1 = []
  let arr2 = []
  let len1
  let len2

  for (let i=0; i<integers.length; i++) {
    if (integers[i] % 2 === 0) {
      arr1.push(integers[i])   
    } else {
      arr2.push(integers[i])  
      
  len1 = arr1.length   
  len2 = arr2.length
  }
    
  return len1 < len2 ? parseInt(arr1) : parseInt(arr2)
}
