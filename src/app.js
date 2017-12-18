class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer!</h2>
      </header>
    );
  }
}

class Action extends React.Component {
  handleClick () {
    console.log('Action clicked');
  }

  render () {
    return <button onClick={this.handleClick}>What should I do?</button>;
  }
}

class Option extends React.Component {
  render () {
    return <p>{this.props.children}</p>
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        <p>There are {this.props.options.length} item(s).</p>
        {this.props.options.map((name, index) => <Option key={`option-${index}`}>{name}</Option>)}
      </div>
    );
  }
}

class NewOption extends React.Component {
  addOption (e) {
    e.preventDefault();
    console.log('Handle add option');
    const val = e.target.elements.newOption.value.trim();
    if (val) {
      console.log(`The value is ${val}`)      
    }
  }

  render () {
    return (
      <form onSubmit={this.addOption}>
        <input type='text' name='newOption' />
        <button type='submit'>Add a New Option</button>
        <button onClick={this.props.clearOptions}>Clear All Options</button>
      </form>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props);

    this.options = [
      'Eat',
      'Sleep',
      'Code'
    ];

    this.clearOptions = this.clearOptions.bind(this);
  }

  clearOptions (e) {
    e.preventDefault();
    console.log(this.options);
  }

  render () {
    return (
      <main>
        <Header />
        <Action />
        <Options options={this.options} />
        <NewOption clearOptions={this.clearOptions} />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
