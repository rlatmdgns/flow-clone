import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import LeftMenu from '../LeftMenu';
import { UserHeader } from '../UserHeader/UserHeader';
import Modal from '../modals/Modal';
import { ProjectMakeForm } from '../modals/ProjectMakeForm/ProjectMakeForm';

const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
`;

const BodyWrap = styled.div`
  display:flex;
  flex:1;
`;
const Container = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
`;
const Content = styled.div`
  overflow:auto;
  display:flex;
  flex:1;
  flex-direction:column;
`;

const Header = styled.header`
  position:relative;
  height:40px;
  background: #2C2A34;
`;

const AppLayout = ({ children }) => {
  const router = useRouter();
  return (
    <Wrap>
      <Header />
      <BodyWrap>
        <LeftMenu />
        <Container>
          {router.pathname.indexOf('detail') < 0 && <UserHeader />}
          <Content>{children}</Content>
        </Container>
      </BodyWrap>
      <Modal visible={false}>
        <ProjectMakeForm />
      </Modal>
    </Wrap>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
