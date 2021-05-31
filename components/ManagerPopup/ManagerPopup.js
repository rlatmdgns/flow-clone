import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PopupManagerWrap, PopupManager, Manager, Button } from './styles';

const ManagerPopup = ({ addManager, taskManagers }) => {
  const { projectParticipants } = useSelector((state) => state.project);
  const [managers, setManagers] = useState(taskManagers);
  const checkHandler = (checked, manager) => {
    if (checked) {
      setManagers([...managers, manager]);
    } else {
      // 체크해제
      setManagers(managers.filter((v) => (
        v.id !== manager.id
      )));
    }
  };
  return (
    <PopupManagerWrap>
      <PopupManager>
        {projectParticipants.map((participant) => {
          const data = { id: participant.userId, name: participant.name };
          return (
            <li key={participant.userId}>
              <Manager>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => checkHandler(e.target.checked, data)}
                    checked={managers.findIndex((v) => v.id === data.id) >= 0}
                  />
                  {participant.name}
                </label>
              </Manager>
            </li>
          );
        })}
      </PopupManager>
      <Button type="button" onClick={() => addManager(managers)}>
        선택
      </Button>
    </PopupManagerWrap>
  );
};

ManagerPopup.propTypes = {};

export default ManagerPopup;
