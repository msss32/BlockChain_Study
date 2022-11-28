import React from "react";
import { Counter } from "./reducer/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

// 프론트는 리액트로 구성하고 메타마스크 연결은 가나쉬 네트워크
// 스마트 컨트랙트 배포는 트러플로 구성할 예정

// 리액트에서 프론트로 스마트 컨트랙트로 동작을 시켜서 카운터를 제작
// 더하고 빼고 카운트를 만들고 클라이언트에서 메타마스크로 연결된 계정을 통해
// 트랜잭션을 보내고 스마트 컨트랙트 코드를 실행해
// 상태 변수가 바뀌는 걸 프론트에서 확인

// contracts 폴더에 Counter.sol파일 만들어서 내용 추가
// truffle-config.js 내용 수정 가나쉬 네트워크 속성 추가
// npx truffle compile 컨트랙트 코드 컴파일

// 배포를 하기 위해 migrations 폴더에 [번호][내용][이름].js 파일을 만들어서
// 배포에 대한 코드 작성

// 배포 명령어 사용해서 가나쉬 네트워크에 컨트랙트 배포 진행
// npx truffle migration
