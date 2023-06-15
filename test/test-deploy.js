const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", () => {
  let simpleStorage, simpleStorageFactory;

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with favoirate number 5", async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "5";
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Should Update when we call Store", async () => {
    const expectedValue = "100";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);

    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Should Update people Structure", async () => {
    const expectedValue = "30";
    const transactionResponse = await simpleStorage.addPerson(
      "aetesh",
      expectedValue
    );
    await transactionResponse.wait(1);

    const currentValue = await simpleStorage.retrieveName("aetesh");
    assert.equal(currentValue.toString(), expectedValue);
  });
});
