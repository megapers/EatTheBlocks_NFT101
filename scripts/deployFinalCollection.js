const { ethers } = require("hardhat");

async function main() {
  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldCollection");
  const superMarioWorld = await SuperMarioWorld.deploy(
    "SuperMarioWorldCollection",
    "SPRMC",
    "https://ipfs.io/ipfs/QmQCTvg4bGJYQupoYq8D31hvwB7RwumsM5wLvpE6j7b2yu/");

  await superMarioWorld.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint(10);// 1 Mario
  await superMarioWorld.mint(10);// 2 Luigi
  await superMarioWorld.mint(10);
  await superMarioWorld.mint(10);
  await superMarioWorld.mint(1);// 5 Mario Gold (rare)
  await superMarioWorld.mint(1);// 6 Luigi (rare)
  await superMarioWorld.mint(1);
  await superMarioWorld.mint(1);

  console.log("NFT successfully minted");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
