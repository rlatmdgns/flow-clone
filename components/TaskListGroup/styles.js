import styled, { css } from 'styled-components';

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
