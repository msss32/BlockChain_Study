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

// 배포 잘 되었는지 확인 트러플 콘솔 열어서
// npx truffle console

// 트러플 콘솔창에 Counter.deployed().then(instance => it = instance)
// it.address 콘솔에 확인
// CA : '0xaD32ad9CF4640469675eBeBC070E978EBBdd5064'

// it.current.call()를 작성하면 BN으로 나오는데 Big Number의 약자로
// 자바스크립트에 큰숫자를 표현할때 사용되는 객체 컨트랙트에서
// 사용하는 int는 기본적으로 그값이 큰 경우가 많아서 1ETH라하면
// 10^18 wei를 의미하기때문에 BN으로 가져오는 경우가 많다.

// it.increment() 홤수를 사용해서 즉시 상태가 변한 값을 확인.
// 이유는 가나쉬로 실행한 로컬의 이더리움 네트워크는 트랜잭션이 발생하면
// 자동으로 블록 마이닝을 시도 해주기때문

// front 작업

// 스마트 컨트랙트 메타마스크와 연결해서
// 배포 및 실행
// 스마트 컨트랙트 이벤트를 등록하고 백엔드에서 트랜잭션 생성 후 실행

// 프론트에서 상태변수를 업데이트 해줬고
// 트랜잭션 결과는 eth.TransactionReceipt() 여기 저장됨(일종의 log로 저장)
// 로그 기록을 조회하면 스마트 컨트랙트가 실행됐는지 찾을 수 있음

// 로그 데이터를 프론트엔드에 전송하고 프론트 엔드에서 이벤트를 Listen하게 해서
// 이더리움 네트워크에 배포된 스마트 컨트랙트와 실시간으로 통신이 가능
