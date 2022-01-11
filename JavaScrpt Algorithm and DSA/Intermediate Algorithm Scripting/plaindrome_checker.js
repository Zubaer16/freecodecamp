function palindrome(str) {
  let input = str.toLowerCase().replace(/_|\W+/g, '').split('')
  let output = []
  for (let i = input.length - 1; i >= 0; i--) {
    output.push(input[i])
  }

  return input.join('') === output.join('')
}

console.log(palindrome('A man, a plan, a canal. Panama'))
