# Flow
## 프로젝트 소개
**[플로우](https://flow.team/index.act)**는 마드라체크라는 기업에서 만든 **"프로젝트관리 중심"**의 업무관리 협업툴입니다.
최근 동향을 살피고 커뮤니티가 활발한 리액트를 사용 해보고 싶어서 개인프로젝트를 하게되었습니다.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/29652201/119252934-c01f8f80-bbe9-11eb-8119-1f88b2c92f49.gif)


## 프로젝트 목표

 - **JavaScript, React의 기본 개념을 익히고 구현해보기 위함**

- 리액트 서버사이드 렌더링 Next.js 프레임워크를 사용 ! 
Next.js 프레임워크를 사용하면 react를 node환경에서 사용할 수 있기 때문에 페이지에 따라 pre-rendering, csr을 쉽게 선택적으로 적용할 수 있고 코드 스플리팅과 페이지 최적화가 자동으로 이루어진다.
- React를  익히고 hooks 조작 방법을 이해한다.
- React의 필수 개념인 LifeCycle, State, Props를 좀 더 직관적으로 다루고 이해해본다.
- Redux state 전역관리 , Redux-saga 비동기 처리 / side Effect


## 개발환경
![Flow abfc3474797b43e6b5329f06dc606b9e](https://user-images.githubusercontent.com/29652201/119014749-3e561900-b9d3-11eb-9bc5-78f6fbdeabc3.jpg)
![Untitled](https://user-images.githubusercontent.com/29652201/119014765-41510980-b9d3-11eb-9c63-d8b926978da8.png)




## issue 해결 과정

1. Styled-Components 스타일 적용 전에 렌더되는 에러
[https://velog.io/@rlatmdgns94/Next.js-Styled-Compenents-스타일-적용-전에-렌더되는-에러](https://velog.io/@rlatmdgns94/Next.js-Styled-Compenents-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A0%81%EC%9A%A9-%EC%A0%84%EC%97%90-%EB%A0%8C%EB%8D%94%EB%90%98%EB%8A%94-%EC%97%90%EB%9F%AC)
2. [Next.js]공용 컴포넌트 만들기
[https://velog.io/@rlatmdgns94/Next.js공용-컴포넌트-만들기](https://velog.io/@rlatmdgns94/Next.js%EA%B3%B5%EC%9A%A9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0)
3. Next redux, redux-saga 적용
[https://velog.io/@rlatmdgns94/Next.js-redux-redux-saga-적용](https://velog.io/@rlatmdgns94/Next.js-redux-redux-saga-%EC%A0%81%EC%9A%A9)
4. 토큰 사용하여 로그인
[https://velog.io/@rlatmdgns94/210407-11TIL-토큰](https://velog.io/@rlatmdgns94/210407-11TIL-%ED%86%A0%ED%81%B0)
5. styled-componets 조건 처리 TIL
[https://velog.io/@rlatmdgns94/210321-TIL](https://velog.io/@rlatmdgns94/210321-TIL)
6. [Axios] delete 요청 시 body에 데이터 넣기
[https://velog.io/@rlatmdgns94/Axios-delete-요청-시-body에-데이터-넣기](https://velog.io/@rlatmdgns94/Axios-delete-%EC%9A%94%EC%B2%AD-%EC%8B%9C-body%EC%97%90-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%84%A3%EA%B8%B0)


## 기술 스택

- React.js
- Next.js
- React Router
- RESTful API
- Axios
- stlyed-components
- Redux, Redux-Saga

## 구현 기능

- 로그인, 회원가입 및 유효성 검사
- 프로젝트 방 만들기
- 프로젝트 초대
- 업무 등록 , 수정, 삭제
- 업무 상태 변경
- 업무 시작일 마감일 변경
- 업무 진척도 변경
- 업무 게시글 좋아요
- 댓글 등록, 수정, 삭제
- React Router를 이용한 페이지 이동 기능
- axios를 통한 백엔드와 통신
