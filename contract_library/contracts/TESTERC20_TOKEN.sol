pragma solidity ^0.8.4;

// SPDX-License-Identifier: Unlicensed

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestErc20Token is ERC20 {
    constructor() ERC20("Darwin Drop Test Token", "DDTT") {
        _mint(msg.sender, 25 * 10**decimals());
    }
}