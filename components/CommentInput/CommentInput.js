import React, { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ADD_REPLY_REQUEST, EDIT_REPLY_REQUEST } from '../../reducers/project';

import { Input } from './styles';

const CommentInput = ({ edit, replyId, postId, projectId, editModeEnd }) => {
  console.log(edit);
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { addReplyDone } = useSelector((state) => state.project);
  const ref = useRef();
  useEffect(() => {
    edit && ref.current.focus();
    if (addReplyDone) {
      ref.current.innerHTML = '';
    }
  }, [addReplyDone]);
  const onKeyComment = (e) => {
    const { userAgent } = window.navigator;
    const isChrome = userAgent.indexOf('Chrome');
    if (isChrome) {
      const el = document.activeElement;
      if (el.lastChild && el.lastChild.nodeName !== 'BR') {
        el.appendChild(document.createElement('br'));
      }
    }
    if (e.keyCode === 13 || e.code === 'Enter') {
      if (e.ctrlKey || e.shiftKey || e.metaKey) {
        if (window.getSelection) {
          e.preventDefault();
          const selection = window.getSelection();
          const range = selection.getRangeAt(0);
          const br = document.createElement('br');
          range.deleteContents();
          range.insertNode(br);
          range.setStartAfter(br);
          range.setEndAfter(br);
          range.collapse(false);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        e.preventDefault();
        if (edit) {
          dispatch({
            type: EDIT_REPLY_REQUEST,
            data: {
              projectId,
              replyId,
              userId: me.id,
              contents: ref.current.innerHTML,
            },
            postId,
          });
          return;
        }
        dispatch({
          type: ADD_REPLY_REQUEST,
          data: {
            projectId,
            postId,
            userId: me.id,
            contents: ref.current.innerHTML,
          },
          name: me.name,
        });
      }
    } else if (edit) {
      if (e.keyCode === 27) {
        console.log(111);
        editModeEnd();
      }
    }
  };
  return (
    <Input
      edit={edit}
      contentEditable="true"
      ref={ref}
      placeholder="댓글을 입력하세요(Enter는 입력, shift or ctrl + Enter는 줄바꿈)"
      onKeyDown={onKeyComment}
    />
  );
};

export default CommentInput;
