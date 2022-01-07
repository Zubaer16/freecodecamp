function urlSlug(title) {
  return title
    .toLowerCase()
    .split(/\W/)
    .filter((elem) => elem != '')
    .join('-')
}
console.log(urlSlug(' Winter Is   Coming'))
