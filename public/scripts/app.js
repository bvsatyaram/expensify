'use strict';

var appData = {
  title: 'Visibility Toggle',
  showDetails: false,
  details: 'Hey. These are some details you can now see!'
};

var toggleDeatils = function toggleDeatils() {
  appData.showDetails = !appData.showDetails;
  renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      appData.title
    ),
    React.createElement(
      'button',
      { onClick: toggleDeatils },
      appData.showDetails ? 'Hide details' : 'Show details'
    ),
    appData.showDetails && React.createElement(
      'p',
      null,
      appData.details
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
