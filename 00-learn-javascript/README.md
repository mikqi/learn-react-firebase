# JavaScript 101

## Table of Contents

1. [Types](#types)
1. [Arithmetic](#arithmetic)
1. [String](#string)
1. [Array](#array)
1. [Object](#object)
1. [Bolean Values](#boolean)
1. [Conditional](#conditional)
1. [Function](#function)

## Types

Javascript terdiri dari tujuh tipe data bawaan:
* `null`
* `undefined`
* `boolean`
* `number`
* `string`
* `object`
* `symbol` - ES6!

**Semua tipe data di atas selain object disebut tipe data "primitif"**

```javascript
typeof undefined === 'undifend' // => true
typeof true === 'boolean' // => true
typeof 42 === 'number' // => true
typeof '42' === 'string' // => true
typeof { count: 42 } === 'object' // => true
```

Cara mendeklarasikan variable di JavaScript tidak perlu menentukan tipe data-nya sepert `static programing language` yaitu Java, C# dan lainnya.

```javascript
// Tipe data string
var x = '1'
typeof x // => string

// Tipe data number
var x = 1
typeof x // => number

// Tipe data array
var x = [1, 2, 3]
typeof x // => object

// Tipe data object
var x = {
  name: 'John Doe',
  age: 17
}
typeof x // => object
```

## Arithmetic
```javascript
console.log(100 + 4 * 11) // => 144
console.log((100 + 4) * 11) // => 1144
console.log(100 / 4) // => 25
console.log(0 / 0) // => Infinity

// MODULUS
console.log(5 % 2) // => 1
console.log(6 % 2) // => 0
console.log(15 % 6) // => 3
```

## String
```javascript
console.log('Ini string') // => 'Ini string'
console.log('ini' + 'concat') // => 'iniconcat'

let name = 'John Doe'
console.log('hi ' + name) // => 'hi John Doe'

// ES6
console.log(`hi ${name}`) // => 'hi John Doe'

console.log(name.length) // => 8
```

## Array
```javascript
const arr = [1, 2, 3, 4]
console.log(arr.length) // => 4
console.log(arr[0]) // => 1
console.log(arr[0] + arr[3]) // => 5
```

## Object
```javascript
const obj = {
  firstName: 'John'
  lastName: 'Doe'
}
console.log(obj.firstName) // => 'John'
console.llg(obj['fistName']) // => 'John'
console.log(`${obj.firstName} ${obj.lastName}`) // 'John Doe'

```

## Boolean
```javascript
console.log( 3 > 2 ) // => true
console.log( 3 < 2 ) // => false
console.log( 3 <= 3 ) // => true
console.log( 4 >= 2 ) // => false
console.log( 3 === 3 ) // => true
console.log( 3 !== 2 ) // => true

// Logical Operators
console.log(true && true) // => true
console.log(true && false) // => false
console.log(true || false) // => true

console.log(1 + 1 === 2 && 3 < 2) // => false
console.log(true ? 1 : 2) // => 1
console.log(false ? 1 : 2) // => 2
```

## Conditional
```javascript
// single condition
if (condition) {
  console.log('true condition')
}

// double condition
if (condition) {
  console.log('true condition')
} else {
  console.log('false condition')
}

// multiple condition
if (condition1) {
  console.log('condition1')
} else if (condition2) {
  console.log('condition2')
} else if (condition3) {
  console.log('condition3')
} else {
  console.log('another condition')
}

let condition = 1
switch condition {
  case 1:
    console.log('1')
    break;
  case 2:
    console.log('2')
    break;
  default:
    console.log('default condition')
}

```

## Function
```javascript
function sum(num) {
  return num + num
}
console.log(sum(3)) // => 6

const sum = function(num) {
  return num + num
}
console.log(sum(2)) // => 4

// ES6: Arrow Function
const sum = num => num + num
console.log(sum(6)) // => 12
```
