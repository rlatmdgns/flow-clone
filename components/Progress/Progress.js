import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, ProgressGraph, Data } from './styles';

const Progress = ({ progress }) => {
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
  };
  return (
    <ProgressBar>
      <ProgressGraph taskProgress={taskProgress} />
      {data.map((v, i) => (
        <Data key={i} onClick={() => onClick(v)}>{v}</Data>
      ))}
    </ProgressBar>
  );
};

Progress.propTypes = {

};

export { Progress };
