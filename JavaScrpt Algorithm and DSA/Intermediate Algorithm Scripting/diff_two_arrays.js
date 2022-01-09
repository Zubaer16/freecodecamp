function diffArray(arr1, arr2) {
  let newarr = []
  for (let i = 0; i < arr1.length; i++) {
    let flag = 0
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        flag = 1
        break
      }
    }
    if (flag != 1) {
      newarr.push(arr1[i])
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let flag = 0
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        flag = 1
        break
      }
    }
    if (flag != 1) {
      newarr.push(arr2[i])
    }
  }
  return newarr
}
console.log(diffArray([7, 8], [1, 2, 3, 4, 5]))
//[1,2,3,5,1,2,3,4,5]
