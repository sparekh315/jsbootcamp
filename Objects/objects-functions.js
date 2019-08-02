let myBook = {
    title: 'some title',
    author: 'some author',
    pageCount: 400
}


let otherBook = {
    title: 'Another title',
    author: 'another author',
    pageCount: 420
}


let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
        //this is basically a new object inside of a funciton
    }
}

let myBookSummarry = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(myBookSummarry.pageCountSummary)



let convertFar = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit, 
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temp = convertFar(70);
console.log(temp);