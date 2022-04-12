const expensePlace = document.getElementById("expensePlace")
const expenseName = document.getElementById("expenseName")
const expenseDate = document.getElementById("expenseDate")
const expenseAmount = document.getElementById("expenseAmount")

const addExpenseButton = document.getElementById("addExpenseButton")
addExpenseButton.addEventListener('click', (e) => {
    e.stopPropagation()
    const expenseItem = {
        date: expenseDate.value,
        name: expenseName.value,
        place: expensePlace.value,
        amount: expenseAmount.value,
        id: Date.now()
    }
    submitExpense(expenseItem)
})
    
function submitExpense(expense) {
    if(expense.name.length > 0) {
       createExpense(expense)
        document.getElementById("form").reset()
    } 

}

function createExpense(expense) {
    const table = document.getElementById('table')
    const row = table.insertRow()
    row.setAttribute('id', expense.id)
    const keys = Object.keys(expense)
    const cell = []

    for(var j = 0; j < keys.length-1; j++){
        cell[j]= row.insertCell(j)
        cell[j].innerText = expense[keys[j]]
    }

    createDeleteButton(row, expense)
    
    const placeHolder = document.getElementById('if-empty')
    table.appendChild(placeHolder)
}

function createDeleteButton(row, expense){
    const deleteButton = document.createElement('button')
    deleteButton.className = 'deleteButton'
    deleteButton.id = expense.id
    deleteButton.textContent = 'X'
    row.appendChild(deleteButton)
    
    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation()  
        removeSameRow(deleteButton)
    })
}

function removeSameRow(deleteButton) {
    const sameRow = document.getElementById(deleteButton.id)
    sameRow.remove()
}
