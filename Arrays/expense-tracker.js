const account = {
    name: 'Paula Black',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })

    },

    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function (expense){
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(addIncome){
            totalIncome = totalIncome + addIncome.amount
        })


        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome.toFixed(2)} in income, and $${totalExpenses.toFixed(2)} in expenses.`
    }
}

// const addExpense = function (description, amount) {
//     return account.expenses.push(description, amount)
// }
//This is how I originally though to do it, which was correct, but we can just add it as an object method. 




account.addIncome('freelance', 4000)
account.addExpense('coffee', 3.50)
account.addExpense('plane ticket', 400)
console.log(account)
console.log(account.getAccountSummary())