let some = 0 
// if (a > 2) {
//     //блок кода
// } else if (a > 2){
//     //ещеткакой-то код
// } else if (a > 2){
// } else if (a > 2){
//     //ещеткакой-то код
// } else if (a > 2){
//     //всегда последний
// }

// a*x*x + b*x + c = y
let a = 1
let b = -1
let c = -1
let disc = b*b -4*a*c
if(disc <0){
    console.log('корней нет')
} else if (disc == 0){
    let root = -b/(2*a)
    console.log('корней один корень ' + root)
} else {
    let sqrtOfDiscs = Math.sqrt(disc)
    let root1 = (-b + sqrtOfDiscs) / (2 * a)
    let root2 = (-b - sqrtOfDiscs) / (2 * a)
    console.log('два корня : х1 = ' + root1 + ' ,x2 = ' + root2)
}