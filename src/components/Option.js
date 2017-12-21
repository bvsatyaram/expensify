import React from 'react';

export default class Option extends React.Component {
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
