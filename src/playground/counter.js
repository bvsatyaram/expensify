const counter = {
  val: 0,
  decrement () {
    counter.val--;
    renderApp();
  },
  increment () {
    counter.val++;
    renderApp();
  },
  reset () {
    counter.val = 0;
    renderApp();
  }
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const counterTemplate = (
    <div>
      <h2>Count: {counter.val}</h2>
      <button onClick={counter.decrement}>-1</button>
      <button onClick={counter.increment}>+1</button>
      <button onClick={counter.reset}>Reset</button>
    </div>
  );
  
  ReactDOM.render(counterTemplate, appRoot);
}

renderApp();
