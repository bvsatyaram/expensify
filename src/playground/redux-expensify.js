import {createStore, combineReducers} from 'redux';

// Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
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

console.log(store.getState());
