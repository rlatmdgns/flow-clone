import styled from 'styled-components';

export const ProjectWrap = styled.div`
  padding: 0 30px;
`
export const ProjectList = styled.ul`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  padding:0;
  margin:-9px;
  list-style:none;
  li{
    margin: 9px;
  }
`
export const ProjectItem = styled.div`
  width: 248px;
  height: 178px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  border-radius: 6px;
  &::after{
    display:block;
    content:"";
    clear: both;
  }
`

export const ProjectColor = styled.div`
  float:left;
  width: 10px;
  height: 178px;
  border-radius: 6px 0 0 6px;
  background: red;
`

export const ProjectItemContent = styled.div`
  float:left;
  padding:16px 20px;
`