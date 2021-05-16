import React, { useState, useEffect, useCallback } from 'react';
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
import Modal from '../../modals/Modal';

const ProjectHeader = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [memberPopup, setMemberPopup] = useState(false);
  const { me } = useSelector((state) => state.user);
  const { members, inviteMemberDone, projectInfo } = useSelector((state) => state.project);
  console.log('projectInfo', projectInfo);
  useEffect(() => {
    if (inviteMemberDone) {
      setMemberPopup(false);
    }
  }, [inviteMemberDone]);
  const getMemberHandle = useCallback(() => {
    dispatch({
      type: LOAD_MEMBERS_REQUEST,
    });
    setMemberPopup(true);
  }, []);
  const projectInvite = useCallback((inviteeId) => {
    dispatch({
      type: INVITE_MEMBER_REQUEST,
      data: {
        projectId: id,
        inviteeId,
        inviterId: me.id,
      },
    });
  }, []);
  const closeMemberPopup = useCallback(() => {
    setMemberPopup(false);
  }, []);
  return (
    <DetailHeader>
      <DetailHeaderTop>
        <DetailProjectColor />
        <DetailHeaderInner>
          <DetailTitleArea>
            {/* <FavoriteButton>즐겨찾기</FavoriteButton> */}
            {/* <SetButton>프로젝트 설정</SetButton> */}
            <DetailTitle>{projectInfo.title}</DetailTitle>
          </DetailTitleArea>
          <DetailDescription>{projectInfo.explain}</DetailDescription>
        </DetailHeaderInner>
        <InviteButton onClick={getMemberHandle}>프로젝트 초대</InviteButton>
        <Modal visible={memberPopup} popupCloseHandle={closeMemberPopup} dimd={false}>
          { memberPopup && (members.length > 1) && (
          <MembersList>
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
        </Modal>
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
