// reverse string
var reverseString = function (s) {
  let num = s.length - 1
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i]
    s[i] = s[num]
    s[num] = temp
    num--
  }

  return s
}

console.log(reverseString(['h', 'e']))
