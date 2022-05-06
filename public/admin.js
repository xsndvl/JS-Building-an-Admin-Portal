
// Your Code Here
async function main() {
    let response = await fetch("http://localhost:3001/listBooks")
    let books = await response.json()

    console.log(books)

    const showBook = (book) => {
        let newBook = document.createElement("div")
        let title = document.createElement("h3")
        let quantityInput = document.createElement("input")
        let submitQuantity = document.createElement("button")
        let deleteBook = document.createElement("button")


    }

    books.forEach(showBook)
}