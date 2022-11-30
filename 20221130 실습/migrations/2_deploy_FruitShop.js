const FruitShop = artifacts.require("FruitShop");

module.exports = function (deployer) {
  deployer.deploy(FruitShop);
};
