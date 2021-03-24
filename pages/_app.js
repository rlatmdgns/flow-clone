import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/confiureStore';
import {GlobalStyle} from '../styles/global-styles';
import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

function App({ Component, pageProps}){
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.REACT_APP_FIREBASE_PROJECT_ID,
  }
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  return <>
    <Head>
      <meta charSet="utf-8" />
      <title>flow</title>
    </Head>
    <GlobalStyle/>
    <Component {...pageProps}/>
  </>
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired, // elementType  = jsx
};

export default wrapper.withRedux(withReduxSaga(App));
