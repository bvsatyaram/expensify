import React from 'react';

export default class Option extends React.Component {
  removeOption = (e) => {
    e.preventDefault();

    this.props.removeOption(this.props.optionIndex);
  };

  render () {
    return (
      <div className='option'>
        <p>{this.props.count}. {this.props.children}</p>
        <button
          className='button-link'
          href='#'
          onClick={this.removeOption}
        >
          remove
        </button>
      </div>
    );
  }
}
