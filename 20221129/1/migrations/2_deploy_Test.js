const Test = artifacts.require("Token");

module.exports = function (deployer) {
  // Test의 배포가 되기 전에
  // constructor의 매개변수가 전달되어야 함
  // constructor의 매개변수를 전달하기 위해
  // deploy함수의 두번째 인자로 추가해주면 됨

  deployer.deploy(Test);
};
