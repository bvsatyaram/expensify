import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    {(props.options.length == 0) && <p>Please add an option to get started.</p>}
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
