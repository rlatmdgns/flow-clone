import styled from 'styled-components';

export const ProgressWrap = styled.div`
position: relative;
`;
export const ProgressBar = styled.div`
position: relative;
  display: table;
  width:100%;
  height: 6px;
  background: #eee;
  border-radius: 100px;
  table-layout:fixed;
`;

export const ProgressGraph = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${(props) => props.taskProgress}%;
  transition: width .3s;
  background: #ffd600;
`;

export const Data = styled.div`
  position: relative;
  display:table-cell;
  cursor: pointer;
  text-align:right;
  background:transparent;
  z-index:1;  
  &:first-child{
    width:60px;
  }
  span {
    position:absolute;
    top:-20px;
    right:0px;
    display:none;
    padding:2px 8px;
    color:#fff;
    border-radius:10px;
    background:#555;
  }
  &:hover span{
    display:inline;
  }
`;
