let code = 'SERR'.split('')
let newArr = []
for (i = 0; i < code.length; i++) {
  if (90 - code[i].charCodeAt(i) > 26) {
    newArr.push(String.fromCharCode(code[i].charCodeAt(0) + 13))
  } else {
    newArr.push(String.fromCharCode(code[i].charCodeAt(0) - 13))
  }
}
console.log(newArr)
