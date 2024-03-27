const EthiCARE = artifacts.require("EthiCARE");

contract("EthiCARE", (accounts) => {
  it("should deploy EthiCARE contract", async () => {
    const ethiCAREInstance = await EthiCARE.deployed();
    assert(ethiCAREInstance.address !== "");
  });
});
