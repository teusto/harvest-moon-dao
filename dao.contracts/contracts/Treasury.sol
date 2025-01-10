// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract Treasury is TimelockController {
    // Events to track important contract activities
    event FundsReceived(address indexed sender, uint256 amount);

    uint256 public immutable MINIMUM_DELAY;

    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address admin
    ) TimelockController(minDelay, proposers, executors, admin) {
        require(minDelay >= 1 days, "Delay must be at least 24 hours");
        MINIMUM_DELAY = minDelay;
    }

    /**
     * @dev View function to get contract's ETH balance
     * @return The current balance of the contract in wei
     */
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
