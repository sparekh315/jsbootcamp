const account = {
    name: 'Paula Black',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        this.expenses.forEach(function (expense){
            totalExpenses = totalExpenses + expense.amount
        })

        return `${this.name} has $${totalExpenses.toFixed(2)} in expenses.`
    }
}

// const addExpense = function (description, amount) {
//     return account.expenses.push(description, amount)
// }
//This is how I originally though to do it, which was correct, but we can just add it as an object method. 





account.addExpense('coffee', 3.50)
account.addExpense('plane ticket', 400)
console.log(account.getAccountSummary())