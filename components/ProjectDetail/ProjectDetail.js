import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DetailContainer, DetailContent } from './styles';
import PostWriteArea from './PostWriteArea';
import ProjectHeader from './ProjectHeader';
import PostCard from './PostCard';

const ProjectDetail = () => {
  const [currentState, setCurrentState] = useState('request');
  const taskType = ['요청', '진행', '피드백', '완료', '보류'];
  const state = {
    0: 'request',
    1: 'ongoing',
    2: 'feedback',
    3: 'complete',
    4: 'hold',
  };
  const stateHandler = (i) => {
    setCurrentState(state[i]);
  };

  return (
    <DetailContainer>
      <ProjectHeader />
      <DetailContent>
        <PostWriteArea />
        <PostCard taskType={taskType} currentState={currentState} state={state} stateHandler={stateHandler} />
      </DetailContent>
    </DetailContainer>
  );
};

ProjectDetail.propTypes = {

};

export { ProjectDetail };
