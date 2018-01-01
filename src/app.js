import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {getVisibleExpenses} from './selectors/expenses';
import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleExpenses(state.expenses, state.filters).map((expense) => expense.description));
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 2500, createdAt: 45 }));
store.dispatch(addExpense({ description: 'Coffee', amount: 3000, createdAt: 35 }));

// store.dispatch(removeExpense(expenseOne.expense.id));
store.dispatch(editExpense({
  id: expenseOne.expense.id,
  amount: 2700
}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(40));
store.dispatch(setStartDate());
store.dispatch(setEndDate(47));
store.dispatch(setStartDate(40));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
