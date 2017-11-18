'use strict';

// const template = <p>This is JSX from app.js</p>;
var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js'
);

// const appRoot = document.getElementById('app');
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);