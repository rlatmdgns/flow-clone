import React, {useEffect} from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import {UserHeaderWrap, PageTitle, UserMenu} from './styles';
import { useSelector,useDispatch } from 'react-redux';
import { CHANGE_PAGE_TITLE } from '../../reducers/user';


const UserHeader = () => {
  const dispatch = useDispatch();
  const pageTitle = useSelector( state => state.user.currentPage);
  const router = useRouter();
  useEffect(()=>{
    const pathName = router.pathname;
    let pageTitle = ""
    switch (pathName) {
      case "/main":
        pageTitle = "프로젝트 홈";
        break;
      case "/task":
        pageTitle = "모든 업무";
        break;
      default:
        break;
    }
    dispatch({
      type:CHANGE_PAGE_TITLE,
      data: pageTitle,
    })
  }, []);
  return (
    <UserHeaderWrap>
      <PageTitle>{pageTitle}</PageTitle>
      <UserMenu>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </UserMenu>
    </UserHeaderWrap>
  );
};

export {UserHeader};
