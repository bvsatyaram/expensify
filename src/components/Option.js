import React from 'react';

export default class Option extends React.Component {
  removeOption = (e) => {
    e.preventDefault();

    this.props.removeOption(this.props.optionIndex);
  };

  render () {
    return (
      <p>
        {this.props.children}
        <button
          className='button-link'
          href='#'
          onClick={this.removeOption}
        >
          remove
        </button>
      </p>
    );
  }
}
