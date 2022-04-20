const expensePlace = document.getElementById('expensePlace');
const expenseName = document.getElementById('expenseName');
const expenseDate = document.getElementById('expenseDate');
const expenseAmount = document.getElementById('expenseAmount');
const expenseArray = JSON.parse(localStorage.getItem('expenseArray')) || [];

const addExpenseButton = document.getElementById('addExpenseButton');
addExpenseButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    !expenseDate.value ||
    !expenseName.value ||
    !expensePlace.value ||
    !expenseAmount.value
  ) {
    alert('Please fill out all input fields before submitting. ');
    return;
  }

  const expenseItem = {
    id: Date.now(),
    date: expenseDate.value,
    item: expenseName.value,
    location: expensePlace.value,
    amount: expenseAmount.value
  };

  renderTableRow(expenseItem);
  expenseArray.push(expenseItem);
  console.log('expenseArray: ', expenseArray);
  pushToLocalStorage(expenseArray);
  document.getElementById('form').reset();
});

function pushToLocalStorage(array) {
  localStorage.setItem('expenseArray', JSON.stringify(array));
}

function renderTableRow(expense) {
  if (expenseArray.length > 0) {
    document.getElementById('if-empty').classList.add('removeDisplay');
  }
  const newTableRow = document.createElement('tr');
  document.getElementById('main-table').appendChild(newTableRow);

  const dateCell = createCell(expense.date);
  newTableRow.appendChild(dateCell);

  const itemCell = createCell(expense.item);
  newTableRow.appendChild(itemCell);

  const locationCell = createCell(expense.location);
  newTableRow.appendChild(locationCell);

  const amountCell = createCell('$' + expense.amount);
  newTableRow.appendChild(amountCell);

  const deleteCell = document.createElement('td');
  const deleteButton = createDeleteButton(expense);
  newTableRow.appendChild(deleteCell);
  deleteCell.appendChild(deleteButton);
}

function createCell(expense) {
  const dataCell = document.createElement('td');
  dataCell.textContent = expense;
  return dataCell;
}

function createDeleteButton(expense) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    deleteExpense(deleteButton, expense.id);
  });
  return deleteButton;
}

const deleteExpense = (deleteButton, id) => {
  deleteButton.parentElement.parentElement.remove();
  for (let i = 0; i < expenseArray.length; i++) {
    if (expenseArray[i].id === id) {
      expenseArray.splice(i, 1);
      pushToLocalStorage(expenseArray);
    }
  }
};

window.addEventListener('load', (e) => {
  e.preventDefault();

  expenseArray.forEach((savedExpense) => {
    renderTableRow(savedExpense);
  });
});
