// 전에 만든 ERC20 토큰 편하게 만들어보기
// 오픈 제플린을 사용해서 토큰의 표준 인터페이스를 가져와 사용 가능
// ERC20을 우리가 직접 만들어봤는데..
// 설치를 받아서 편하게 사용해보자
// 표준 규격이 있어서 이미 만들어 놓은거를 가져다 사용하면 됨

// 오픈 제플린 설치
// npm i openzeppelin-solidity

// 트러플 초기화
// npx truffle init

// truffle-config 파일 수정

// contracts 폴더에 SeokToken.sol, EthSwap.sol 만들기
// SeokToken.sol, EthSwap.sol 작성

// migration 폴더에 2_deploy_EthSwap 만들고 작성

// 가나슈 실행
// npx ganache-cli  --chainId 7722 --networkId 7722

// 배포 진행
// npx truffle migration
