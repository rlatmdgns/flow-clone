import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import moment from 'moment';
import {
  CommentUserArea,
  CommentUser,
  CommentText,
  CommentMeMenu,
  CommentItem,
  CommentList,
  MeItem,
  CommentThumNail,
  Name,
  Date,
} from './styles';
import { DELETE_REPLY_REQUEST } from '../../reducers/project';
import CommentInput from '../CommentInput/CommentInput';

const CommentContent = ({ reply, postId }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [editModeComment, setEditModeComment] = useState(false);
  const { id } = router.query;
  const { me } = useSelector((state) => state.user);
  const { editReplyDone } = useSelector((state) => state.project);
  useEffect(() => {
    if (editReplyDone) {
      setEditModeComment(false);
    }
  }, [editReplyDone]);
  const onDeleteComment = (replyId) => {
    dispatch({
      type: DELETE_REPLY_REQUEST,
      data: {
        projectId: id,
        replyId,
        userId: me.id,
      },
      postId,
    });
  };
  const editModeEnd = () => {
    setEditModeComment(false);
  };
  const createMarkup = () => ({ __html: reply.contents });
  return (
    <CommentList>
      <CommentThumNail />
      <CommentItem>
        <CommentUserArea>
          <CommentUser>
            <Name>{reply.writerName}</Name>
            {/* <Rank>매니저</Rank> */}
            <Date>{moment(reply.createdAt).format('YYYY-MM-DD HH:mm')}</Date>
          </CommentUser>
          {me.id === reply.writerId && (
          <CommentMeMenu>
            <MeItem onClick={() => setEditModeComment(!editModeComment)}>수정</MeItem>
            <MeItem onClick={() => onDeleteComment(reply.id)}>삭제</MeItem>
          </CommentMeMenu>
          )}
        </CommentUserArea>
        {editModeComment ? (
          <>
            <CommentInput
              edit={editModeComment}
              postId={postId}
              replyId={reply.id}
              projectId={id}
              editModeEnd={editModeEnd}
            />
            <p>취소하려면 Esc 키를 누르세요.</p>
          </>
        ) : (
          <CommentText contentEditable="false" dangerouslySetInnerHTML={createMarkup()} />
        )}
      </CommentItem>
    </CommentList>
  );
};

export default CommentContent;
