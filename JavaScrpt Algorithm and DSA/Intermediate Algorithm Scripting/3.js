function destroyer(arr) {
  let args = [...arguments]
  return arr.filter((elem) => !args.includes(elem))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
