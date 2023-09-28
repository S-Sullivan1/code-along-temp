let greeting = 'hello'
console.log(greeting)

let message = greeting
console.log('message', message)

greeting = 'good bye'
console.log ('message', message)
console.log('greeting', greeting)

let car = {
    color: 'red'
}
console.log(car.color)

let truck = car
console.log (truck.color)
car.color = 'green'
console.log (truck.color)