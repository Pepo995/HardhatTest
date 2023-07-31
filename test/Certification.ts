import { ethers } from "hardhat";
import { expect } from "chai";

describe("Certification", function () {
  it("should print contract adress", async function () {
    const Certification = await ethers.getContractFactory("Certification");
    const certification = await Certification.deploy("certification");

    expect(await certification.certification()).to.equal("certification");
  });

  describe("getCertification", function () {
    it("should get certification value", async function () {
      const Certification = await ethers.getContractFactory("Certification");
      const certification = await Certification.deploy("getting certification");

      const getTx = await certification.getCertification();

      expect(getTx).to.equal(await certification.certification());
    });
  });
});
