let easyStr = '  Клуб космонавтики - это все!  '

console.log(easyStr)
console.log(easyStr.trim())
console.log(easyStr.trimEnd())
console.log(easyStr.trimStart())

console.log(easyStr.toLowerCase())
console.log(easyStr.toUpperCase())

console.log(easyStr.startsWith('Клуб'))
console.log(easyStr.toLowerCase('  Клуб  '))

console.log(easyStr.endsWith('все!'))
console.log(easyStr.endsWith('все!  '))

console.log(easyStr.includes('это'))
console.log(easyStr.includes('shc kschkisj,'))

console.log(easyStr.substring(0, 7))
console.log(easyStr.substring(2, 7))

console.log(easyStr.trim().split(' '))
console.log(easyStr.trim().split('')[1])

console.log(easyStr.charAt(5))
console.log('А и Б '.repeat(5))
console.log(easyStr.replace('все', 'кружок'))
console.log(easyStr.replace(' ', ' '))
console.log(easyStr.replaceAll(' ', '|'))