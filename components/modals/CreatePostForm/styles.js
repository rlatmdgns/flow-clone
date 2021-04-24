import styled, { css } from 'styled-components';

export const PopupWrap = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
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
  font-size: 16px;
`;
export const Content = styled.div`
  overflow:auto;
  margin: 30px 0;
  max-height :60vh;
`;

export const CreatePostNav = styled.ul`
  display: table;
  width: 100%;
  margin: 30px 0 0 0;
  padding: 0;
  table-layout: fixed;
`;
export const CreateItem = styled.li`
  display: table-cell;
`;
export const CreateTab = styled.button`
  width: 100%;
  height: 40px;
  line-height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 2px solid #ccc;
  color: #999;
  ${(props) => props.active
    && css`
      color: #333;
      border-color: #333;
      font-weight: 600;
    `}
`;
export const Footer = styled.div`
  display: flex;
  padding: 20px 0;
  border-top: 1px solid #eee;
`;

export const CreateButton = styled.button`
  position: relative;
  height: 36px;
  padding: 0 47px;
  margin-left: auto;
  background: #6449fc;
  border-radius: 4px;
  font-size: 13px;
  color: #fff;
  text-align: center;
`;
