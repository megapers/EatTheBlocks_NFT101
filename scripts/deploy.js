const { ethers } = require("hardhat");

async function main() {
  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldERC1155");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorldERC1155", "SPRME");

  await superMarioWorld.deployed();
  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint(10, "https://ipfs.io/ipfs/QmbaFBpFBDAxw8JpBsxMpVVtTFSM6Yv4xYQDPAyqXz7uS3");

  console.log("NFT successfully minted");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
