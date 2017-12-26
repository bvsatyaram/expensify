import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className='widget__header'>
    <h3>Your Options</h3>
      <button
        className='button-link'
        onClick={props.clearOptions}
      >
        Remove All
      </button>
    </div>
    {(props.options.length == 0) && <div className='widget__message'>Please add an option to get started.</div>}
    {
      props.options.map((name, index) => {
        return (
          <Option
            key={`option-${index}`}
            optionIndex={index}
            removeOption={props.removeOption}
          >
            {name}
          </Option>)
      })
    }
  </div>
);

export default Options;
