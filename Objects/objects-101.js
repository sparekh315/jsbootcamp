let myBook = {
    title: 'some title',
    author: 'some author',
    pageCount: 400
}

console.log(`${myBook.title} by ${myBook.author}`)

//you can change a value by reassinging it. 

myBook.title = 'Another title';

console.log(`${myBook.title} by ${myBook.author}`)


//the first console log would show title some title. the second would show another title. 

let person = {
    name: 'Edith', 
    age: 22, 
    location: 'New York'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)