import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { UserHeaderWrap, PageTitle } from './styles';
import { CHANGE_PAGE_TITLE } from '../../reducers/user';

const UserHeader = () => {
  const dispatch = useDispatch();
  const pageTitle = useSelector((state) => state.user.currentPage);
  const router = useRouter();
  useEffect(() => {
    const pathName = router.pathname;
    let pageTitle = '';
    switch (pathName) {
      case '/main':
        pageTitle = '프로젝트 홈';
        break;
      case '/task':
        pageTitle = '모든 업무';
        break;
      default:
        break;
    }
    dispatch({
      type: CHANGE_PAGE_TITLE,
      data: pageTitle,
    });
  }, []);
  return (
    <UserHeaderWrap>
      <PageTitle>{pageTitle}</PageTitle>
    </UserHeaderWrap>
  );
};

export { UserHeader };
