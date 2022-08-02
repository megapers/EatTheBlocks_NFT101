const { ethers } = require("hardhat");

async function main() {
  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldOZ");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorldOZ", "SPRMOZ");

  await superMarioWorld.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint("https://ipfs.io/ipfs/QmWZjtuJN47aVcQfqnkRXpWGqyerjdGejqhe4m2Nqt2EGn");

  console.log("NFT successfully minted");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
