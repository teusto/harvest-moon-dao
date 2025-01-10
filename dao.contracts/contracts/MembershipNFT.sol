// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MembershipNFT is ERC721Enumerable, Ownable(msg.sender) {
    uint256 public nextTokenId = 1;

    constructor() ERC721("Community Harvest Membership", "DAOMOON") {}

    function mint(address to) external onlyOwner {
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function isMember(address account) external view returns (bool) {
        return balanceOf(account) > 0;
    }
}