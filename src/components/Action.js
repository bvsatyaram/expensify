import React from 'react';

const Action = (props) => (
  <button
    className='button-xl'
    onClick={props.pickOption}
    disabled={!props.hasOptions}
  >
    What should I do?
  </button>
);

export default Action;
