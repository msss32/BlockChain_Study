// typeScript로 블록 생성만들기

// 환경설정하고

// ts-node 설치
//==============================================
// npm install -D typescript ts-node @types/node
//==============================================

// tsconfig.json 만들기
// ============================
// tsc --init
// ============================

// tsconfig.json 에서 path 사용할거라
// ===========================
// npm install -D tsconfig-paths

// 필요한 모듈 설치하기

// merkleRoot와 hash 값이 필요하니까
// ==================================
// npm install crypto-js merkle
// ==================================

// typescript는 외부 모듈을 사용할 경우에 타입 정의 파일이 필요하다.
// crypto-js 랑 merkle 모듈 타입을 가져올 수 있는 모듈 설치
// ========================================
// npm i --save-dev @types/crypto-js
// npm i --save-dev @types/merkle
// ========================================

// 제네시스 블록 만들기
// config.ts에서 만들었음

// 만든 것들 테스트해보기
// typeScript로 블록체인을 만들어 봤는데 객체 지향적인 방법으로 코드를 작성하고
// OOP(객체 지향 프로그래밍)

// OOP는 프로그램의 설계방법 개념의 하나이다.
// OOP는 프로그램을 단순히 실행 데이터 처리 방법이 아니라 수많은 객체라는 단위를 만들어서 이 객체를 가지고 동작하는 상호작용을 서술한 방식이다.
// OOP에서 객체는 하나의 역할을 수행하는 함수와 변수들의 묶음 데이터로 보면된다.
// 이런 객체지향 프로그래밍은 프로그램을 만들 때 제일 작은 단위부터 만들어가는 방식을 선호한다.
// but 위의 방식으로 만들면 작성된 코드들의 테스트가 어렵다는 단점이 있어서 라이브러리를 사용해서 테스트한다.

// 일반적인 개발이 아니라 테스트 코드를 작성하면서 개발해나가는 것을 TDD라고 한다.
// TDD(Test_Driven Development) 기법

// 테스트를 위해 Jest를 설치해보자!
// 설치 명령어
//=========================================
// npm install -D ts-jest @types/jest babel-core
// npm install -D @babel/preset-typescript @babel/preset-env

// 체인 만들기

// block클래스로 만든 블록들을 체인으로 연결시켜줄 chain을 클래스로 만들기
// chain클래스에는 생성한 블록을 배열로 담아서 블록체인을 만들 예정
// 이미 지금 우리가 만든 블록은 블록의 속성으로 체이닝이 이미 이뤄지고 있는데
// 이전 블록 해시 값을 속성으로 가지고 있기 때문에 특정 블록기준으로 이전 블록 해시 값이 달라지면
// 현재 블록의 이전 해시값과 불일치가 발생해서 연결 고리가 끊김
// chain클래스를 따로 만들어서 생성된 블록을 하나의 배열 안에 담아주는 역할을 할 예정

// because 이후에 우리가 마이닝할때 난이도 계산을 위해서