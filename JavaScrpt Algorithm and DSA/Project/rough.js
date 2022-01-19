let code = 'SERR?'
let output = ''
for (let i = 0; i < code.length; i++) {
  if (code.charCodeAt(i) > 64 && code.charCodeAt(i) < 78) {
    output = output + String.fromCharCode(code.charCodeAt(i) + 13)
  } else if (code.charCodeAt(i) > 78 && code.charCodeAt(i) < 91) {
    output = output + String.fromCharCode(code[i].charCodeAt(0) - 13)
  } else {
    output = output + code.charAt(i)
  }
}
console.log(output)
