import styled from 'styled-components';

export const UserHeaderWrap = styled.div`
  display:flex;
  padding :0 30px;
  height:100px;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  align-items: center;
 /* &::after{
   display:block;
   content:"";
   clear: both;
 } */
`
export const PageTitle = styled.h3`
  margin:0;
  font-size:20px;
  font-weight :700;
  color: #333;
`

export const UserMenu = styled.ul`
  margin :0;
  list-style:none;
`