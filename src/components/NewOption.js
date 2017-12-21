import React from 'react';

export default class NewOption extends React.Component {
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
