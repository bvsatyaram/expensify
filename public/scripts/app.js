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

var pickOption = function pickOption(e) {
  e.preventDefault();

  var randNum = Math.floor(Math.random() * appData.options.length);
  console.log(appData.options[randNum]);
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
      ),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        'button',
        { onClick: pickOption },
        'What Should I do?'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
