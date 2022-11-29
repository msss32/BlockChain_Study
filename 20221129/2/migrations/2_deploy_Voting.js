const Vote = artifacts.require("Voting");

module.exports = function (deployer) {
  deployer.deploy(Vote, ["지니", "석", "종화"]);
};
