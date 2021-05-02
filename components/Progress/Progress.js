import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProgressWrap, ProgressBar, ProgressGraph, Data } from './styles';

const Progress = ({ progress, progressHandler }) => {
  const [taskProgress, setTaskProgress] = useState(progress);
  const data = [
    0,
    20,
    40,
    60,
    80,
    100,
  ];
  const onClick = (data) => {
    setTaskProgress(data);
    progressHandler(data);
  };
  return (
    <ProgressWrap>
      <ProgressBar>
        {data.map((v, i) => (
          <Data key={i} onClick={() => onClick(v)}>
            <span>{v}</span>
          </Data>
        ))}
      </ProgressBar>
      <ProgressGraph taskProgress={taskProgress} />
    </ProgressWrap>
  );
};

Progress.propTypes = {

};

export { Progress };