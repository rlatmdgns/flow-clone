import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper, ModalOverlay } from './styles';

const Modal = ({ children, visible }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible}>
        {children}
      </ModalWrapper>
    </>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root'),
    );
  }
  return null;
};

export default Modal;
