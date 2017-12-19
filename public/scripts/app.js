'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header() {
  return React.createElement(
    'header',
    null,
    React.createElement(
      'h1',
      null,
      'Indecision App'
    ),
    React.createElement(
      'h2',
      null,
      'Put your life in the hands of a computer!'
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'button',
    {
      onClick: props.pickOption,
      disabled: !props.hasOptions
    },
    'What should I do?'
  );
};

var Option = function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this.removeOption = _this.removeOption.bind(_this);
    return _this;
  }

  _createClass(Option, [{
    key: 'removeOption',
    value: function removeOption(e) {
      e.preventDefault();

      this.props.removeOption(this.props.optionIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'p',
        null,
        this.props.children,
        React.createElement(
          'a',
          { href: '#', onClick: this.removeOption },
          '(remove)'
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'There are ',
      props.options.length,
      ' item(s).'
    ),
    props.options.map(function (name, index) {
      return React.createElement(
        Option,
        {
          key: 'option-' + index,
          optionIndex: index,
          removeOption: props.removeOption
        },
        name
      );
    })
  );
};

var NewOption = function (_React$Component2) {
  _inherits(NewOption, _React$Component2);

  function NewOption(props) {
    _classCallCheck(this, NewOption);

    var _this2 = _possibleConstructorReturn(this, (NewOption.__proto__ || Object.getPrototypeOf(NewOption)).call(this, props));

    _this2.addOption = _this2.addOption.bind(_this2);
    return _this2;
  }

  _createClass(NewOption, [{
    key: 'addOption',
    value: function addOption(e) {
      e.preventDefault();
      this.props.addOption(e.target.elements.newOption.value);
      e.target.elements.newOption.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.addOption },
        React.createElement('input', {
          type: 'text',
          name: 'newOption',
          ref: function ref(input) {
            return input && input.focus();
          },
          autoFocus: true
        }),
        React.createElement(
          'button',
          { type: 'submit' },
          'Add a New Option'
        ),
        React.createElement(
          'button',
          { onClick: this.props.clearOptions },
          'Clear All Options'
        )
      );
    }
  }]);

  return NewOption;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {
      options: ['Eat', 'Sleep', 'Code'],
      newOption: ''
    };

    _this3.clearOptions = _this3.clearOptions.bind(_this3);
    _this3.pickOption = _this3.pickOption.bind(_this3);
    _this3.addOption = _this3.addOption.bind(_this3);
    _this3.removeOption = _this3.removeOption.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: 'clearOptions',
    value: function clearOptions(e) {
      e.preventDefault();
      this.setState(function (prevState) {
        return { options: [] };
      });
    }
  }, {
    key: 'pickOption',
    value: function pickOption() {
      var options = this.state.options;
      console.log(options[Math.floor(Math.random() * options.length)]);
    }
  }, {
    key: 'addOption',
    value: function addOption(val) {
      val = val.trim();
      if (val) {
        this.setState(function (prevState) {
          var options = prevState.options;
          options.push(val);
          return {
            options: options,
            newOption: ''
          };
        });
      }
    }
  }, {
    key: 'removeOption',
    value: function removeOption(index) {
      var options = this.state.options;
      options.splice(index, 1);
      this.setState(function (prevState) {
        return {
          options: options
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'main',
        null,
        React.createElement(Header, null),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          pickOption: this.pickOption
        }),
        React.createElement(Options, { options: this.state.options, removeOption: this.removeOption }),
        React.createElement(NewOption, {
          clearOptions: this.clearOptions,
          addOption: this.addOption,
          newOption: this.state.newOption
        })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
