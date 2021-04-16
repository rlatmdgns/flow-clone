import styled from 'styled-components';

export const PostCardWrapper = styled.div`
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 4%);
`;
export const PostCardContainer = styled.div`
  padding: 20px 30px 30px 30px;
`;
export const CreatorArea = styled.div`
  position: relative;
  padding: 8px 20px 8px 30px;
  border-bottom: 1px solid #eeeeee;
  background: #faf9f9;
`;
export const Thumbnail = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background: yellowgreen;
  border-radius: 16px;
  vertical-align: middle;
`;
export const CreatorInfo = styled.dl`
  display: inline-block;
  line-height: 18px;
  margin-left: 10px;
  vertical-align: middle;
  dt {
    color: #555;
  }
  dd {
    margin: 0;
    font-size: 12px;
    color: #999;
  }
`;
export const Name = styled.strong`
  display: inline-block;
  max-width: 110px;
  vertical-align: middle;
`;
export const Rank = styled.em`
  display: inline-block;
  margin: 0 6px;
  font-style: normal;
  vertical-align: middle;
`;
export const Date = styled.span`
  color: #aaa;
  vertical-align: middle;
`;
export const Company = styled.strong`
  display: inline-block;
  max-width: 110px;
  vertical-align: middle;
`;
export const Team = styled.span`
  display: inline-block;
  margin-left: 6px;
  max-width: 110px;
  vertical-align: middle;
`;
export const PostHeader = styled.div`
  overflow: hidden;
  display: table;
  table-layout: fixed;
  width: 100%;
  max-width: 945px;
  padding: 12px 20px 12px 30px;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #faf9f9;
`;
export const PostTItle = styled.h4`
  display: table-cell;
  font-size: 20px;
  vertical-align: middle;
`;

export const PostCardContent = styled.div`
  margin : 20px 0;
  font-size: 14px;
  word-break: break-word;
  color:#333;
`;
export const TaskNumberArea = styled.div`
  display: table-cell;
  color: #999;
  text-align: right;
  vertical-align: middle;
`;
export const TaskNumber = styled.span`
  display: inline-block;
  padding: 6px 10px;
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 900px;
  font-size: 11px;
`;
export const TaskListGroup = styled.div``;
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
export const StateButton = styled.button`
  display: inline-block;
  width: 70px;
  height: 36px;
  border-radius: 220px;
  font-weight: bold;
  font-size: 13px;
  background: #faf9f9;
  color: #777;
`;

export const PostFooter = styled.div`

`;
