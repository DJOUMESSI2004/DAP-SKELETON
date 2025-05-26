const { expect } = require("chai");
const { ethers, network } = require("hardhat");

describe("Voting contract", function () {
  let Voting, voting, owner, user, other;

  before(async () => {
    [owner, user, other] = await ethers.getSigners();
    Voting = await ethers.getContractFactory("Voting");
  });

  beforeEach(async () => {
    voting = await Voting.deploy();
    // await voting.deployed();
    await voting.createPoll("Tea?", ["Yes", "No"], 3600);
  });

  it("creates a poll", async () => {
    const poll = await voting.polls(0);
    expect(poll.question).to.equal("Tea?");
  });

  it("rejects double vote", async () => {
    await voting.connect(user).vote(0, 0);

    await expect(
      voting.connect(user).vote(0, 1)
    ).to.be.revertedWith("already voted");
  });

  it("rejects vote after deadline", async () => {
    // Avance le temps de 4000 secondes
    await network.provider.send("evm_increaseTime", [4000]);
    await network.provider.send("evm_mine");

    await expect(
      voting.connect(other).vote(0, 0)
    ).to.be.revertedWith("closed");
  });
});
