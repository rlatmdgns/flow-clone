import styled from 'styled-components';

export const PopupWrap = styled.div`
  position: relative;
  z-index: 5;
  width:100%;
  max-width: 945px;
  margin: 0 auto;
  padding: 20px 30px 0 30px;
  background: #fff;
  border: 1px solid #777;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 20px 20px 30px rgb(0 0 0 / 20%);
  box-shadow: 20px 20px 30px rgb(0 0 0 / 20%);
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PopupTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const CloseButton = styled.button`
font-size:16px;
`;
export const Content = styled.div`
  margin: 30px 0;
`;
