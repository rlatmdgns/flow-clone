import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LeftMenu from '../LeftMenu';
import { UserHeader } from '../UserHeader/UserHeader';
import Modal from '../modals/Modal';
import { ProjectMakeForm } from '../modals/ProjectMakeForm/ProjectMakeForm';
import CreatePostForm from '../modals/CreatePostForm';

const Wrap = styled.div`
  height: 100vh;
`;

const BodyWrap = styled.div`
  display: flex;
  height: calc(100% - 40px);
`;
const Container = styled.div`
  flex: 1;
`;
const Content = styled.div``;

const Header = styled.header`
  position: relative;
  height: 40px;
  background: #2c2a34;
`;

const AppLayout = ({ children }) => {
  const router = useRouter();
  const { createProject, createPost } = useSelector((state) => state.modal);
  const { me } = useSelector((state) => state.user);
  // const cookies = new Cookies();
  // const token = cookies.get('token');
  // const userId = cookies.get('userId');
  useEffect(() => {
    if (!me) {
      alert('재 로그인 해주세요.');
      Router.replace('/');
    }
  }, [me]);
  return (
    <Wrap>
      <Header />
      <BodyWrap>
        <LeftMenu />
        <Container>
          {router.pathname.indexOf('posts') < 0 && <UserHeader />}
          <Content>{children}</Content>
        </Container>
      </BodyWrap>
      {/* {(function () {

      }())} */}
      {(() => {
        if (createProject) {
          return (
            <Modal visible={createProject}>
              <ProjectMakeForm />
            </Modal>
          );
        }
        if (createPost) {
          return (
            <Modal visible>
              <CreatePostForm />
            </Modal>
          );
        }
      })()}
    </Wrap>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
