import React, { useEffect, useState, useRef, useCallback } from 'react';

import ReactDOM from 'react-dom';
import { ModalWrapper } from './styles';

const Modal = ({ children, visible, popupCloseHandle }) => {
  const modalEl = useRef(); //
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalClose = (e) => {
    console.log(modalEl.current);
    if (modalEl.current === e.target) {
      popupCloseHandle();
    }
  };
  const keyPress = useCallback((e) => {
    if (e.key === 'Escape' && visible) {
      popupCloseHandle();
    }
  }, [modalClose]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, []);
  const modalContent = (
    <ModalWrapper visible={visible} ref={modalEl} onClick={modalClose}>
      {children}
    </ModalWrapper>
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
