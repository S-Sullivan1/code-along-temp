
let names = ['Jim','Bob','Sue','Mary']
//console.log(names[1])

for (let name of names){
    console.log("This person's name is " + name)
}

let jim = {name: 'Jim', grade: 97}
let bob = {name: 'Bob', grade: 92}
let sue = {name:'Sue', grade: 99}

let students =[jim, bob, sue, {name:'Mary', grade: 98}]

console.log(students)
console.log(students[1])
console.log(students[1].grade)


for (let student of students){
    console.log(`${student.name} has a grade of ${student.grade}`)
}