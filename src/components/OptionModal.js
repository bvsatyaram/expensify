import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel={'Selected Option'}
    appElement={document.getElementById('app')}
    onRequestClose={props.unPickOption}
    closeTimeoutMS={300}
    className='modal'
  >
    <h3>Selected Options</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.unPickOption}>Okay</button>
  </Modal>
);

export default  OptionModal;
