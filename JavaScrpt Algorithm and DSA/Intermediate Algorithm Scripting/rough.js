function orbitalPeriod(arr) {
  const GM = 398600.4418
  let newArr = [...arr]
  const earthRadius = 6367.4447
  arr.forEach(function (element, index) {
    newArr[index].orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(element.avgAlt + earthRadius, 3) / GM)
    )
    delete newArr[index].avgAlt
  })
  return newArr
}

console.log(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 },
  ])
)
