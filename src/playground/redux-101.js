import {createStore} from 'redux';

const defaultState = {count: 0};
const store = createStore((state = defaultState) => state);

console.log(store.getState());
