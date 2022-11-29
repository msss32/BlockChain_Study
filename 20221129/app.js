// ERC-20 스마트 컨트랙트 토큰 발행

// ERC-20은 이더리움 네트워크에서 표준 토큰
// 정해진 규격대로 만들어줘야 함

// 규격대로 만들어주면 토큰을 생성 가능
// 변수명도 정해진대로 만들어줘야 함

// 토큰의 이름 name
// 토큰의 이름 symbol이라는 변수에 담긴 내용은 토큰의 단위 ETH
// balances 잔액의 내용이 들어있음 (UTXO 같은 느낌)

// balance {
//     address: String;
//     amount: Number;
// }

// token {
//     name: String;
//     symbol: String;
//     balances : [],
// }

// balances = [
//   {
//     address: "주소",
//     amount: "잔액",
//   },
//   {
//     address: "주소",
//     amount: "잔액",
//   },
//   {
//     address: "주소",
//     amount: "잔액",
//   },
// ];

// 솔리디티의 address라는 데이터 타입
// 20byte짜리 데이터 타입이고
// 계정이나 주소가 40글자로 만들어진 string 타입

// mapping
// mapping(string => uint256)
// mapping 데이터 타입은 우리가 JS에서 사용한 객체라고 보면 됨
// string이 속성명 uint256속성값이 됨

// mapping(string => uint256) 표현을 하면
// {
//     "name" : 50
// }

// 선언해서 사용을 해보면
// mapping(address => uint256) public balance;
// 데이터의 타입은 mapping(address => uint256) 객체 형식
// public으로 공개
// 변수명은 balance
// balance를 호출하면
// {
//     "주소" : 1000,
//     "주소" : 1000,
//     "주소" : 1000,
//     "주소" : 1000,
// }

// 컨트랙트에서 constructor() 함수에 매개변수를 추가해서 인스턴스 생성 가능
// 배포하기 전에 매개변수를 전달해줘야 인스턴스 생성 가능

// 배포를 하고나서 트러플 콘솔창에
// 배포한 트랜잭션 해쉬를 조회하면
// web3.eth.getTransaction("0xb2292cc19b4f3c46fb1d824aae520d4c906662d7ec7b611588de101a7e5c5dd6")
// input값에 우리가 전달한 매개변수 50이
// 0을 기준으로 구분값을 줌
// 50의 인자값을 표시
// 0000000000000000000000000000000000000000000000000000000000000032

// 네트워크에서 컨트랙트를 실행한 사람의 주소를 가져올 수 있는 방법
// msg.sender : 실행시킨 사람의 주소 네트워크 안에서 사용할 수 있는 변수

// test2.sol 작성 후 컴파일 -> 2_deploy_Test.js의 내용 수정 후 Test2로
// 배포진행하고 트러플 콘솔창
// Test2.deployed().then(its => it = its);
// it.owner()로 조회하면 배포한 사람의 주소가 뜸

// 응용을 해서 토큰 발행해보기
// Token.sol 파일 만들고 2_deploy_Test 파일 수정
// deploy의 매개변수 두번째 지우고

// 배포진행 후
// Token.deployed().then(its => it = its);
// 인스턴스 조회하고
// it.balanceOf("코인베이스 계정") // 총 발행량 확인 가능
// it.transfer("0xe1B76501B054741Fc2f0ee1e5EA089e10E96f897", 100)
// 두번째 계정에 100토큰 보내면
// it.balanceOf("두번째 계정") - 받은 토큰 확인 가능

// Available Accounts
// ==================
// (0) 0xC26F5bAFE6c87a5E59E7EDE0e742af2E1DaC9a27 (100 ETH)
// (1) 0xFc75195ac009e285289E9c3F8A13f0F5F9EE5F4F (100 ETH)
// (2) 0x2c540CDdC78AE9f2C9B1feB0Fd59417B127061f1 (100 ETH)
// (3) 0xC7475a1E5Cc70A857e46f09D01cc811b904076ef (100 ETH)
// (4) 0x80830B9D9478e629B5E444953dFbEdC5695D65C0 (100 ETH)
// (5) 0x7080a4cEf82af71601EAb8ab629e82D981f2B8C4 (100 ETH)
// (6) 0xdF68CF96098F7180A3BA2D40c64B8816df9a332c (100 ETH)
// (7) 0x7A647772f45Bc85B95Bd11b4e2B468ae22C8d20a (100 ETH)
// (8) 0x169d40F9A2f0F685B191c52a147929B3DbBdc82e (100 ETH)
// (9) 0x662487213041aF62aa4E4d27c7ECf875061daBB5 (100 ETH)

// Private Keys
// ==================
// (0) 0x5225040fb1e3941433b32be59ab98921a6364e0c76a59d1bcd0b97d3cae91b66
// (1) 0x193e5df793e3e3824fdb4357b231ec463cbe880b720611089ef74f139fa9dc93
// (2) 0xf7f47e8111fb1f03afda57a40bd6ae4221c8cd3b149ecdb4d49147397d562773
// (3) 0x15ecfb1cbd641243a727d7e60d9a50da8c9b19519d7a659d043ccbe758de6af1
// (4) 0x072c546a90d2cd4f4978cfbf9e346988b506b639954add30108d7d7c51852a1a
// (5) 0x6ec8788f36c2e8a8d6b242504af1734419714d336ccdb6a7d96a12711028241a
// (6) 0x2407360659d2d096b2072b9db617ef8aa33a656665e27e9ebfd6aa48b7226000
// (7) 0xb0b8ab9c507ee546e43d5f53545bdfa7866d21bcccf38483210c7f77b534201c
// (8) 0x20df4d6dc9cd1d7c07630bcf2657682dc78aff8f002746ffec5f58a6ce18d5e2
// (9) 0x9ed553effa9769b18d6523b0e4a7ccb662b0ab2dcdc8f5585c609a47ee32e49e
