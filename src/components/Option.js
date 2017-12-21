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
        <a href='#' onClick={this.removeOption}>(remove)</a>
      </p>
    );
  }
}
