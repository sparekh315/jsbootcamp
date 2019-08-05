todo = ['get groceries', 'do laundry', 'clean room', 'plan vacation', 'organize closet'];


todo.splice(2, 1);
todo.push('My New ToDo');
console.log(todo.shift());
console.log(todo)

console.log(`You have ${todo.length} todos!`)
//console.log(todo)

todo.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})

//this for loop will achieve the same results as the forEach above
// for (let count = 0; count < todo.length; count++) {
//     console.log(`${count + 1}. ${todo[count]}`)
// }
//either will achieve the same thing. 


// console.log(`Todo: ${todo[0]}`)
// console.log(`Todo: ${todo[todo.length-2]}`)