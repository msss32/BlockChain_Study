const Web3 = require("web3");
const ethTx = require("ethereumjs-tx").Transaction;

describe("web3 test", () => {
  let web3;
  let accounts; // 가나쉬에 있는 주소
  let sender; // 보내는 사람
  let received; // 받는 사람
  it("web3 연결", () => {
    // http://127.0.0.1:8545 경로의 가나쉬에서 실행되고 있는 이더리움 클라이언트로
    // we3 인스턴스 생성
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  });

  // 단위 변경
  it("ETH 단위 변경", async () => {
    console.log(web3.utils.toWei("1", "gwei")); // Gwei 단위를 wei단위로 변경
    console.log(web3.utils.toWei("1", "ether")); // Ether 단위를 wei단위로 변경
  });

  // 최신 블록의 높이
  it("최신 블록 높이", async () => {
    const latestBlock = await web3.eth.getBlockNumber();
    console.log(latestBlock);
  });

  // 전체 account 가져오기
  it("전체 주소", async () => {
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
  });

  // 잔액 조회
  it("계정 잔액조회", async () => {
    const balance = await web3.eth.getBalance(accounts[1]);
    console.log("내 잔액 : " + balance);
    // 웨이(wei) : 이더리움의 가장 작은 단위
    // 1이더는 10^18과 같음

    // 이더리움 단위
    // wei : 1
    // GWEI : 10 ** 9 wei
    // Ether : 10 ** 18 wei
    // Gas : 송금과 계약을 할 때 수수료로 Ether를 지불해야 함
  });

  // 트랜잭션 횟수 조회
  it("트랜잭션 횟수 조회", async () => {
    const txCount = await web3.eth.getTransactionCount(accounts[1]);
    console.log(txCount);
  });
  // 트랜잭션 실행하기
  // 트랜잭션의 내용
  // nonce : 보내는 계정이 발생시킨 총 트랜잭션 횟수
  // from : 보내는 사람
  // to : 받는 사람
  // value : 보내는 금액(wei)
  // gasLimit : 해당 트랜잭션이 사용할 수 있는 가스의 최대
  // gasPrice : 보내는 사람이 지불하는 가스 가격
  // data : 스마트 컨트랙트와 관련된 데이터

  it("트랜잭션 실행", async () => {
    // 보내는 사람의 트랜잭션 횟수
    const txCount = await web3.eth.getTransactionCount(accounts[1]);
    // 보내는 사람의 개인키
    const privateKey = Buffer.from(
      "3e5877b335c098074fcdbc15d8bcf88c6a91585c32573aee3902fbeb09c28251",
      "hex"
    );
    // 트랜잭션 내용 객체
    const txObject = {
      // 보내는 사람의 트랜잭션 횟수를 Hex 변환
      nonce: web3.utils.toHex(txCount),
      // 보내는 사람의 계정
      from: accounts[1],
      // 받는 사람의 계정
      to: accounts[2],
      // 보낼 금액(단위 : wei)
      value: web3.utils.toHex(web3.utils.toWei("1", "ether")),
      // 10 ** 18 toHex
      // 트랜잭션에서 사용할 가스 최대치
      gasLimit: web3.utils.toHex(6431200),
      // 보내는 사람이 지불할 가스 가격
      gasPrice: web3.utils.toHex(web3.utils.toWei("0.00001", "ether")),
      data: web3.utils.toHex(""),
    };
    const tx = new ethTx(txObject);
    tx.sign(privateKey); // sign이라는 함수가 tx객체에 서명 값을 추가해줌
    console.log(tx);
    // serialized 함수를 사용해서 내용을 정렬하고
    // 객체의 데이터 스트림 생성
    // 객체에 저장된 데이터를 쓰기 위해 연속적인 데이터를 변환한 것
    const serializedTx = tx.serialize();
    // sendSignedTransaction 함수로 트랜잭션을 전송
    const TxObject = await web3.eth.sendSignedTransaction(
      "0x" + serializedTx.toString("hex")
    );
    console.log(TxObject);
  });
  // it("트랜잭션 횟수 조회", async () => {
  //   console.log();
  // });
});
