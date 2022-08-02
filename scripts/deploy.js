const { ethers } = require("hardhat");

async function main() {
  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorld");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorld", "SPRM");

  await superMarioWorld.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint("https://ipfs.io/ipfs/QmfLvZga3GCC5vqXcRmGYshUmnyfzPsr28GJT7WkxX62k7");

  console.log("NFT successfully minted");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
