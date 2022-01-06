const squareList = (arr) => {
  // Only change code below this line

  return arr
    .filter((number) => number > 0 && Number.isInteger(number))
    .map((number) => number * number)
  // Only change code above this line
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
