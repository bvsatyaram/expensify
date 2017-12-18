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
  render () {
    return <button>What should I do?</button>;
  }
}

class Options extends React.Component {
  render () {
    return (
      <p>Options will come here...</p>
    );
  }
}

class NewOption extends React.Component {
  render () {
    return (
      <form>
        <input type='text' />
        <button type='submit'>Add a New Option</button>
      </form>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <main>
        <Header />
        <Action />
        <Options />
        <NewOption />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
