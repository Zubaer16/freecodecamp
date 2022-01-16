function truthCheck(collection, pre) {
  return collection.every((element) => element[pre])
}

console.log(truthCheck([{ single: 'double' }, { single: NaN }], 'single'))
