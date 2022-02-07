const exArray = [7.7,8.9,6.3,9.2]

console.log(exArray[0], exArray[1])
console.log(exArray[10])

exArray[20]=12.3
exArray[15]=13.3
console.log(exArray)

console.log(exArray.length)

exArray.push({id:3}, false, null, "olá")

console.log(exArray.pop())


console.log(exArray)

delete exArray[3]
console.log(exArray)