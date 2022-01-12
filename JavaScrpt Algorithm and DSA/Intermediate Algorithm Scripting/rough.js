function palindrome(str) {
  input = str.toLowerCase().replace(/_|\W+/g, '').split('')
  console.log(input)
  output = []
  for (let i = input.length - 1; i >= 0; i--) {
    output.push(input[i])
  }

  console.log(input.join(''))
  console.log(output.join(''))
  if (input.join('') === output.join('')) {
    return true
  }
  return false
}

console.log(palindrome('A man, a plan, a canal. Panama'))
