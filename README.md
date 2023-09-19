# 채팅방 구현

- 서버에서 가져온 메세지 데이터를 화면에 출력

## 🖥 구현 영상
![ezgif com-video-to-gif (1)](https://github.com/taegeun1111/chat-room/assets/122959190/14211ddf-b980-4df2-89fa-355e9b340900)


### 🌐 배포 링크
**[배포 링크](https://chat-room-7y3161ki2-taegeun1111.vercel.app/)**

### ⚒️ 기술 스택

<div>
   <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
   <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
   <img src="https://img.shields.io/badge/sass-CC6699?style=flat&logo=sass&logoColor=white">
   <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
   <br/>
   <img src="https://img.shields.io/badge/mui-007FFF?style=flat&logo=mui&logoColor=white">
   <img src="https://img.shields.io/badge/vercel-000000?style=flat&logo=vercel&logoColor=white">
   <img src="https://img.shields.io/badge/husky-efefef?style=flat&logo=husky&logoColor=white">
   <img src="https://img.shields.io/badge/ESlint-4B32C3?style=flat&logo=eslint&logoColor=white">
   <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white">

</div>

<br />

## 📌 프로젝트 실행 방법

```javascript
$ git clone https://github.com/taegeun1111/chat-room.git
$ npm start
$ npm install
```

<br/>

## 🧐 구현 기능
1. 메세지 데이터를 화면에 출력
  - axios로 받아오는 data의 값을 `useChatData` 커스텀 훅을 만들어 데이터를 가공해준 후 구현
  - 메세지 가공 시 보낸시간을 Date를 비교할 수 있는 함수 `sortData`를 만들어 보낸시간 순으로 정렬
  - msg.type 이 photo인 메세지는 가공할 때 `filter`함수로 필터링
  - 메세지 입력창에서 텍스트를 보낼 때 `addChat`함수에서 date를 가공하고 마지막 lastId를 찾아 채팅 기록 

2. 프로필 사진 클릭시 Modal 팝업
  - `Modal`컴포넌트를 만든 후 해당 프롤필 이미지 클릭 시 backdrop 기능
3. 메세지 클릭시 클립보드 복사
  - `navigator.clipboard`를 이용하여 클립보드로 복사
4. 전송 버튼 클릭 활성화
  - `useInputWithDebounce` 커스텀 훅을 만들어 validcheck를 이용하여 length를 검사한 후 버튼 활성화

5. 추가 구현 기능
  - messagesList이 변경되어 렌더링이 될 때 스크롤이 젤 하단에 위치하도록 설정
  - input 영역이 autoFocus가 되도록 설정
  - sass mixin 변수 설정
  - debouncing을 구현하여 사용자가 입력시 400s후 버튼 활성화
  - 다중클릭을 방지하기 위해 flag를 설정한 후 데이터를 보내는 동안 버튼 비활성화
  - 에러페이지
  
<br />

## 📋 컨벤션

### Husky && lint-staged (commitlint 적용)

```shell
{
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "react-app",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-var": "error",
    "no-multiple-empty-lines": "error",
    "no-console": ["warn", {"allow": ["warn", "error", "info"]}],
    "eqeqeq": "error",
    "dot-notation": "error",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
}
```

### Prettier

```shell
{
  singleQuote: true,
  endOfLine: 'lf',
  trailingComma: 'es5',
  bracketSpacing: false,
  jsxSingleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  proseWrap: 'always',
  arrowParens: 'avoid',
}
```

### Commit message

| Commit Type | Format                                                                   |
| ----------- | ------------------------------------------------------------------------ |
| feat        | 새로운 기능 추가                                                         |
| fix         | 버그 수정                                                                |
| docs        | 문서수정                                                                 |
| style       | 코드 스타일 변경(코드 포매팅,세미콜론 누락 등)</br>기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경(CSS 등)                                            |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                   |
| refactor    | 코드 리팩토링                                                            |
| build       | 빌드 파일 수정                                                           |
| chore       | 빌드 업무 수정, 패키지 매니저 수정(gitignore수정 등)                     |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                        |
| remove      | 파일을 삭제만 한 경우                                                    |

<br />

### 🗂️ 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┣ 📂Chat
 ┃ ┃ ┣ 📜ChatLists.tsx
 ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂Input
 ┃ ┃ ┗ 📜InputMessage.tsx
 ┃ ┗ 📂Layout
 ┃ ┃ ┗ 📜Layout.tsx
 ┣ 📂constants
 ┃ ┗ 📜constants.ts
 ┣ 📂hooks
 ┃ ┣ 📜useChatData.ts
 ┃ ┗ 📜useInputWithDebounce.ts
 ┣ 📂pages
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜ErrorPage.tsx
 ┃ ┣ 📂Home
 ┃ ┃ ┗ 📜ChatRoom.tsx
 ┃ ┗ 📜 index.ts
 ┣ 📂router
 ┃ ┗ 📜Router.tsx
 ┣ 📂styles
 ┃ ┣ 📂section
 ┃ ┣ 📂setting
 ┣ 📂types
 ┃ ┗ 📜chat.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```
