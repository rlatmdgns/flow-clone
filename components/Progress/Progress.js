import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ProgressWrap, ProgressBar, ProgressGraph, Data } from './styles';

const Progress = ({ progress, progressHandler }) => {
  const data = [
    0,
    20,
    40,
    60,
    80,
    100,
  ];
  const onClick = useCallback((data) => {
    progressHandler(data);
  }, []);
  return (
    <ProgressWrap>
      <ProgressBar>
        {data.map((v, i) => (
          <Data key={i} onClick={() => onClick(v)}>
            <span>{v}</span>
          </Data>
        ))}
      </ProgressBar>
      <ProgressGraph taskProgress={progress} />
    </ProgressWrap>
  );
};

Progress.propTypes = {

};

export { Progress };
