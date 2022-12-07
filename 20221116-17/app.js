// GO 설치
// Geth를 빌드하는데 필요한 언어
// go-ethereum 약자가 Geth
// Go 언어로 만들어진 이더리움 클라이언트 소프트웨어

// 권한이 필요한 명령어를 사용할 때 sudo

// sudo apt update
// sudo apt install golang
// sudo apt install -y libgmp3-dev tree make build-essential

// sudo add-apt-repository ppa:longsleep/golang-backports
// sudo apt update
// sudo apt install golang-go

// cd ./build/bin

// geth 버전 확인
// ./geth version

// 사용할때마다 경로까지 들어가서 실행하는게 번거롭기 때문에 환경변수 설정

// 현재 있는 폴더의 절대 경로 확인
// pwd

// 절대 경로 확인
// /dori/go-ethereum/build/bin

// vi ~/.bash_profile
// 수정 i키 눌러서 수정을 하고
// esc 눌러서 나온 후 wq! 저장 후 종료

// 작성 방법
// export PATH=$PATH:/mnt/c/Windows/system32/go-ethereum/build/bin
// source ~/.bash_profile
// bin 경로 말고 어디서든 geth 가능

// 가나쉬 설치
// 가나쉬 로컬에서 이더리움 블록체인 가상 네트워크를 생성할 수 있게 해줌
// 테스트 가능
// 가나쉬로 생성된 네트워크에서는
// 채굴 기능 X  P2P기능 X
// 블록 / 체인 / Tx와 관련된 기능만 존재
// 1Tx에 1개의 블록 생성
// 가나쉬로 트랜잭션을 발생시키면 실시간 확인이 가능해 테스트에 용이

// npm i -g ganache-cli
// npx ganache-cli

// 비트코인과 이더리움의 차이
// 이더리움의 가장 큰 특징 : 스마트 컨트랙트 구현 가능
// 비트코인은 트랜잭션을 만들면 계정의 소유자가
// 다른 계정의 소유자에게 10코인 전송

// 이더리움은 스마트 컨트랙트를 사용해서 기능 구현 가능
// A -> B -> C의 물건을 구매하는 상황
// B에게 A가 상품의 금액을 받아서 C에게 받은 사실을 알려줌
// 그러면 C가 상품을 A에게 주고 A가 상품을 확인하면
// 스마트 컨트랙트가 동작해서 B의 계정에서 C의 계정으로 코인을 보내줌
// 스마트 컨트랙트는 거래에 대해 조건에 충족한 계약 형태의 거래를 가능하게 해줌
// 코인을 받고 물건을 전달하는 거래 뿐만 아니라
// 조건에 따라 특정한 코드가 실행되서
// 거래를 할 수 있게끔 추가 조건들을 기능으로 구현 가능
// 솔리디티로 스마트 컨트랙트 작성 가능

// 스마트 컨트랙트 구현시 이더리움 EVM 사용
// Accout, Transaction의 내용도 조금 다름

// EVM
// 이더리움 가상 머신의 약자 (자바의 JVM과 비슷한 기능)
// 스마트 컨트랙트를 실행할 때 분산 네트워크 환경에서 모든 노드들이
// 스마트 컨트랙트에 의해 특정한 결과를 얻어야할 때
// 솔리디티 언어로 작성한 코드를 EVM을 통해 실행시킴

// 1. 솔리디티로 컨트랙트 코드 작성
// 2. 바이트 코드로 컴파일
// 3. EVM에서 컴파일된 바이트 코드 실행

// 이더리움 스마트 컨트랙트라는 프로그램은
// EVM이라는 가상 컴퓨터라는 플랫폼이 있기 때문에 실행이 가능함
// 우리가 만든 규칙에 따라서 스마트 컨트랙트 코드를 실행하고
// 그 결과를 업데이트 해줌

// Account
// 이더리움 네트워크에는 EOA, CA라는 두 종류의 계정 존재

// EOA는 외부 소유 계정(Externally Owned Account)
// 개인키로 제어되는 계정으로 코드를 저장하지 않음
// 스마트 컨트랙트에 대한 접근을 제어
// EOA로 트랜잭션을 시작 가능
// EOA는 다른 EOA 또는 CA에 메시지를 보낼 수 있고(ETH만 전송가능)
// 이 동작은 개인키를 사용해서 트랜잭션을 만들고 서명함
// EOA에서 CA에 보내는 메시지는 CA에 저장된 코드를 활성화 시킴
// 명령 EOA가 전송한 트랜잭션부터 보면 됨

// CA는 계약 계정(Contract Account)
// 스마트 컨트랙트의 로직에서 제어를 하고 코드 저장 가능(코드의 해시)
// 개인키가 없고 스스로 트랜잭션을 시작 불가
// 외부에서 트랜잭션에 대한 응답을 통해 트랜잭션을 실행 가능

// Transaction
// 이더리움 네트워크에서 트랜잭션은
// EOA에 의해서 서명되고
// 속성
// from : 보내는 계정
// to : 받는 계정
// nonce : 보내는 계정이 발생시킨 총 트랜잭션 횟수
// value : 보내는 금액
// gasLimit : 트랜잭션이 사용할 수 있는 가스의 최대치
// gasPrice : 보내는 사람이 지불할 가스 가격
// data : 트랜잭션에 담을 데이터
// 비트코인 네트워크와 다른점
// 가스비(gas fee) 개념
// 가스는 이더리움 네트워크에서 트랜잭션을 생성할 때 보내는 사람이 부담하는 수수료

// Web3 라이브러리를 사용하면 노드간의 통신을 할 때
// RPC : 분산 네트워크를 프로그래밍으로 쉽게 만들지에 대한 고민에서 시작

// 일반적인 통신 패턴은
// 서버ON -> 클라이언트에서 서버에 데이터나 행동 요청
// 서버는 그 데이터를 받고 요청받은 응답을 반환
// 클라이언트는 서버로부터 응답 값을 받음
// http socket

// RPC는 원격 프로시저 호출 별도의 원격 제어를 위한 코딩 없이
// 다른 주소 공간에서 함수나 프로시저를 실행할 수 있게하는 프로세스 간 통신 기술
// 원격 프로시저를 호출하면 프로그래머가
// 함수가 실행 프로그램의 로컬 위치에 있든 원격 위치에 있든
// 동일한 코드를 이용할 수 있음

// 함수는 input에 대한 output의 발생을 목적으로 하고
// 프로시저는 결과보다는 명령 단위가 수행하는 절차를 목적으로 함

// 가나쉬에서 curl을 사용해서 요청을 보내고 확인하는 법

// curl(client URL)
// 클라이언트에서 소스코드를 손쉽게 웹브라우저처럼 활용할 수 있게 해주는 기술
// 서버통신 할 수 있는 커맨드 명령어 툴(웹개발에서 많이 사용되는 기술)
// 장점 : 다양한 프로토콜 지원

// DICT, FILE, FTP, FTPS, Gopher, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS 등등
// url을 가지고 할 수 있는건 웬만하면 모두 가능
// HTTP 프로토콜을 사용해서 페이지의 데이터를 가져온다거나 파일 다운 받기 가능
// curl [-option] 페이지 주소 쓰면 페이지의 소스가 화면에 출력됨

// npx ganache-cli로 가나쉬 실행
// curl -X POST -H "content-type:application/json" --data "{id: seok}" http://localhost:3000

// -X 요청 메소드
// -H 요청 헤더 내용
// -data, -d 요청 바디 내용 작성

// 가나쉬로 생성한 이더리움 클라이언트에
// curl을 사용해서 RPC 요청을 보내보기

// request body의 내용
// {
// "id" : 0915 // 체인의 아이디, 있어도 되고 없어도 됨
// "jsonrpc" : "2.0" // json으로 인코딩한 프로시저 호출 - 필수
// "method" : "eth_accounts", // 이더리움 클라이언트에 구성되어 있는 메소드 명 - 필수
// "params" : [] // 메소드의 인자 값
// }

// 계정을 가져오기
// curl -X POST -H "Content-type : application/json" --data '{"jsonrpc" : "2.0", "method" : "eth_accounts", "params" : [] }' http://localhost:8545

// wsl에 node 설치하고 가나쉬 설치

// sudo apt update
// sudo apt install nodejs
// nodejs -v
// sudo apt install npm

// npm install -g ganache-cli
// npx ganache-cli

// 잔액 조회
// 잔액을 조회하는 함수이름은 "eth_getBalance"
// "eth_getBalance" 함수는 params 매개변수 2개를 전달(1. 계정의 주소, 2. 몇 번째 블록인지)

// curl -X POST -H "Content-type : application/json" --data '{"jsonrpc" : "2.0", "method" : "eth_getBalance", "params" : ["0xFA3b43d84E841E5909fb652a187A81da14f4761C", "latest"] }' http://localhost:8545
// 이더리움 클라이언트에게 RPC를 요청 보내는 방법

// Web3 라이브러리
// Web3.js라는 라이브러리를 제공받아서 이더리움 네트워크와
// 상호작용을 할 수 있는 다양한 함수를 제공받아 사용 가능
// 위에서 해본 RPC 요청을 쉽게 보낼 수 있게 해주는 라이브러리

// npm init -y
// npm i -D jest
// npm i web3

// package.json
// "test" : "jest"로 변경
// jest.config.js 파일 생성

// ethereumjs-tx 라이브러리 설치
//
// npm i ethereumjs-tx
