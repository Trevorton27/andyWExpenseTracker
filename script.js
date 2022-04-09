const expensePlace = document.getElementById("expensePlace")
const expenseName = document.getElementById("expenseName")
const expenseDate = document.getElementById("expenseDate")
const expenseAmount = document.getElementById("expenseAmount")

const addExpenseButton = document.getElementById("addExpenseButton")
addExpenseButton.addEventListener('click', (e) => {
    e.stopPropagation()
    const expenseItem = {
        place: expensePlace.value,
        name: expenseName.value,
        amount: expenseAmount.value,
        date: expenseDate.value,
        id: Date.now()
    }
    console.log('expenseItem ', expenseItem)
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
    console.log(expense[keys[j]])
    for(var j = 0; j < keys.length; j++){
        cell[j]= row.insertCell[j]
        cell[j].innerText = expense[keys[j]]
    }
    
    for(i = 0; i < inputs-1; i++) {
        cell[i] = row.insertCell(i)
        cell[i].innerText = expenseInputs[i]   
    }
    createDeleteButton(row)

    const placeHolder = document.getElementById('if-empty')
    table.appendChild(placeHolder)
}
function createDeleteButton(row){
    const deleteButton = document.createElement('button')
    deleteButton.className = 'deleteButton'
    deleteButton.setAttribute('id', expenseInputs[4].id)
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
