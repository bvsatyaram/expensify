const Header = () => {
  return (
    <header>
      <h1>Indecision App</h1>
      <h2>Put your life in the hands of a computer!</h2>
    </header>
  );
}

const Action = (props) => {
  return (
    <button
      onClick={props.pickOption}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  );
}

class Option extends React.Component {
  constructor (props) {
    super(props);
    this.removeOption = this.removeOption.bind(this);
  }

  removeOption (e) {
    e.preventDefault();

    this.props.removeOption(this.props.optionIndex);
  }

  render () {
    return (
      <p>
        {this.props.children}
        <a href='#' onClick={this.removeOption}>(remove)</a>
      </p>
    );
  }
}

const Options = (props) => {
  return (
    <div>
      <p>There are {props.options.length} item(s).</p>
      {
        props.options.map((name, index) => {
          return (
            <Option
              key={`option-${index}`}
              optionIndex={index}
              removeOption={props.removeOption}
            >
              {name}
            </Option>)
        })
      }
    </div>
  );
}

class NewOption extends React.Component {
  constructor (props) {
    super(props);
    this.addOption = this.addOption.bind(this);
  }

  addOption (e) {
    e.preventDefault();
    this.props.addOption(e.target.elements.newOption.value);
    e.target.elements.newOption.value = '';
  }

  render () {
    return (
      <form onSubmit={this.addOption}>
        <input
          type='text'
          name='newOption'
          ref={input => input && input.focus()}
          autoFocus
        />
        <button type='submit'>Add a New Option</button>
        <button onClick={this.props.clearOptions}>Clear All Options</button>
      </form>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      options: [
        'Eat',
        'Sleep',
        'Code'
      ],
      newOption: ''
    };

    this.clearOptions = this.clearOptions.bind(this);
    this.pickOption = this.pickOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  clearOptions (e) {
    e.preventDefault();
    this.setState((prevState) => {
      return { options: [] }
    });
  }

  pickOption () {
    const options = this.state.options;
    console.log(options[Math.floor(Math.random() * options.length)]);
  }

  addOption (val) {
    val = val.trim();
    if (val) {
      this.setState((prevState) => {
        let options = prevState.options
        options.push(val);
        return {
          options: options,
          newOption: ''
        }
      })
    }
  }

  removeOption (index) {
    let options = this.state.options;
    options.splice(index, 1);
    this.setState((prevState) => {
      return {
        options: options
      };
    })
  }

  render () {
    return (
      <main>
        <Header />
        <Action
          hasOptions={this.state.options.length > 0}
          pickOption={this.pickOption}
        />
        <Options options={this.state.options} removeOption={this.removeOption} />
        <NewOption
          clearOptions={this.clearOptions}
          addOption={this.addOption}
          newOption={this.state.newOption}
        />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
