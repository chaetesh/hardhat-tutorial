const { ethers, run, network } = require("hardhat"); // getting ethers from hardhat instead of etherjs as compiled files in artifacts, hardhat will know by default

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying....");
  const SimpleStorage = await SimpleStorageFactory.deploy();
  await SimpleStorage.deployed();
  console.log(`Deployed Contract to ${SimpleStorage.address}`);

  console.log(network.config);

  // Waiting for the block conformations before verifying the contract
  // await SimpleStorage.deployTransaction.wait(6);
  // await verify(SimpleStorage.address, []);

  const favNum = await SimpleStorage.retrieve();
  console.log(`Fav Number: ${favNum}`);

  // update the value
  const transactionResponse = await SimpleStorage.store(50);
  await transactionResponse.wait(1);
  const updatedValue = await SimpleStorage.retrieve();
  console.log(`Fav Number: ${updatedValue}`);
}

async function verify(contractAddress, args) {
  console.log("Verifying Contract....");

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    console.log(e);
  }
}

main();
