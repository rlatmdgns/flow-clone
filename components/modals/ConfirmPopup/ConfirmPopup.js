import React from 'react';

import { ConfirmWrap, Text, ButtonArea, Button } from './styles';

const ConfirmPopup = ({ text, onClickDelete, setIsOpen }) => (
  <ConfirmWrap>
    <Text>{text}</Text>
    <ButtonArea>
      <Button type="button" onClick={() => setIsOpen(false)}>취소</Button>
      <Button type="button" onClick={onClickDelete} confirm>확인</Button>
    </ButtonArea>
  </ConfirmWrap>
);

export { ConfirmPopup };
