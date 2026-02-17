

// //объявление функции
// function sayHi(who) {
//     let adj = 'рыжий'
//     console.log('привет', adj, who)
// }
// let name = ('Габи')
// //вызов функции 
// sayHi();
// sayHi('федот', 'ты классный');
// sayHi(name);

// function lineral(x) {
//     return 4 * x + 10
// }

// console.log(lineral(1), lineral(5), lineral(9))

// function hiper(x) {
//     if (x === 0) {

//     } else {
//         return 5 / x
//     }
// }

// console.log(hiper(0), hiper(10), hiper(3))

//способы объявления функций
function sum(a,b) {
    return a+b
}

let sum2 = function(a, b){ 
    return a+b
}

console.log(sum(1, 5))
console.log(sum2(1, 5))

let multi = (a, b) => a*b
let multiBig = (a, b) => {
    return a*b
}

let sayWelcome = () => console.log('добро пожаловать')
let sayForbidden = () => console.log('доступ запрещен')

function checkMe(age, yes, no){
    if(age > 14) {
        no()
    } else {
        yes()
    }
}

checkMe(19, sayWelcome, sayForbidden)