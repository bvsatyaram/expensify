export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  if (text !== '') {
    text = text.toLowerCase();
    expenses = expenses.filter((expense) => {
      return ((expense.description.toLowerCase().indexOf(text) !== -1) || (expense.note.toLowerCase().indexOf(text) !== -1));
    });
  }
  expenses = expenses.sort((e1, e2) => {
    return (sortBy === 'amount') ? (e1.amount - e2.amount) : (e1.createdAt - e2.createdAt);
  });
  if (startDate) {
    expenses = expenses.filter((expense) => expense.createdAt >= startDate);
  }
  if (endDate) {
    expenses = expenses.filter((expense) => expense.createdAt <= endDate);
  }
  return expenses;
};
