import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  ProjectFormPopup,
  Header,
  PopupTitle,
  CloseButton,
  Content,
  TitleInput,
  DescriptionTextArea,
  SetArea,
  SetItem,
  SetTitle,
  SetText,
  ToggleButton,
  SubmitButton,
  Circle,
} from './styles';
import { PROJECT_ADD_REQUEST } from '../../../reducers/project';
import { CREATE_PROJECT } from '../../../reducers/modal';

const ProjectMakeForm = ({ popupCloseHandle }) => {
  const { me } = useSelector((state) => state.user);
  const { projectAddDone } = useSelector((state) => state.project);
  const [explain, setExPlain] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (projectAddDone) {
      setTitle('');
      setExPlain('');
      dispatch({
        type: CREATE_PROJECT,
        data: false,
      });
    }
  }, [projectAddDone]);
  const titleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, [title]);
  const explainChange = useCallback((e) => {
    setExPlain(e.target.value);
  }, [explain]);

  const createProject = useCallback(() => {
    if (title === '') {
      return alert('제목을 입력해주세요;');
    }
    dispatch({
      type: PROJECT_ADD_REQUEST,
      data: {
        explain,
        title,
        userId: me.id,
      },
    });
  }, [explain, title]);

  return (
    <ProjectFormPopup>
      <Header>
        <PopupTitle>프로젝트 만들기</PopupTitle>
        <CloseButton type="button" onClick={popupCloseHandle}>X</CloseButton>
      </Header>
      <Content>
        <TitleInput type="text" placeholder="제목을 입력하세요" onChange={titleChange} value={title} />
        <DescriptionTextArea
          placeholder="프로젝트에 관한 설명 입력 (필수항목은 아닙니다.)"
          onChange={explainChange}
          value={explain}
        />
        {/* <SetArea>
          <SetTitle>옵션 설정</SetTitle>
          <SetItem>
            <SetText>회사 공개 프로젝트 설정</SetText>
            <ToggleButton active={false}>
              <Circle />
            </ToggleButton>
          </SetItem>
          <SetItem>
            <SetText>관리자 승인 후 참여가능</SetText>
            <ToggleButton active={false}>
              <Circle />
            </ToggleButton>
          </SetItem>
        </SetArea> */}
      </Content>
      <SubmitButton type="button" onClick={createProject}>
        만들기
      </SubmitButton>
    </ProjectFormPopup>
  );
};

ProjectMakeForm.propTypes = {};

export { ProjectMakeForm };
