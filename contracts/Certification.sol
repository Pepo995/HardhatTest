// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Certification {
    string public certification;

    constructor(string memory _certification) {
        certification = _certification;
    }

    function setCertification(string memory _certification) public {
        certification = _certification;
        console.log(certification);
    }

    function getCertification() public view returns (string memory) {
        return certification;
    }
}
