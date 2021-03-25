import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/confiureStore';
import {GlobalStyle} from '../styles/global-styles';

const App = ({ Component, pageProps}) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>flow</title>
    </Head>
    <GlobalStyle/>
    <Component {...pageProps}/>
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired, // elementType  = jsx
};

export default wrapper.withRedux(withReduxSaga(App));
