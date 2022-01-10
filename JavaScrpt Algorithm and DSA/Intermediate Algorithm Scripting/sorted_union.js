function uniteUnique(...arr) {
  let newArr = []
  arr.forEach(function (element) {
    element.forEach(function (elem) {
      if (newArr.indexOf(elem) < 0) {
        newArr.push(elem)
      }
    })
  })
  return newArr
}

// Or as an arrow function

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
