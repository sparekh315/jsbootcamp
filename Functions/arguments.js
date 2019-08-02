//multiple arguments

let add = function (a, b, c) {
    return a + b + c;
}

let result = add(1, 5, 2);
console.log(result);


//Default Arguments 
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score;
}

let newText = getScoreText(undefined, 99)
console.log(newText);
//Would return Anonymous as name because it's the default when no value is provided, and a score of 99.

//multiple arguments, plus a default argument for tipPercent. If wanted to override default would put something else, like .15 with a comma after 100.

let tipAmount = function (total, tipPercent = .2) {
    return total * tipPercent;
}

let theTip = tipAmount(100);
console.log(theTip);

