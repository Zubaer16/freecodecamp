function steamrollArray(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== undefined) {
      newArr.push(...steamrollArray(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(steamrollArray([1, {}, [2], [3, [[4]]]]))
