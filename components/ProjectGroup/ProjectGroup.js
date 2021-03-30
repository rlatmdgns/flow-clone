import React from 'react';
import PropTypes from 'prop-types';
import {
  ProjectWrap,
  ProjectList,
  ProjectItem,
  ProjectColor,
  ProjectItemContent,
  ProjectButtonArea,
  TypeButton,
  FilterButton,
  ProjectSetButton,
  ProjectTitle,
  People,
  ProjectStatus,
  ProJectStarButton,
  StatusArea,
  StatusItem,
  ProjectAlarmCount,
} from './styles';

const ProjectGroup = () => (
  <ProjectWrap>
    <ProjectButtonArea>
      <div>
        <TypeButton type="button" buttonType="card" active />
        <TypeButton type="button" buttonType="list" />
        <FilterButton type="button" active />
        <ProjectSetButton type="button" />
      </div>
    </ProjectButtonArea>
    <div>
      <ProjectTitle>즐겨찾기</ProjectTitle>
      <ProjectList>
        <li>
          <ProjectItem>
            <ProjectColor />
            <ProjectItemContent>
              <ProJectStarButton type="button" active />
              <ProjectTitle>프로젝트 명로젝트 명로젝트 명로젝트 명로젝트 명로젝트 명</ProjectTitle>
              <ProjectStatus>
                <People>878</People>
              </ProjectStatus>
            </ProjectItemContent>
          </ProjectItem>
        </li>
      </ProjectList>
    </div>
    <div>
      <ProjectTitle>참여중</ProjectTitle>
      <ProjectList>
        <li>
          <ProjectItem>
            <ProjectColor />
            <ProjectItemContent>
              <ProJectStarButton type="button" />
              <ProjectTitle>프로젝트 명로젝트 명로젝트 명로젝트 명로젝트 명로젝트 명</ProjectTitle>
              <StatusArea>
                <People>878</People>
                <ProjectStatus>
                  <StatusItem status="lock" />
                  <StatusItem status="alarm_off" />
                </ProjectStatus>
              </StatusArea>
            </ProjectItemContent>
            <ProjectAlarmCount>999</ProjectAlarmCount>
          </ProjectItem>
        </li>
        <li>
          <ProjectItem>
            <ProjectColor />
            <ProjectItemContent>
              <ProJectStarButton type="button" />
              <ProjectTitle>프로젝트 명로젝트 명로젝트 명로젝트 명로젝트 명로젝트 명</ProjectTitle>
              <StatusArea>
                <People>878</People>
                <ProjectStatus>
                  <StatusItem status="lock" />
                  <StatusItem status="alarm_off" />
                </ProjectStatus>
              </StatusArea>
            </ProjectItemContent>
            <ProjectAlarmCount>999</ProjectAlarmCount>
          </ProjectItem>
        </li>
      </ProjectList>
    </div>
  </ProjectWrap>
);

export { ProjectGroup };
