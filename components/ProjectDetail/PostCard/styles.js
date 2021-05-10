import styled, { css } from 'styled-components';

export const PostCardWrapper = styled.div`
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 4%);
  ${(props) => props.write
    && css`
      border: 0;
      box-shadow: none;
    `}
  & + & {
    margin-top:20px;
  }
`;
export const PostCardContainer = styled.div`
  padding: 20px 30px 30px 30px;
`;
export const CreatorArea = styled.div`
  position: relative;
  display:flex;
  align-items:center;
  padding: 8px 20px 8px 30px;
  border-bottom: 1px solid #eeeeee;
  background: #faf9f9;
`;
export const Thumbnail = styled.span`
  width: 40px;
  height: 40px;
  background: yellowgreen;
  border-radius: 16px;
  vertical-align: middle;
`;
export const CreatorInfo = styled.dl`
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
export const WriterMenu = styled.div`
  margin-left: auto;
  color:#999;
  button + button {
    margin-left: 10px;
  }
`;
export const Name = styled.strong`
  display: inline-block;
  max-width: 110px;
  margin:0px 6px 0 0;
  vertical-align: top;
`;
export const Rank = styled.em`
  display: inline-block;
  margin: 0 6px;
  font-style: normal;
  vertical-align: middle;
`;
export const Date = styled.span`
  color: #aaa;
  vertical-align: top;
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
export const PostTitle = styled.h4`
  display: table-cell;
  font-size: 20px;
  vertical-align: middle;
  &[contenteditable='true']:empty:before {
    display: block; /* For Firefox */
    content: attr(placeholder);
    color: #999;
  }
`;

export const PostCardContent = styled.div`
  margin: 20px 0;
  font-size: 14px;
  word-break: break-word;
  color: #333;
  &[contenteditable='true']:empty:before {
    display: block; /* For Firefox */
    content: attr(placeholder);
    color: #999;
  }
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

export const PostFooter = styled.div``;

export const CommentWrap = styled.div`
  padding: 20px 30px 30px 30px;
  border-radius: 0 0 10px 10px;
  background: #f9f9f9;
`;

export const CommentHeader = styled.div``;
export const CommentGroup = styled.ul`
  margin: 0;
  padding: 0;
  li {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
`;

export const CommentList = styled.li`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  :last-child {
    border: 0;
  }
`;

export const CommentThumNail = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
  cursor: pointer;
  background: yellowgreen;
`;

export const CommentUserArea = styled.div`
  overflow: hidden;
`;

export const CommentUser = styled.div`
  float: left;
`;
export const CommentText = styled.p`
  margin: 0;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 25px;
`;
export const CommentMeMenu = styled.div`
  float: right;
`;

export const MeItem = styled.button`
  display: inline-block;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  & + & {
    margin-left: 4px;
  }
`;

export const PostButtonArea = styled.div`
  display: flex;
  align-items: center;
`;
export const PostButton = styled.div`
  padding: 4px 8px;
  border: 1px solid #ddd;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 12px;
  color: #555;
  cursor: pointer;
  & + & {
    margin-left: 4px;
  }
`;

export const DisplayPostRead = styled.div`
  margin-left: auto;
  font-size: 13px;
  color: #999;
  em {
    font-weight: bold;
    font-style: normal;
  }
`;

export const CommentInputWrap = styled.div`
  overflow: hidden;
  ${CommentThumNail} {
    float: left;
  }
`;

export const CommentItem = styled.div`
  flex: 1;
`;
export const LikeButton = styled.button`
color:${(props) => (props.me ? '#6449fc' : '#999')};
`;
