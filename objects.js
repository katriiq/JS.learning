let dog = {
    color: 'шоколадный',
    name: 'Габи',
    weight: 13.3,
    height: 1.2,
    age: 11,
    allergic: false,
    owner:{
        name: 'Герман',
        age: 30,
    }
}

console.log(dog)
dog.weight = 13.1
console.log(dog)

//массивы
let arrayOfThings = [
    true,
    34,
    'Петя',
    dog,
    {hi: 'Say hi'},
    null,
    undefined,
]
console.log(arrayOfThings)
console.log(arrayOfThings[2])