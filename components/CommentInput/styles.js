import styled from 'styled-components';

export const Input = styled.div`
  width: ${(props) => (props.edit
    ? '100%'
    : 'calc(100%  - 52px)')};
  padding: 14px 50px 14px 20px;
  min-height: 44px;
  float: left;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #555;
  word-break: break-all;
  white-space: pre;
  &[contenteditable='true']:empty:before {
    display: block; /* For Firefox */
    content: attr(placeholder);
    color: #999;
  }
`;
