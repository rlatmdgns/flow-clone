import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import moment from 'moment';
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
  LikeButton,
} from './styles';
import TaskListGroup from '../../TaskListGroup';
import { DELETE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../../../reducers/project';
import { EDIT_MODE } from '../../../reducers/user';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { me } = useSelector((state) => state.user);
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
  const onClickLike = () => {
    dispatch({
      type: LIKE_POST_REQUEST,
      data: { projectId: id, postId: post.id, userId: me.id },
    });
  };
  const onClickUnLike = () => {
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: { projectId: id, postId: post.id, userId: me.id },
    });
  };
  const liked = post.likes.find((user) => user.userId === me.id);
  return (
    <PostCardWrapper>
      <CreatorArea>
        <Thumbnail />
        <CreatorInfo>
          <dt>
            <Name>{post.writerName}</Name>
            {/* <Rank>매니저</Rank> */}
            <Date>{moment(post.createdAt).format('YYYY-MM-DD HH:mm')}</Date>
          </dt>
          <dd>{/* <Company>플로우</Company>
            <Team>애니멀팀</Team> */}
          </dd>
        </CreatorInfo>
        {me.id === post.writerId && (
          <WriterMenu>
            <button type="button" onClick={onClickEdit}>
              수정
            </button>
            <button type="button" onClick={onClickDelete}>
              삭제
            </button>
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
          {/* <PostButton type="button">반응하기</PostButton>
          <PostButton type="button">담아두기</PostButton> */}
          {liked ? (
            <LikeButton me type="button" onClick={onClickUnLike}>
              😀 좋아요취소 {post.likes.length === 1 ? `${me.name}님` : `${me.name}외 ${post.likes.length}명`}
            </LikeButton>
          ) : (
            <LikeButton type="button" onClick={onClickLike}>
              좋아요 {post.likes.length !== 0 && `${post.likes.length}명`}
            </LikeButton>
          )}
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
