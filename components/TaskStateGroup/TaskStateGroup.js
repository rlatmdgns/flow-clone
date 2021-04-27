import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StateColorType = (state) => {
  switch (state) {
    case 'REQUEST':
      return 'color: #fff; background: #00b2ff;';
    case 'ONGOING':
      return 'color: #fff; background: #00b01c;';
    case 'FEEDBACK':
      return 'color: #fff; background: #fd7900;';
    case 'COMPLETE':
      return 'color: #fff; background: #402a9d;';
    case 'HOLD':
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
const TaskStateGroup = ({ stateHandler, taskStatus }) => {
  const taskType = ['요청', '진행', '피드백', '완료', '보류'];
  const [currentState, setCurrentState] = useState(taskStatus || 'REQUEST');
  const state = {
    0: 'REQUEST',
    1: 'ONGOING',
    2: 'FEEDBACK',
    3: 'COMPLETE',
    4: 'HOLD',
  };
  const onClick = (i) => {
    setCurrentState(state[i]);
    stateHandler(state[i]);
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
