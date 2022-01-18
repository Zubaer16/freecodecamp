function rot13(str) {
  let arr = str.split(' ')
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let lemp = ''
    for (let j = 0; j < temp.length; j++) {
      if (90 - temp.charCodeAt(i) + 1 > 13) {
        lemp += temp.replace(
          arr[i][j],
          String.fromCharCode(temp.charCodeAt(i) + 13)
        )
      } else {
        lemp += temp.replace(
          arr[i][j],
          String.fromCharCode(temp.charCodeAt(i) - 13)
        )
      }
    }
    newArr.push(lemp)
  }
  return newArr
}

console.log(rot13('SERR PBQR PNZC'))
