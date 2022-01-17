function addTogether() {
  let [first, second] = arguments
  if (typeof first !== 'number') {
    return undefined
  } else if (second === undefined) {
    return (second) => addTogether(first, second)
  } else if (typeof second !== 'number') {
    return undefined
  }
  return first + second
}

addTogether(2, 3)
