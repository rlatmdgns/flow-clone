import styled from 'styled-components';

export const ProgressBar = styled.div`
position: relative;
  display: table;
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 100px;
  font-size: 0;
`;

export const ProgressGraph = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${(props) => props.taskProgress}%;
  background: #ffd600;
`;

export const Data = styled.span`
  position: relative;
  display: table-cell;
  cursor: pointer;
`;
