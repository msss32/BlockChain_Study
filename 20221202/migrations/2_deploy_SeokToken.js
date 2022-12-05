const SeokToken = artifacts.require("SeokToken");

module.exports = function (deployer) {
  deployer.deploy(SeokToken, "SeokToken", "STK", 5555);
};
