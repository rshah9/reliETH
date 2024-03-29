/* global artifacts web3 */

const Relieth = artifacts.require("Relieth");

module.exports = async (deployer) => {
  await deployer.deploy(Relieth);
  const relieth = await Relieth.deployed();

  await relieth.createDisaster(
    "Hurricane Dorian",
    "The fourth named hurricane of the 2019 season, Hurricane Dorian has tied the record for the most powerful hurricane to make landfall in the Bahamas. Donate to support the cause.",
    "Alabama",
    web3.utils.randomHex(20)
  );

  await relieth.createDisaster(
    "Amazon Rainforest Fire",
    "Brazil’s Amazon rainforest fires have caused global concern. And yet it could get even worse as the country’s fire season is just getting started. Donate to support the cause.",
    "Brazil",
    web3.utils.randomHex(20)
  );
};
