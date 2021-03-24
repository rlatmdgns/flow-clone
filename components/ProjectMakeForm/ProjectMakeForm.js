import React from 'react';
import PropTypes from 'prop-types';
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
  Circle
} from './styles';


const ProjectMakeForm = () => {
  return (
    <ProjectFormPopup>
      <Header>
        <PopupTitle>프로젝트 만들기</PopupTitle>
        <CloseButton></CloseButton>
      </Header>
      <Content>
        <TitleInput type="text" placeholder="제목을 입력하세요"/>
        <DescriptionTextArea placeholder="프로젝트에 관한 설명 입력 (필수항목은 아닙니다.)"/>
        <SetArea>
          <SetTitle>옵션 설정</SetTitle>
        <SetItem>
          <SetText>회사 공개 프로젝트 설정</SetText>
          <ToggleButton active>
            <Circle/>
          </ToggleButton>
        </SetItem>
        <SetItem>
          <SetText>회사 공개 프로젝트 설정</SetText>
          <ToggleButton active>
            <Circle/>
          </ToggleButton>
        </SetItem>
        </SetArea>
      </Content>
      <SubmitButton type="button">적용하기</SubmitButton>
    </ProjectFormPopup>
  );
};


ProjectMakeForm.propTypes = {

};


export {ProjectMakeForm};
