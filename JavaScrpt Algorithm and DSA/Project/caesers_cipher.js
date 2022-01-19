function rot13(str) {
  let output = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
      output = output + String.fromCharCode(str.charCodeAt(i) + 13)
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) < 91) {
      output = output + String.fromCharCode(str[i].charCodeAt(0) - 13)
    } else {
      output = output + str.charAt(i)
    }
  }
  return output
}

console.log(rot13('SERR PBQR PNZC'))
