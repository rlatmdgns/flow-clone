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
  PostButtonArea,
  PostButton,
  DisplayPostRead,
  CommentInputWrap,
  WriterMenu,
  LikeButton,
} from './styles';
import TaskListGroup from '../../TaskListGroup';
import {
  ADD_REPLY_REQUEST,
  DELETE_POST_REQUEST,
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
} from '../../../reducers/project';
import { EDIT_MODE } from '../../../reducers/user';

import CommentContent from '../../CommentContent/CommentContent';
import CommentInput from '../../CommentInput/CommentInput';
import Modal from '../../modals/Modal';
import CreatePostForm from '../../modals/CreatePostForm';
import { ConfirmPopup } from '../../modals/ConfirmPopup/ConfirmPopup';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  const { me } = useSelector((state) => state.user);
  const { addReplyDone } = useSelector((state) => state.project);
  const { editMode } = useSelector((state) => state.user);
  const popupCloseHandle = () => {
    dispatch({
      type: EDIT_MODE,
      data: { state: false, postId: post.id },
    });
  };

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
  // useEffect(() => {
  //   if (addReplyDone) {
  //     ref.current.innerHTML = '';
  //   }
  // }, [addReplyDone]);

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
            <button type="button" onClick={() => setIsOpen(true)}>
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
          {/* <DisplayPostRead>
            읽음<em>76</em>
          </DisplayPostRead> */}
        </PostButtonArea>
      </PostCardContainer>
      <PostFooter>
        <CommentWrap>
          <CommentHeader />
          <CommentGroup>
            {post.replies.map((reply) => (
              <CommentContent
                key={reply.id}
                reply={reply}
                postId={post.id}
              />
            ))}
          </CommentGroup>
          <CommentInputWrap>
            <CommentThumNail />
            <CommentInput postId={post.id} projectId={id} />
          </CommentInputWrap>
        </CommentWrap>
      </PostFooter>
      <Modal visible={editMode.state} popupCloseHandle={popupCloseHandle} dimd>
        <CreatePostForm editMode={editMode} />
      </Modal>
      <Modal visible={isOpen} popupCloseHandle={popupCloseHandle} dimd>
        <ConfirmPopup text="업무를 삭제하시겠습니까?" setIsOpen={setIsOpen} onClickDelete={onClickDelete} />
      </Modal>
    </PostCardWrapper>
  );
};

export { PostCard };
