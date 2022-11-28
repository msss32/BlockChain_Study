const helloworld = artifacts.require("HelloWorld");
// artifacts.require : 스마트 컨트랙트 계정 정보 읽어오는 코드
//                     매개변수 "HelloWorld"는 json 파일명

module.exports = function (deployer) {
  // 트러플이 제공해주는 배포를 위한 툴
  // deployer.deploy 함수의 매개변수로 읽어온 계약 정보(HelloWorld.json)
  deployer.deploy(helloworld);
};
