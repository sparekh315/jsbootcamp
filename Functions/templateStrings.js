let calcTip = function (total, tipPercent = .2){
    let percent = tipPercent * 100
    let newTip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${newTip}`
}

let theTip = calcTip(100)
console.log(theTip)


//calculations can also be embedded directly into template strings
let getTip = function (total, tipPercent = .2) {
    return  `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let newTip = getTip(100)
console.log(newTip)

//You can use either, the second is more math heavy, therefore a bit messier. 