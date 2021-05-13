import React, { useEffect, useState, useRef, useCallback } from 'react';

import ReactDOM from 'react-dom';
import { ModalWrapper } from './styles';

const Modal = ({ children, visible, popupCloseHandle, dimd }) => {
  console.log(visible);
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
    if (e.key === 'Escape' && !visible) {
      console.log(e.key);
      popupCloseHandle();
    }
  }, [visible]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, []);
  const modalContent = (
    <ModalWrapper visible={visible} ref={modalEl} onClick={modalClose} dimd={dimd}>
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
