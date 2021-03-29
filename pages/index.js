import React from "react";
import Link from 'next/link'
const Home = () => {
  return (
      <div>
        <Link href="/login">
          <a>로그인</a>
        </Link>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
  );
};



export default Home;
