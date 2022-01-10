function convertHTML(str) {
  let tr = str.split('')
  tr.forEach(function (element) {
    if (element == '>') {
      element = 'hi'
    }
  })
  return tr.join('')
}

console.log(convertHTML('Dolce > abbana >'))
