'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is JSX from app.js!'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
