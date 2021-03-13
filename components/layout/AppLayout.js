import React from 'react'
import PropTypes from 'prop-types';

const AppLayout = ({children}) => {
  return (
    <div>
      <div>사이드 메뉴</div>
      <div>
        <div>헤더</div>
        <div>{children}</div>
      </div>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default AppLayout
