import React from 'react';
import PropTypes from 'prop-types';
import { ProjectWrap, ProjectList, ProjectItem,ProjectColor,ProjectItemContent} from './styles';

const ProjectGroup = () => {
  return (
    <ProjectWrap>
      <div>
        <div>
          <button>바둑형</button>
          <button>리스트형</button>
        </div>
        <div>설정</div>
      </div>
      <div>
        <h4>즐겨찾기</h4>
        <ProjectList>
          <li>
            <ProjectItem>
              <ProjectColor></ProjectColor>
              <ProjectItemContent>
                <button type="button">즐겨찾기</button>
                <p>프로젝트 명</p>
                <div>
                  <span>878</span>
                </div>
              </ProjectItemContent>
            </ProjectItem>
          </li>
        </ProjectList>
      </div>
      <div>
        <h4>참여중</h4>
        <ProjectList>
          <li>
            <ProjectItem>
              <ProjectColor></ProjectColor>
              <ProjectItemContent>
                <button type="button">즐겨찾기</button>
                <p>프로젝트 명</p>
                <div>
                  <span>878</span>
                </div>
              </ProjectItemContent>
            </ProjectItem>
          </li>
          <li>
            <ProjectItem>
              <ProjectColor></ProjectColor>
              <ProjectItemContent>
                <button type="button">즐겨찾기</button>
                <p>프로젝트 명</p>
                <div>
                  <span>878</span>
                </div>
              </ProjectItemContent>
            </ProjectItem>
          </li>
          <li>
            <ProjectItem>
              <ProjectColor></ProjectColor>
              <ProjectItemContent>
                <button type="button">즐겨찾기</button>
                <p>프로젝트 명</p>
                <div>
                  <span>878</span>
                </div>
              </ProjectItemContent>
            </ProjectItem>
          </li>
          <li>
            <ProjectItem>
              <ProjectColor></ProjectColor>
              <ProjectItemContent>
                <button type="button">즐겨찾기</button>
                <p>프로젝트 명</p>
                <div>
                  <span>878</span>
                </div>
              </ProjectItemContent>
            </ProjectItem>
          </li>
          <li>
            <ProjectItem></ProjectItem>
          </li>
          <li>
            <ProjectItem></ProjectItem>
          </li>
          <li>
            <ProjectItem></ProjectItem>
          </li>
          <li>
            <ProjectItem></ProjectItem>
          </li>
          <li>
            <ProjectItem></ProjectItem>
          </li>
          <li>
            <ProjectItem></ProjectItem>
          </li>
          <li>
            <ProjectItem></ProjectItem>
          </li>
          <li>
            <ProjectItem></ProjectItem>
          </li>
        </ProjectList>
      </div>
    </ProjectWrap>
  );
};

export { ProjectGroup };
