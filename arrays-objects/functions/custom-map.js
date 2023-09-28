function customMap(array, callback){
    let returnArray =  []
   for(let i = 0; i < array.length; i++){
       const result = callback(array[i])
       returnArray.push(result)
   }
return returnArray
}

const arrayOfNumbers = [2,4,6,8,10,12]

function multiplyByFour(numberToMultiply){
    return numberToMultiply * 4

}

// arrow function

const multiplyByFourWithArrow = (numberToMultiply) => {
    return numberToMultiply * 4
}

const resultFromCustomMap = customMap(arrayOfNumbers,multiplyByFour)

console.log("numbers that were multiplied", resultFromCustomMap)