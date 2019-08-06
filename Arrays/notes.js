//part one: working with an array
// const notes = ['Note 1', 'Note 2', 'Note 3' ] 
 

//part two: working with an array of objects

const notes = [{
    title: 'Vacation ideas',
    body: 'I would like to visit Valencia'
},{ 
    title: 'Meditation',
    body: 'I would like to meditate twice a day'

}, {
    title: 'Organize Desk',
    body: 'I would like to organize my desk space'
}]

//these two methods alter the array from the end


// console.log(notes.pop()) //this removes the last item in the array. Putting it in a console log or variable returns the removed item.

// notes.push('My New Note'); //this will add this new note to the end of the array. 


//these two methods alter the array from the front
// console.log(notes.shift());
//this removes the first item in an array.
// notes.unshift('First note');
//this adds an item to the front of an array. 

//splice is used if you want to remove and add items at once.

//notes.splice(1, 1, 'This is the new second item')

//this starts at index 1 (note 2), removes the note at index 1, then replaces it with the new item. You can also put zero for the second 1, and will keep note two, and put it behind the new note. 

// notes[2] = 'This is now the new note 3'
//this will remove the item at index two (note 3), and replace it with the new note. 


//for each applies an action to each. It is a function inside a function. This is called a callback function. It does not need to be put in a console log below or a var to run. We have access to the API in the console, and it will render the info we are asking for in the function. 
// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })




//this would return 3
//console.log(notes[notes.length -2])
//this would return note 2. the end of the array, minus two spots. 


//initializer: sets a starting point for count. In this case, we cant to count from 0 to 2, so we start at 0. (count = 0. condition: condition will be true, and be false when loop should stop running.  In this case, we want to stop when condition is more than two, so when it is three, it will be false and no longer run. count <= 2. Final expression increases count by a set number each time it runs until the condition is false. In this case, we want to increase count by 1 each time the loop runs. count++. If it were more than one, we would use count = count+5. 

// for (let count = 0; count <=2; count++) {
//     console.log(count)
// }
//this would print 0,1,2. It's not displaying the items in the array, just the index of each item. 
// for (let count = 2; count >=0; count--) {
//     console.log(count)
// }
//this would print the count in reverse order 2,1,0. 

//this for loop recreates the forEach up above. 
//you can grab each items in the array by the index(count).
//will return each item in the array. 
// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

//this will return each item in reverse order
// for (let count = notes.length -1; count >=0; count--) {
//     console.log(notes[count])
// }

//sort organizes the objects/items in an array. In this case, we will be sorting by the title.  Make sure to include toLowerCase if a string. 

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

//find index will find a specific thing in am array of objects. It will stop running after it finds the first match of what you're searching for.

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index){
//     console.log(note)
//     return note.title === 'Meditation'
// })

// console.log(index)

//A search function with reausibility using findIndex. This can be used to find an object by index for example, if you would like to remove it. If it doesn't find it, it returns -1 instead of the index of the item you were searching for. 

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index){
//         return note.title.toLowerCase() === note.title.toLowerCase
//     })
//     return notes[index]
// }

//find metod 
//returns whole object, not the index
// const findNotes = function (notes, noteTitle) {
//     return notes.find(function (note, index){
//         return note.title.toLowerCase() === note.title.toLowerCase()
//     })
// }

// const note = findNotes(notes, 'vacation ideas')
// console.log(note)




// console.log(notes)


//filter takes an existing array, and filters some items from it into a new array. For example, filter completed tasks into a new array. Or objects that contain a certain word. 

// const findNotes = function (notes, query) {
//   return notes.filter (function (note) { 
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//     return isTitleMatch || isBodyMatch

//   })
// }

// console.log(findNotes(notes, 'va'))