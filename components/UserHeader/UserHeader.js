import React from 'react';
import PropTypes from 'prop-types';
import {UserHeaderWrap, PageTitle, UserMenu} from './styles';

const UserHeader = ({currentPageTitle}) => {
  return (
    <UserHeaderWrap>
      <PageTitle>{currentPageTitle}</PageTitle>
      <UserMenu>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </UserMenu>
    </UserHeaderWrap>
  );
};

export {UserHeader};
