// 트러플을 사용해서 이더리움 디앱 개발 쉽게 가능
// 트러플이 Dapp 개발을 하는데 도와주는 블록체인 프레임 워크
// 블록체인에서 스마트 계약을 컴파일하고 배포할 때
// 복잡한 구조를 추상화시켜주는 역할

// 트러플은 스마트 컨트랙트를 쉽게 배포할 수 있게 도움
// 트러플에서는 web3 라이브러리 사용

// package.json 만들기
// npm init -y

// 트러플 설치
// npm i truffle

// 트러플 버전 확인
// npx truffle version

// 트러플 초기화 설치
// npx truffle init

// .gitkeep git사용자가 만든 빈 파일
// 빈 폴더를 유지(빈 폴더를 커밋한 것)

// solc 설치
// npm install solc

// 트러플 폴더들
// contracts : 스마트 컨트랙트 코드를 작성하는 폴더
// migrations : 배포 관련 코드를 컨트랙트별로 모으는 폴더
// test : 스마트 컨트랙트 테스트 코드 작성하는 폴더
// truffle-config.js : 트러플 환경 설정 파일 컴파일 하는 솔리디티 버전
// build : 솔리디티 코드를 컴파일한 내용을 가지고 있는 json 파일

// 스마트 컨트랙트 코드를 컴파일 명령어
// npx truffle compile

// 컴파일된 파일로 스마트 컨트랙트 배포
// 어떤 네트워크에 배포를 하는지 설명을 해줘야 함
// 설정 파일 truffle-config.js를 수정해서 네트워크 설정해주면 됨

// geth 네트워크를 실행 시켜주고
// migration 폴더에 배포 관련 코드를 작성한 파일을 만들기

// 배포 관련 코드를 작성한 파일의 이름은
// [번호][내용][컨트랙트 이름].js 형식으로 만들어줘야 함

// 배포 명령어
// npx truffle migration

// 배포한 컨트랙트 확인
// 트러플 콘솔창을 사용해서 명령어로 확인

// 트러플 콘솔창 명령어
// npx truffle console

// 배포한 컨트랙트 CA 확인
// HelloWorld.address

// 배포된 스마트 컨트랙트 콘솔창에서 실행
// HelloWorld.deployed().then(instance => hello = instance)

// hello 변수에 instance를 넣고
// hello.address CA 확인 가능
// hello.value.call() 상태변수 확인 가능

// setValue 함수를 호출 후 실행해서 트랜잭션을 발생시키고
// txpool 담겨잇는 트랜잭션을 처리해서 확인

// hello.setValue("asdasd")
