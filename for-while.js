// циклы
//условный цикл
//while(true) {
//    console.log('это вечный цикл')
//}

// let limit = 15
// let x = 0
// while(limit > x) {
//     if (x % 2 == 0){
//         console.log(x)
//     }
//     x++
// }
// console.log('------------------')
// //циклф со счетчиком
// for (let i = 0; i < 10 ; i++){
//     console.log(i)
// }

//ряд Фибоначчи
const limit = 15
if (limit === 0 || limit === 1) {
    console.log('Число Фибоначчи равно: ', limit)
}
let sum = 1
let prevNum = 1
let prevPrevNum = 0
for (let i = 0; i < limit; i++) {
    sum = prevNum + prevPrevNum
    prevPrevNum = prevNum
    prevNum = sum
    
}
console.log('Число Фибоначчи равно: ', sum)