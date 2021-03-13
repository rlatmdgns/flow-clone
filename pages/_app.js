import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// import withReduxSaga from 'next-redux-saga';
// import wrapper from '../store/confiureStore';
import {GlobalStyle} from '../styles/global-styles'

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>flow</title>
    </Head>
    <GlobalStyle/>
    <Component/>
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired, // elementType  = jsx
};

export default App
