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
} from './styles';

const ProjectGroup = () => {
  return (
    <ProjectWrap>
      <ProjectButtonArea>
        <div>
          <TypeButton type="button" buttonType="card" active></TypeButton>
          <TypeButton type="button" buttonType="list"></TypeButton>
          <FilterButton type="button" active></FilterButton>
        </div>
        <ProjectSetButton type="button"></ProjectSetButton>
      </ProjectButtonArea>
      <div>
        <ProjectTitle>즐겨찾기</ProjectTitle>
        <ProjectList>
          <li>
            <ProjectItem>
              <ProjectColor></ProjectColor>
              <ProjectItemContent>
                <ProJectStarButton type="button" active></ProJectStarButton>
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

        </ProjectList>
      </div>
    </ProjectWrap>
  );
};

export { ProjectGroup };
