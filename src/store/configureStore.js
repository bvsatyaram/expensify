import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const configureStore = () => {
  const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  }));

  return store;
}

export default configureStore;
