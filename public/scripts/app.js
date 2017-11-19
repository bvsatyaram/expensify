'use strict';

var appData = {
  title: 'Indecision App',
  subTitle: 'Organize your work!'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appData.title
  ),
  React.createElement(
    'p',
    null,
    appData.subTitle
  )
);
var appRoot = document.getElementById('app');

var counter = {
  val: 0,
  decrement: function decrement() {
    counter.val--;
    renderApp();
  },
  increment: function increment() {
    counter.val++;
    renderApp();
  },
  reset: function reset() {
    counter.val = 0;
    renderApp();
  }
};

var renderApp = function renderApp() {
  var counterTemplate = React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      'Count: ',
      counter.val
    ),
    React.createElement(
      'button',
      { onClick: counter.decrement },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: counter.increment },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: counter.reset },
      'Reset'
    )
  );

  ReactDOM.render(counterTemplate, appRoot);
};

renderApp();
