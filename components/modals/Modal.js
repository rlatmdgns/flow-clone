import React from 'react';
import PropTypes from 'prop-types';
import {ModalWrapper, ModalOverlay} from './styles'



const Modal = ({visible, children}) => {
  return (
    <>
    <ModalOverlay visible={visible} />
    <ModalWrapper visible={visible}>
        {children}
    </ModalWrapper>
    </>
  );
};


Modal.propTypes = {

};


export default Modal;
