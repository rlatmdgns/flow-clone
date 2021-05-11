import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  DetailHeader,
  DetailProjectColor,
  DetailTitle,
  FavoriteButton,
  SetButton,
  DetailHeaderInner,
  DetailTitleArea,
  DetailDescription,
  DetailMenu,
  DetailMenuItem,
  DetailHeaderTop,
  InviteButton,
  MembersList,
  MemberItem,
} from './styles';
import { INVITE_MEMBER_REQUEST, LOAD_MEMBERS_REQUEST } from '../../../reducers/project';

const ProjectHeader = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const modalWrap = useRef(); //
  const [memberPopup, setMemberPopup] = useState(false);
  const { me } = useSelector((state) => state.user);
  const { members } = useSelector((state) => state.project);

  const getMemberHandle = () => {
    dispatch({
      type: LOAD_MEMBERS_REQUEST,
    });
    setMemberPopup(true);
  };
  const projectInvite = (inviteeId) => {
    dispatch({
      type: INVITE_MEMBER_REQUEST,
      data: {
        projectId: id,
        inviteeId,
        inviterId: me.id,
      },
    });
  };
  return (
    <DetailHeader>
      <DetailHeaderTop>
        <DetailProjectColor />
        <DetailHeaderInner>
          <DetailTitleArea>
            {/* <FavoriteButton>즐겨찾기</FavoriteButton> */}
            {/* <SetButton>프로젝트 설정</SetButton> */}
            <DetailTitle>프로젝트 제목제목</DetailTitle>
          </DetailTitleArea>
          <DetailDescription>프로젝트 설명 글</DetailDescription>
        </DetailHeaderInner>
        <InviteButton onClick={getMemberHandle}>프로젝트 초대</InviteButton>
        { memberPopup && (members.length > 0) && (
          <MembersList ref={modalWrap}>
            {members.map((v) => {
              if (v.id !== me.id) {
                return (
                  <MemberItem key={v.id}>
                    {v.name}<button type="button" onClick={() => projectInvite(v.id)}>초대</button>
                  </MemberItem>
                );
              }
            })}
          </MembersList>
        ) }
      </DetailHeaderTop>
      <DetailMenu>
        <DetailMenuItem active>타임라인</DetailMenuItem>
        {/* <DetailMenuItem>업무</DetailMenuItem>
      <DetailMenuItem>일정</DetailMenuItem>
      <DetailMenuItem>파일</DetailMenuItem> */}
      </DetailMenu>
    </DetailHeader>
  );
};

export { ProjectHeader };
