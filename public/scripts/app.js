'use strict';

var appData = {
  title: 'Indecision App',
  subTitle: 'Organize your work!',
  options: ['Options 1', 'Options 2']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    appData.options.push(option);
  }
  e.target.elements.option.value = '';
  renderApp();
};

var clearOptions = function clearOptions(e) {
  e.preventDefault();

  appData.options = [];
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
      'p',
      null,
      appData.subTitle
    ),
    React.createElement(
      'ul',
      null,
      appData.options.map(function (option, index) {
        return React.createElement(
          'li',
          { key: 'option-' + index },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option', autoFocus: true }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add Option'
      ),
      React.createElement(
        'button',
        { onClick: clearOptions },
        'Remove All'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
