import styled from 'styled-components';

export const PopupManagerWrap = styled.div`
  position:absolute;
  top:30px;
  left:0;
  width: 160px;
  padding:10px;
  background: #fff;
  border: 1px solid #777;
  box-shadow: 2px 2px 6px rgb(0 0 0 / 15%);
    border-radius: 6px;
  li + li {
    border-top: 1px solid #eee;
  }
  z-index:10;
`;

export const PopupManager = styled.ul`
  overflow: auto;
  padding:0;
  margin:0;
  max-height: 430px;
  list-style:none;
  li + li {
    border-top: 1px solid #eee;
  }
`;

export const Manager = styled.div`
    padding:10px;
    color: #999;
    font-weight: bold;
     &:hover{
      background: #f8f8ff;
     }
     label{
       display:block;
       cursor:pointer;
     }
`;

export const Button = styled.button`
margin-top:10px;
width:100%;
padding:6px 0;
border-radius:4px;
background: #6449fc;
color:#fff;
`;
