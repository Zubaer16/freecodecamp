function convertHTML(str) {
  let tr = str.split('')
  tr.forEach(function (element, index) {
    if (element == '"') {
      tr[index] = '&quot;'
    } else if (element == '&') {
      tr[index] = '&amp;'
    } else if (element == '<') {
      tr[index] = '&lt;'
    } else if (element == '>') {
      tr[index] = '&gt;'
    } else if (element == "'") {
      tr[index] = '&apos;'
    }
  })
  return tr.join('')
}

console.log(convertHTML('Dolce  "abbana"'))
