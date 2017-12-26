import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import NewOption from './NewOption';
import OptionModal from './OptionModal';

export default class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  
  clearOptions = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ options: [] }));
  };

  pickOption = () => {
    const options = this.state.options;
    const selectedOption = options[Math.floor(Math.random() * options.length)];
    this.setState(() => ({selectedOption}))
  };

  unPickOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

  addOption = (val) => {
    val = val.trim();
    if (val) {
      this.setState((prevState) => {
        let options = prevState.options
        options = options.concat(val);
        return {
          options: options,
          newOption: ''
        }
      })
    }
  };

  removeOption = (index) => {
    let options = [...this.state.options];
    options.splice(index, 1);
    this.setState((prevState) => ({ options: options }));
  };

  componentDidMount () {
    const options = JSON.parse(localStorage.getItem('options')) || [];

    this.setState(() => ({options}));
  }

  componentDidUpdate (preProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  render () {
    return (
      <main>
        <Header />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            pickOption={this.pickOption}
          />
          <div className='widget'>
            <Options
              clearOptions={this.clearOptions}
              options={this.state.options}
              removeOption={this.removeOption}
            />
            <NewOption
              addOption={this.addOption}
            />
          </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} unPickOption={this.unPickOption} />
      </main>
    );
  }
}
