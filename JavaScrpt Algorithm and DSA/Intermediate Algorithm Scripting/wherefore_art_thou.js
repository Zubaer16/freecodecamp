function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source)

  // filter the collection
  return collection.filter(function (obj) {
    let temp = 0
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        obj.hasOwnProperty(srcKeys[i]) &&
        obj[srcKeys[i]] === source[srcKeys[i]]
      ) {
        temp++
      }
    }

    if (temp == srcKeys.length) {
      return true
    }
    return false
  })
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio' },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Montague' }
  )
)
