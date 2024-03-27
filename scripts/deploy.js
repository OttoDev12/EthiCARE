const EthiCARE = artifacts.require("EthiCARE");

module.exports = async function (deployer) {
  deployer.deploy(EthiCARE);
};
