//DOM -Document Object Model

//This finds the first instance of what you're looking for, and removes it. This one looks for the paragraph tag.
//Query and remove
//const p = document.querySelector('p')
//p.remove()

//This finds all instances of what you're looking for, and removes it. Uses all and a for each.

const ps = document.querySelectorAll('p') 

ps.forEach(function (p) {
    p.textContent = '********'//manipulates value and changes it. textContent is a property.
    //console.log(p.textContent) //reads the values and prints to console. textContent is a property. 
    //p.remove() //removes the values
})


