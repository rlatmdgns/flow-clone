import React from 'react';
import PropTypes from 'prop-types';
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
  PostTItle,
  PostCardContainer,
  TaskNumber,
  TaskNumberArea,
  TaskListGroup,
  TaskList,
  TaskItemTitle,
  TaskListCell,
  PostCardContent,
  StateButton,
  PostFooter,
} from './styles';

const PostCard = () => (
  <PostCardWrapper>
    <CreatorArea>
      <Thumbnail />
      <CreatorInfo>
        <dt>
          <Name>홍길동</Name>
          <Rank>매니저</Rank>
          <Date>2021-04-16</Date>
        </dt>
        <dd>
          <Company>플로우</Company>
          <Team>애니멀팀</Team>
        </dd>
      </CreatorInfo>
    </CreatorArea>
    <PostHeader>
      <PostTItle>플로우 이용안내 메뉴얼</PostTItle>
      <TaskNumberArea>
        <TaskNumber>업무번호 0001</TaskNumber>
      </TaskNumberArea>
    </PostHeader>
    <PostCardContainer>
      <TaskListGroup>
        <TaskList>
          <TaskItemTitle>업무상태</TaskItemTitle>
          <TaskListCell>
            <StateButton type="button">요청</StateButton>
            <StateButton type="button">진행</StateButton>
            <StateButton type="button">피드백</StateButton>
            <StateButton type="button">완료</StateButton>
            <StateButton type="button">보류</StateButton>
          </TaskListCell>
        </TaskList>
        <TaskList>
          <TaskItemTitle>담당자</TaskItemTitle>
          <TaskListCell>
            <button type="button">담당자 추가</button>
          </TaskListCell>
        </TaskList>
        <TaskList>
          <TaskItemTitle>시작일시</TaskItemTitle>
          <TaskListCell>
            <span>
              <span>2021-04-16 (금), 01:29</span>
            </span>
          </TaskListCell>
          <TaskItemTitle>마감일시</TaskItemTitle>
          <TaskListCell>
            <span>
              <span>2021-04-16 (금), 01:29</span>
            </span>
          </TaskListCell>
        </TaskList>
      </TaskListGroup>
      <PostCardContent>
        홍길동 간지로다가
      </PostCardContent>
    </PostCardContainer>
    <PostFooter>
      <button>반응하기</button>
      <button>담아두기</button>
      <span>읽음<em>76</em></span>
    </PostFooter>
    <CommentWrap>
      <CommentHeader />
      <CommentGroup>
        <li>
          <CommentThumNail />
          <CommentContent>
            <CommentUserArea>
              <CommentUser>
                <Name>홍길동</Name>
                <Rank>매니저</Rank>
                <Date>2021-04-16</Date>
              </CommentUser>
              <CommentMeMenu>
                <button>수정</button>
                <button>삭제</button>
              </CommentMeMenu>
            </CommentUserArea>
            <CommentText>
              1231221133
            </CommentText>
          </CommentContent>
        </li>
      </CommentGroup>
    </CommentWrap>
  </PostCardWrapper>
);

export { PostCard };
