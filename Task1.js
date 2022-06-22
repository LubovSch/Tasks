function incrementString (string) {
   if (!string.length) return '1'
let sorting = string.split("").filter(cur => '0123456789'.includes(cur))                               //['0', '9', '9']
   if (sorting.length === 0) return `${string}1`

let letters = string.split("").filter(cur => 'abcdefghijklmnopqrstuvwxyz'.includes(cur))               //.join("") только буквы
let arr = []                                                                                            // [9, 9] /// [0, 0, 0,]

     for (let i = 0; i < sorting.length; i ++) {
       arr.push(parseInt(sorting[i]))      
     }

let sorting2 = arr.filter(cur => cur !== 0)

   if (sorting2.length === 0) {
     for (let y = 0; y < arr.length; y ++) {
       if (y === arr.length-1) {
          arr[y] = 1
       }
     }
     return [].concat(...letters, ...arr).join("")
   }

let stringNum = arr.join("")
let num =  Number(stringNum) + 1                                                                          // 100 
let lenNums = arr.length                                                                                  // сколько чисел было 
let newNum = num.toString().split("").length                                                              //сколько теперь чисел
let num1 = num.toString().split("")

    if (lenNums <= newNum) {
      return [].concat(...letters, ...num1).join("")
    }
let array = []
let chislo = num.toString()

    if (lenNums > newNum) {
      for (let x = 0; x < string.length-newNum; x ++) {
         array.push(string[x])
      }
      array.push(chislo)
    }
    return array.join("")
}
