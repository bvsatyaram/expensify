import {createStore} from 'redux';

const defaultState = {count: 0};
const store = createStore((state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + (action.incrementBy || 1)
      };
    case 'DECREMENT':
      return {
        count: state.count - (action.decrementBy || 1)
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());  
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

// unsubscribe();

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 3
});

store.dispatch({
  type: 'DECREMENT'
});
