

//объявление функции
function sayHi(who) {
    let adj = 'рыжий'
    console.log('привет', adj, who)
}
let name = ('Габи')
//вызов функции 
sayHi();
sayHi('федот', 'ты классный');
sayHi(name);

function lineral(x) {
    return 4 * x + 10
}

console.log(lineral(1), lineral(5), lineral(9))

function hiper(x) {
    if (x === 0) {

    } else {
        return 5 / x
    }
}

console.log(hiper(0), hiper(10), hiper(3))

