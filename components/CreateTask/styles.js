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
export const TextEditable = styled.div`
 & > div {
    margin: 20px 0;
    min-height: 100px;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    color: #333;
    word-break: break-all;
  }

  div[contenteditable="true"]:empty:before {
    display: block; /* For Firefox */
    content: attr(placeholder);
    color: #999;
  }
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

export const TaskList = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  & + & {
    margin-top: 20px;
  }
`;

export const TaskItemTitle = styled.div`
  position: relative;
  display: table-cell;
  height: 35px;
  vertical-align: middle;
  width: 70px;
  color: #555;
  font-weight: bold;
  font-size: 14px;
`;
export const TaskListCell = styled.div`
  position: relative;
  display: table-cell;
  height: 35px;
  vertical-align: middle;
`;

export const AddManaberButton = styled.button`
  padding:10px; 
  color:#333;
  border-radius:8px;
  border:1px solid #ddd;
  background:#faf9f9;
`;
export const ManagerItem = styled.span`
  display: inline-block;
  margin-right:10px;
  padding:8px;
  background: #faf9f9;
  border-radius: 500px;
  font-size: 14px;
  font-weight:bold;
  color: #555;
`;

export const DeleteManagerButton = styled.button`
  padding:2px 6px;
  margin-left:10px;
  border-radius:50%;
  color:#999;

  &:hover{
    color:#fff;
    background: #6449fc;
  }
`;
