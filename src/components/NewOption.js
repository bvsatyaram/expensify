import React from 'react';

export default class NewOption extends React.Component {
  addOption = (e) => {
    e.preventDefault();
    this.props.addOption(e.target.elements.newOption.value);
    e.target.elements.newOption.value = '';
  };

  render () {
    return (
      <form onSubmit={this.addOption} className='add_option'>
        <input
          type='text'
          name='newOption'
          ref={input => input && input.focus()}
          autoFocus
        />
        <button type='submit'>Add a New Option</button>
      </form>
    )
  }
}
