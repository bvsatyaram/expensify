'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
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
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        {
          onClick: this.props.pickOption,
          disabled: !this.props.hasOptions
        },
        'What should I do?'
      );
    }
  }]);

  return Action;
}(React.Component);

var Option = function (_React$Component3) {
  _inherits(Option, _React$Component3);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this3 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this3.removeOption = _this3.removeOption.bind(_this3);
    return _this3;
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

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'There are ',
          this.props.options.length,
          ' item(s).'
        ),
        this.props.options.map(function (name, index) {
          return React.createElement(
            Option,
            {
              key: 'option-' + index,
              optionIndex: index,
              removeOption: _this5.props.removeOption
            },
            name
          );
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var NewOption = function (_React$Component5) {
  _inherits(NewOption, _React$Component5);

  function NewOption(props) {
    _classCallCheck(this, NewOption);

    var _this6 = _possibleConstructorReturn(this, (NewOption.__proto__ || Object.getPrototypeOf(NewOption)).call(this, props));

    _this6.addOption = _this6.addOption.bind(_this6);
    return _this6;
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

var App = function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App(props) {
    _classCallCheck(this, App);

    var _this7 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this7.state = {
      options: ['Eat', 'Sleep', 'Code'],
      newOption: ''
    };

    _this7.clearOptions = _this7.clearOptions.bind(_this7);
    _this7.pickOption = _this7.pickOption.bind(_this7);
    _this7.addOption = _this7.addOption.bind(_this7);
    _this7.removeOption = _this7.removeOption.bind(_this7);
    return _this7;
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
