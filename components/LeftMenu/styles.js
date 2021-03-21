import styled from 'styled-components';

export const Logo = styled.h1`
  text-align: center;
`;
export const LeftMenuWrap = styled.div`
  width: 236px;
  background: #2c2a34;
  color: #ccc;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
`;

export const ProjectAddButton = styled.button`
  display: block;
  width: 176px;
  height: 40px;
  margin: 0 auto;
  background: #6449fc;
  border-radius: 4px;
  font-weight: 500;
  color: #fff;
`;
export const Gnb = styled.nav`
  margin-top: 20px;
  padding: 0 30px;
  li {
    padding: 10px 0;
    list-style: none;
  }
`;
export const GnbItem = styled.div`
  & a::before {
    display: inline-block;
    content:"";
    width: 16px;
    height: 16px;
    margin-right: 14px;
    background-image:url(${props => props.pathname ? props.hover : props.img});   
    vertical-align:top;
  }
  &:hover a::before {
    background-image:url(${props => props.hover});
  }
  & a{
    color:${props => props.pathname ? "#36CFBD" : "#ccc"};
    text-decoration: none;
  }
  &:hover a,
  &:focus a{
    color:#36CFBD;
  }
`;
