import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import { useDispatch, useSelector } from 'react-redux';
import {
  PostCardWrapper,
  CreatorArea,
  Thumbnail,
  CreatorInfo,
  Name,
  Rank,
  Date,
  Company,
  Team,
  PostHeader,
  PostTitle,
  PostCardContainer,
  TaskNumber,
  TaskNumberArea,
  PostCardContent,
  PostFooter,
  CommentWrap,
  CommentHeader,
  CommentGroup,
  CommentThumNail,
  CommentUserArea,
  CommentUser,
  CommentText,
  CommentMeMenu,
  CommentItem,
  CommentList,
  PostButtonArea,
  PostButton,
  DisplayPostRead,
  MeItem,
  CommentInputWrap,
  CommentInput,
  WriterMenu,
} from './styles';
import TaskListGroup from '../../TaskListGroup';
import { DELETE_POST_REQUEST } from '../../../reducers/project';
import { EDIT_MODE } from '../../../reducers/user';

const PostCard = ({ post }) => {
  console.log(post);
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  // const [editMode, setEditMode] = useState(false);
  const onClickEdit = useCallback(() => {
    dispatch({
      type: EDIT_MODE,
      data: { state: true, postId: post.id },
    });
  }, []);
  const onClickDelete = () => {
    dispatch({
      type: DELETE_POST_REQUEST,
      data: { postId: post.id, userId: me.id },
    });
  };
  return (
    <PostCardWrapper>
      <CreatorArea>
        <Thumbnail />
        <CreatorInfo>
          <dt>
            <Name>{post.writerName}</Name>
            <Rank>매니저</Rank>
            <Date>2021-04-16</Date>
          </dt>
          <dd>
            <Company>플로우</Company>
            <Team>애니멀팀</Team>
          </dd>
        </CreatorInfo>
        {me.id === post.writerId && (
          <WriterMenu>
            <button type="button" onClick={onClickEdit}>수정</button>
            <button type="button" onClick={onClickDelete}>삭제</button>
          </WriterMenu>
        )}
      </CreatorArea>
      <PostHeader>
        <PostTitle>{post.contents.title}</PostTitle>
        <TaskNumberArea>
          <TaskNumber>업무번호 {post.contents.taskNumber}</TaskNumber>
        </TaskNumberArea>
      </PostHeader>
      <PostCardContainer>
        <TaskListGroup
          postId={post.id}
          managers={post.contents.managers}
          taskStatus={post.contents.taskStatus}
          startDate={post.contents.startDate}
          endDate={post.contents.endDate}
          progress={post.contents.progress}
        />
        <PostCardContent>
          <ContentEditable html={post.contents.context} disabled />
        </PostCardContent>
        <PostButtonArea>
          <PostButton type="button">반응하기</PostButton>
          <PostButton type="button">담아두기</PostButton>
          <DisplayPostRead>
            읽음<em>76</em>
          </DisplayPostRead>
        </PostButtonArea>
      </PostCardContainer>
      <PostFooter>
        <CommentWrap>
          <CommentHeader />
          <CommentGroup>
            <CommentList>
              <CommentThumNail />
              <CommentItem>
                <CommentUserArea>
                  <CommentUser>
                    <Name>홍길동</Name>
                    <Rank>매니저</Rank>
                    <Date>2021-04-16</Date>
                  </CommentUser>
                  <CommentMeMenu>
                    <MeItem>수정</MeItem>
                    <MeItem>삭제</MeItem>
                  </CommentMeMenu>
                </CommentUserArea>
                <CommentText>1231221133</CommentText>
              </CommentItem>
            </CommentList>
          </CommentGroup>
          <CommentInputWrap>
            <CommentThumNail />
            <CommentInput contentEditable="true" placeholder="줄바꿈은 Shift or Ctrl + Enter / 입력은 Enter 입니다.." />
          </CommentInputWrap>
        </CommentWrap>
      </PostFooter>
    </PostCardWrapper>
  );
};

export { PostCard };
