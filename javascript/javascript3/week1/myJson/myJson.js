const bookShop =`{
    "specifications":"children leterature",
    "author":"Astrid Lindgren",
    "bookId": 241,
    "pages": 95,
    "condition":"new"
}`

console.log(bookShop)

const toJsObject = JSON.parse(bookShop)
console.log(toJsObject)
console.log(toJsObject.author)

const backToJSON = JSON.stringify(toJsObject)
console.log(backToJSON)