import React from 'react';
import PropTypes from 'prop-types';
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
} from './styles';

const ProjectHeader = () => (
  <DetailHeader>
    <DetailHeaderTop>
      <DetailProjectColor />
      <DetailHeaderInner>
        <DetailTitleArea>
          {/* <FavoriteButton>즐겨찾기</FavoriteButton>
          <SetButton>프로젝트 설정</SetButton> */}
          <DetailTitle>프로젝트 제목제목</DetailTitle>
        </DetailTitleArea>
        <DetailDescription>프로젝트 설명 글</DetailDescription>
      </DetailHeaderInner>
    </DetailHeaderTop>
    <DetailMenu>
      <DetailMenuItem active>타임라인</DetailMenuItem>
      <DetailMenuItem>업무</DetailMenuItem>
      <DetailMenuItem>일정</DetailMenuItem>
      <DetailMenuItem>파일</DetailMenuItem>
    </DetailMenu>
  </DetailHeader>
);

export { ProjectHeader };
