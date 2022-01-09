function myReplace(str, before, after) {
  if (
    before[0] == before[0].toUpperCase() &&
    after[0] == after[0].toLowerCase()
  ) {
    let afterc = after.replace(after[0], after[0].toUpperCase())
    return str.replace(before, afterc)
  } else if (
    before[0] == before[0].toLowerCase() &&
    after[0] == after[0].toUpperCase()
  ) {
    let afterc = after.replace(after[0], after[0].toLowerCase())
    return str.replace(before, afterc)
  } else {
    return str.replace(before, after)
  }
}
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'))
console.log(myReplace('I think we should look up there', 'up', 'Down'))
console.log(myReplace('Let us go to the store', 'store', 'mall'))
