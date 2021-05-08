import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PopupManagerWrap, PopupManager, Manager } from './styles';

const ManagerPopup = ({ addManager, taskManagers }) => {
  const { projectParticipants } = useSelector((state) => state.project);
  const [managers, setManagers] = useState(taskManagers);
  function checkHandler(checked, manager) {
    console.log(checked);
    if (checked) {
      setManagers([...managers, manager]);
    } else {
      // 체크해제
      setManagers(managers.filter((v) => (
        v.id !== manager.id
      )));
    }
  }
  console.log(managers, 'manager');
  console.log();
  return (
    <PopupManagerWrap>
      <PopupManager>
        {projectParticipants.map((participant) => {
          const data = { id: participant.userId, name: participant.name };
          return (
            <li key={participant.userId}>
              <Manager>
                <input
                  type="checkbox"
                  onChange={(e) => checkHandler(e.target.checked, data)}
                  checked={managers.findIndex((v) => v.id === data.id) >= 0}
                />{' '}
                {participant.name}
              </Manager>
            </li>
          );
        })}
      </PopupManager>
      <button type="button" onClick={() => addManager(managers)}>
        선택
      </button>
    </PopupManagerWrap>
  );
};

ManagerPopup.propTypes = {};

export default ManagerPopup;
