const globalArray = [5, 6, 3, 2, 9]

function nonMutatingSort(arr) {
  // Only change code below this line
  let arrr = [...arr]
  return arrr.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1))
  // Only change code above this line
}

console.log(nonMutatingSort([1, 30, 4, 21, 100000]))
