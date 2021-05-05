import React, { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { END } from '@redux-saga/core';
import axios from 'axios';
import cookies from 'next-cookies';
import LoginFrom from '../components/loginForm';
import { MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/confiureStore';

const Home = () => (
  <>
    <LoginFrom />
  </>
);

export default Home;
