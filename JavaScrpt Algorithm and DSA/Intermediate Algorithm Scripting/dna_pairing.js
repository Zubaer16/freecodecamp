function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i + 1) !== -1) {
      return String.fromCharCode(str.charCodeAt(i) + 1)
    }
  }
}

console.log(fearNotLetter('stvwx'))