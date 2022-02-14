function updateInventory(arr1, arr2) {
  let newArr = [...arr1]
  newArr.map(function (elem1, index) {
    arr2.map(function (elem2) {
      if (elem2.indexOf(elem1[1]) > 0) {
        let arr = [elem1[0] + elem2[0], elem1[1]]
        arr1[index] = arr
      }
    })
  })

  arr2.map(function (elem2) {
    let count = 0
    newArr.map(function (elem1) {
      if (elem1.indexOf(elem2[1]) == -1) {
        count++
      }
      if (count == 4) {
        arr1.push(elem2)
      }
    })
  })

  arr1.sort(function (a, b) {
    if (a[1] > b[1]) {
      return 1
    } else if (a[1] < b[1]) {
      return -1
    }
    return 0
  })

  return console.log(arr1)
}


var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
]

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
]

updateInventory(curInv, newInv)
