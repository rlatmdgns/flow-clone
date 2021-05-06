import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PopupManagerWrap, PopupManager, Manager } from './styles';

const ManagerPopup = ({ addManager }) => {
  const { projectParticipants } = useSelector((state) => state.project);
  const [managers, setManagers] = useState([]);
  function checkHandler(checked, manager) {
    console.log(checked);
    if (checked) {
      setManagers([...managers, manager]);
    } else {
      // 체크해제
      setManagers(managers.filter((v) => v !== manager));
    }
  }
  console.log(managers, 'manager');
  return (
    <PopupManagerWrap>
      <PopupManager>
        {projectParticipants.map((participant) => (
          <li key={participant.userId}>
            <Manager>
              <input type="checkbox" onChange={(e) => checkHandler(e.target.checked, participant.userId)} checked={managers.indexOf(participant.userId) >= 0} /> {participant.name}
            </Manager>
          </li>
        ))}
      </PopupManager>
      <button type="button" onClick={() => addManager(managers)}>선택</button>
    </PopupManagerWrap>
  );
};

ManagerPopup.propTypes = {

};

export default ManagerPopup;
