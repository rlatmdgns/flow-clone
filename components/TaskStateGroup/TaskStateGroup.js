import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StateColorType = (state) => {
  switch (state) {
    case 'request':
      return 'color: #fff; background: #00b2ff;';
    case 'ongoing':
      return 'color: #fff; background: #00b01c;';
    case 'feedback':
      return 'color: #fff; background: #fd7900;';
    case 'complete':
      return 'color: #fff; background: #402a9d;';
    case 'hold':
      return 'color: #fff; background: #777;';
    default:
      return 'color: #777; background: #faf9f9;';
  }
};
const StateButton = styled.button`
display: inline-block;
width: 70px;
height: 36px;
border-radius: 220px;
font-weight: bold;
font-size: 13px;
${({ state }) => StateColorType(state)};
& + & {
  margin-left: 10px;
}
`;
const TaskStateGroup = ({ stateHandler }) => {
  const taskType = ['요청', '진행', '피드백', '완료', '보류'];
  const [currentState, setCurrentState] = useState('request');
  const state = {
    0: 'request',
    1: 'ongoing',
    2: 'feedback',
    3: 'complete',
    4: 'hold',
  };
  const onClick = (i) => {
    setCurrentState(state[i]);
    stateHandler(i);
  };
  return (
    taskType.map((v, i) => {
      if (state[i] === currentState) {
        return (
          <StateButton key={i} state={currentState}>{v}</StateButton>
        );
      }
      return <StateButton key={i} onClick={() => onClick(i)}>{v}</StateButton>;
    })
  );
};

export { TaskStateGroup };
