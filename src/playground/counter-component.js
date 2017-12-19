class Counter extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      val: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment () {
    this.setState((prevState) => {
      return {val: (prevState.val + 1)}
    });
  }

  decrement () {
    if (this.state.val <= 0) {
      return;
    }
    this.setState((prevState) => {
      return {val: (prevState.val - 1)}
    });
  }

  reset () {
    this.setState(() => {
      return {val: 0}
    });
  }

  render () {
    return (
      <div>
        <h1>Counter: {this.state.val}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
