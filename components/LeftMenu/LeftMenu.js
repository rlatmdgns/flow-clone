import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { LeftMenuWrap, ProjectAddButton, Logo, Gnb, GnbItem } from './styles';

const LeftMenu = () => {
  const router = useRouter();
  const menuData = [
    {
      title: '프로젝트 홈',
      link: '/main',
      img: '/images/icons/icon_home.png',
      hover: '/images/icons/icon_home2.png',
    },
    {
      title: '모든 업무',
      link: '/task',
      img: '/images/icons/icon_task.png',
      hover: '/images/icons/icon_task2.png',
    },
    {
      title: '모든 일정',
      link: '/',
      img: '/images/icons/icon_schedule.png',
      hover: '/images/icons/icon_schedule2.png',
    },
    {
      title: '모든 파일',
      link: '/',
      img: '/images/icons/icon_file.png',
      hover: '/images/icons/icon_file2.png',
    },
    {
      title: '내가 담은 글',
      link: '/',
      img: '/images/icons/icon_bookmark.png',
      hover: '/images/icons/icon_bookmark2.png',
    },
    {
      title: '내가 쓴 글',
      link: '/',
      img: '/images/icons/icon_my_write.png',
      hover: '/images/icons/icon_my_write2.png',
    },
    {
      title: '나를 지정한 글',
      link: '/',
      img: '/images/icons/icon_mention.png',
      hover: '/images/icons/icon_mention2.png',
    },
    {
      title: '주제별 프로젝트',
      link: '/',
      img: '/images/icons/icon_search.png',
      hover: '/images/icons/icon_search2.png',
    },
  ];

  return (
    <LeftMenuWrap>
      <Logo>
        <Link href="/main">
          <a>
            <img src="/images/logo.png" alt="flow" />
          </a>
        </Link>
      </Logo>
      <ProjectAddButton>새 프로젝트 추가</ProjectAddButton>
      <Gnb>
        {menuData.map((v, i) => {
          if (router.pathname === v.link) {
            return (
              <li key={i}>
                <GnbItem img={v.img} hover={v.hover} pathname={router.pathname}>
                  <Link href={v.link}>
                    <a>{v.title}</a>
                  </Link>
                </GnbItem>
              </li>
            );
          }
          return (
            <li key={i}>
              <GnbItem img={v.img} hover={v.hover}>
                <Link href={v.link}>
                  <a>{v.title}</a>
                </Link>
              </GnbItem>
            </li>
          );
        })}
      </Gnb>
    </LeftMenuWrap>
  );
};

export { LeftMenu };
