import styled, { css } from 'styled-components';

export const Thumbnail = styled.span`
  width: 40px;
  height: 40px;
  background: yellowgreen;
  border-radius: 16px;
  vertical-align: middle;
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

export const CommentItem = styled.div`
  flex: 1;
`;
