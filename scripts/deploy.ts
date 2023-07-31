// scripts/deploy.ts
import { ethers } from "hardhat";

async function main() {
  const MyCertification = await ethers.getContractFactory("Certification");
  const myCertification = await MyCertification.deploy(
    "My first certification"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
