# Todo 프로젝트 협업 github 활용 연습

## 프로젝트 시작하기

git 정보를 clone 받아서 본인 PC에 repository를 생성한다.

```bash
git clone https://github.com/4rhd6gh/TodoList.git
```

프로젝트에 필요한 npm 모듈들을 설치한다. (yarn 쓰시는 분들은 따로 설정을 해서 사용하셔도 될 듯 합니다.)
(하지만 yarn을 사용하지 못하는 분들을 위해 npm을 일단 기본으로 해야 해서 yarn에 대한 설정 파일은 따로 commit이 안되도록 gitignore에 관리해주시기 바랍니다.)

```bash
npm install
```

추가된 라이브러리

<img src="https://img.shields.io/badge/redux-devtools-extension-7A1FA2?style=flat-square"/> 크롬 확장 프로그램에서 redux dev tools를 통해 설치 할 수 있고, redux의 데이터 흐름을 알아보기 쉽게 하기 위해 사용

<img src="https://img.shields.io/badge/redux-logger-7A1FA2?style=flat-square"/> redux를 통해 바뀔 이전 state, dispatch 실행으로 인해 바뀐 state가 콘솔에 찍혀 디버깅 쉽게 해주는 라이브러리

<img src="https://img.shields.io/badge/react-router-dom-7A1FA2?style=flat-square"/> 라우팅을 도와주는 라이브러리

<img src="https://img.shields.io/badge/axios-7A1FA2?style=flat-square"/> 서버 통신을 할 수 있게 해주는 라이브러리

시작 스크립트

```bash
npm run start
```
