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



// const paragraphs = document.querySelectorAll('p') 

// paragraphs.forEach(function (p) {
//     if (p.textContent.includes('the')) {
//         p.remove() //removes the values
//     }
  
// })

//create a paragraph that says how many todos are left (value of false for completed)

const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2') 
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)


todos.forEach(function (todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})
