import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Expense Action Generators
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = (expenseId) => ({
  type: 'REMOVE_EXPENSE',
  expenseId
});

const editExpense = (expense) => ({
  type: 'EDIT_EXPENSE',
  expense
});

// Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => (expense.id !== action.expenseId));
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.expense.id) {
          return {
            ...expense,
            ...action.expense
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  expenses: expenseReducer,
  filters: filtersReducer
}));

store.subscribe(() => {
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 2500 }));
store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// store.dispatch(removeExpense(expenseOne.expense.id));
store.dispatch(editExpense({
  id: expenseOne.expense.id,
  amount: 3500
}));
