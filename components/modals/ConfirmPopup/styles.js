import styled, { css } from 'styled-components';

export const ConfirmWrap = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width: 434px;
  height: auto;
  padding:30px 30px 15px 30px;
  background: #fff;
  border: 1px solid #777;
  box-shadow: 20px 20px 30px rgb(0 0 0 / 20%);
  border-radius: 10px;
`;
export const Text = styled.p`
  text-align:center;
  font-size:14px;
`;
export const ButtonArea = styled.div`
  margin-top:20px;
  display:flex;
  justify-content:space-between;
  flex:1;
`;
export const Button = styled.button`
  width:100%;
  max-width:180px;
  padding:10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #555;
  ${(props) => props.confirm
    && css`
      color: #fff;
      border-color: #6449fc;
      background: #6449fc;
      &:hover{
        background:#7163C3;
      }
    `}
`;
