// 지갑 구성
// 비밀키, 공개키, 서명
// 지갑 주소 / 계정 만들기

// 비밀키랑 공개와 서명을 이용한 신원 인증 방식은 분산원장이라는 이해가 필요

// 분산원장 : 복제 공유 동기화된 데이터에 대한 합의 기술

// 금융 쪽에서는 장부를 가지고 모든 거래내역을 기록하는 방식
// 은행이라는 금융기관은 장부에 거래를 의존할 수 밖에 없는 중앙 집권화 방식

// 분산원장은 이것과 반대로 거래에 참여하는 모든 참여자들이 장부를 가지고 있고
// 거래가 발생했을 때 해당 거래내역을 각자의 장부에 기록하는 방식
// 중앙에서만 가지고 있는게 아니라 모든 장부를 가지고 있음

// 신원 인증 방식 분산원장 기술로 비밀키, 공개키, 서명

// 암호화 방식

// 대칭형 : 암호화 복호화할 때 사용하는 키가 동일한 경우 1개를 사용함
//         암호화한 사람과 수신하는 사람 또한 같은 키를 가지고 있어야 함
// 비대칭형 : 사용하는 키와 복호화할 때 사용하는 키가 다름
//           다른 사람에게 절대 공개 X (비밀키) 비밀키를 토대로 만든 공개키가 한쌍
//           결론은 키를 2개 사용

// 공개키 : 사람들에게 공개할 키(정보 암호화 가능)
// 비밀키 : 사용자만 알아야하는 키(암호를 풀 수 있는 키)

// 대칭형
// 나 -> 대칭형으로 암호화 -> 암호문
// 너 -> 암호문 -> 대칭키로 복호화 -> 원본
// 대칭형의 형태는 암호문을 대칭키를 가지고 있는 사람은 누구나 전달 가능

// 비대칭형 키의 경우는 암호화할 때 공개키로 암호화하고
// 나 -> 원본 -> 너의 공개키로 암호화 -> 암호문
// 너 -> 암호문 -> 너의 비밀키로 복호화 -> 원본

// 비밀키의 소유자가 비밀키로 데이터를 암호화하고 공개키와 함께 전달
// 공개키와 데이터를 획득한 사람은 공개키를 이용해서 복호화가 가능
// 위험성이 있지만 이 방법을 사용하는 이유는
// 데이터의 보호 목적보다는 공개키 데이터 제공한 사람의 신원을 보장해주는 때문
// 암호화된 데이터가 공개키로 복호화 된다는 것이 공개키와 쌍으로 이루는 비밀키에 의해서
// 암호화가 되었다는 뜻이기 때문에 데이터 제공자가 맞는 확인할 수 있어 신원이 보장됨
// 이 방법이 공인 인증 체계의 기본 바탕인 전자서명

// 1. 암호화하고 싶은 데이터를 SHA256 방식으로 해싱하고
// 2. 개인키를 사용해서 해시값으로 서명을 만들고
// 3. 서명이랑 공개키를 제 3자에게 전달
// 4. 제 3자는 공개키를 이용해서 서명을 복호화
// 5. 복호화한 해시값과 데이터를 해싱해서 나온 값이 맞는지 확인

// 개인키 생성 테스트

// 실제 블록체인 네트워크 상에 개인키를 생성하는 방식은
// 256자리의 2진수로 랜덤값을 64자리의 16진수 값으로 만든 것이 개인키

// 개인키 작성

import { randomBytes } from "crypto";
import elliptic from "elliptic";
import { SHA256 } from "crypto-js";

// elliptic 인스턴스 생성
const ec = new elliptic.ec("secp256k1");

describe("지갑 만들기", () => {
  let privateKey: string;
  let publicKey: string;
  let signature: elliptic.ec.Signature;

  it("개인키 생성", () => {
    // 256자리의 2진수 랜덤 값을 만들고 toString("hex")를 사용해서
    // 16진수로 나타내줌
    privateKey = randomBytes(32).toString("hex");
    console.log("개인키 : " + privateKey);
    console.log("길이 : " + privateKey.length);
  });

  it("공개키 생성", () => {
    const keyPair = ec.keyFromPrivate(privateKey);
    publicKey = keyPair.getPublic().encode("hex", true);
    console.log("공개키 : ", publicKey);
    console.log("길이 : " + publicKey.length);
  });

  it("서명 만들기", () => {
    // 개인키랑 hash 값이 필요해서 SHA256 함수 사용
    const keyPair = ec.keyFromPrivate(privateKey);
    const hash = SHA256("transaction data").toString();
    signature = keyPair.sign(hash, "hex");
    console.log("서명 : ", signature);
  });

  // 마지막 검증하기
  // 해시값, 서명, 공개키
  // 공개키를 사용해서 서명을 복호화하고 나온 값이
  // 해시와 동일하면 서명은 공개키를 생성한 소유자에 의해 만들어진 서명인 것이 증명됨

  it("검증하기", () => {
    // 필요한 값 : 서명, 공개키, hash
    const hash = SHA256("transaction data").toString();
    const verify = ec.verify(
      hash,
      signature,
      ec.keyFromPublic(publicKey, "hex")
    );
    console.log(verify);
  });

  // 계정 만들기
  it("지갑 주소", () => {
    // 버퍼는 raw바이너리 데이터를 저장할 수 있는 특수한 유형의 객체
    // 버퍼는 일반적으로 PC에 할당된 메모리 청크 RAM을 나타내고
    // 버퍼의 크기를 설정하면 변경할 수 없음

    // Buffer.from은 버퍼를 만드는 방법
    // string 배열을 인수로 받고 넘겨주는 값에 따라 약간씩 다른 방법으로 만듦
    const buffer = Buffer.from(publicKey);
    // 이더리움 방식으로 계정을 만드는 방법은 만들어놓은 공개키에서
    // 앞의 24자리를 잘라내고 40자리만큼 남겨줌
    // slice(26)을 넣은 이유가 elliptic을 이용해서 만든
    // 공개키의 앞자리 02 혹은 03이 붙어서 이 값을 제거하기 위함
    const address = buffer.slice(26).toString();
    console.log("계정 : " + address);
  });
  // 동일한 내용을 "transaction data" 값으로 해시값을 만들어서 검증에 사용한 것이기 때문에
  // 검증에 성공한 것 true 반환

  // 개인키랑 페어를 이루는 공개키 만들기
  // elliptic라는 라이브러리를 사용
  // 실제 개인키를 사용해서 공개키를 만드는 알고리즘에 타원곡선 함수라는 수학적 개념 포함
  // 타원 곡선 알고리즘을 직접 구현하는 건 어려우니까
  // 개인키를 사용해서 공개키를 쉽게 만들 수 있게 함수를 제공해주는 라이브러리를 사용
  // 설치 명령어
  // npm i elliptic
  // npm i -D @types/elliptic

  // 블록체인 지갑의 서버
  // 지갑 프로그램(클라이언트) -> 지갑 서버(서버) -> 블록체인 http server -> 블록체인 P2P 네트워크
});
