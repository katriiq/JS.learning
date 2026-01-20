//1. преобразование к строке

let toStrFromNumber_1 = String(1.5)
console.log(toStrFromNumber_1, typeof toStrFromNumber_1)

let toStrFromNumber_2 = String(Infinity)
console.log(toStrFromNumber_1, typeof toStrFromNumber_2)

let toStrFromBool = String(true)
console.log(toStrFromBool, typeof toStrFromBool)

let toStrFromNull = String(null)
console.log(toStrFromNull, typeof toStrFromNull)

let und;
let toStrFromUndefined = String(und)
console.log(toStrFromUndefined, typeof toStrFromUndefined)

let obj = {}
let toStrFromObject = String(obj)
console.log(toStrFromObject, typeof toStrFromObject)

console.log(".................................")

//преобразование к числу

console.log(Number(""))
console.log(Number("0"))
console.log(Number("45.7"))
console.log(Number("054"))
console.log(Number("My home"))
console.log(Number("one"))
console.log(Number("      45       "))
console.log(Number("      45y"))
console.log(Number("Infinity"))
console.log(Number("Nan"))
console.log(Number("102,6"))
console.log("--------------------------------------")
console.log(Number(true))
console.log(Number(false))
console.log(Number(null))
console.log(Number(undefined))
console.log(Number({}))

console.log("--------------------------------------")
console.log(Boolean(""))
console.log(Boolean("        "))
console.log(Boolean("0"))
console.log(Boolean("1"))
console.log(Boolean("true"))
console.log(Boolean("false"))
console.log(Boolean("My day"))

console.log("--------------------------------------")
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(-1))
console.log(Boolean(0.1))
console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))
console.log(Boolean(NaN))

console.log("--------------------------------------")
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean({}))