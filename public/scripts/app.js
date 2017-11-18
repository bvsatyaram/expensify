'use strict';

var appData = {
  title: 'Indecision App',
  subTitle: 'Organize you work!'
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

ReactDOM.render(template, appRoot);
