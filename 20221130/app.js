// 사과 판매 앱 만들기
// 스마트 컨트랙트 함수의 payble속성
// 솔리디티 언어는 코인이나 토큰을 즉 가상화폐를 다루는 언어이고
// 다른 언어들은 프로그램을 개발하는데 사용하지만 솔리디티는
// 가상화폐라는 돈을 가지고 사용하기 위해 사용하는 언어

// 솔리디티로 이더를 전송하는 스마트 컨트랙트를 작성 하기 위해서는
// payble을 작성한 함수에서만 이더를 보낼수 있다.

// 먼져 트러플 init
// npx truffle init

// truffle-config.js 설정

// contracts에 AppleShop.sol 파일 만들고
// 리액트 설치

// npx create-react-app "이름"

// 설치 하면서 migrations 폴더에 2_deploy_AppleShop.js 만들고 작성

// 리액트 설치가 끝나면 필요없는거 제거

// src에 hooks 폴더 만들고 useWeb3.js 만들기
// web3 라이브러리 설치
// 경로 리액트로 이동해서
// npm i web3
// useWeb3.js 작성

// 트러플 컴파일
// 경로 확인 하시고 리액트 밖으로
// npx truffle complie

// 가나쉬 켜서 마이그레이션도 
// npx ganache-cli
// npx truffle migration

// 다 됬으면
// src에 contracts 폴더만들고 컴파일된 AppleShop.json 복사 붙여넣기
// src에 components 폴더 만들고 AppleShop.js 만들기

// AppleShop.js 컴포넌트 다 작성하고
// App.js로 이동

// 리액트 실행해서 사용해보세요