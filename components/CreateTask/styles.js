import styled from 'styled-components';

export const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 0 0 30px 0;
  font-weight: bold;
  font-size: 20px;
  border:0;
`;

export const TaskContentText = styled.div`
    margin: 20px 0;
    min-height: 300px;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    color: #333;
    word-break: break-all;
    line-height: 25px;

  &[contenteditable="true"]:empty:before {
    display: block; /* For Firefox */
    content: attr(placeholder);
    color: #999;
  }
`;
