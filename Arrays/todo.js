//todo = ['get groceries', 'do laundry', 'clean room', 'plan vacation', 'organize closet'];

const todos = [{
    text: 'get groceries',
    completed: false
},{
    text: 'do laundry',
    completed: true
}, {
    text: 'clean room',
    completed: false
}, {
    text: 'plan vacation',
    completed: true
}, {
    text: 'organize closet',
    completed: false
}]

// todo.splice(2, 1);
// todo.push('My New ToDo');
// console.log(todo.shift());
// console.log(todo)

// console.log(`You have ${todo.length} todos!`)
// //console.log(todo)

// todo.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

//this for loop will achieve the same results as the forEach above
// for (let count = 0; count < todo.length; count++) {
//     console.log(`${count + 1}. ${todo[count]}`)
// }
//either will achieve the same thing. 


// console.log(`Todo: ${todo[0]}`)
// console.log(`Todo: ${todo[todo.length-2]}`)


//we want to delete an item from our array of objects. We will locate it using the index position, and the text used in that object. 

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    });
    if(index > -1) {
        todos.splice(index, 1)
    };
};

// deleteTodo(todos, 'organize closet');
//console.log(todos);




  //filter method to return only objects in array that have not been completed. tolowercase is not needed because it's a boolean not a string you're trying to find. 

 const getThingsToDo = function (todos) {
     return todos.filter(function (todo){
         return !todo.completed
     })
 }

//   console.log(getThingsToDo(todos))


const sortToDo = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortToDo(todos)
console.log(todos)