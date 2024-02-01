// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@opengsn/contracts/src/ERC2771Recipient.sol";

/**
 * GasPassRecipient contract that inherits from Open GSN's ERC2771Recipient.
 * This contract acts as the recipient of relayed calls.
 */
contract GasPassRecipient is ERC2771Recipient {
    event RelayedCallReceived(address indexed from, uint256 value, bytes data, uint256 gas);

    function versionRecipient() external pure returns (string memory) {
        return "3.0.0-beta.3+opengsn.gaspassrecipient.erc2771recipient";
    }

    constructor(address forwarder) {
        _setTrustedForwarder(forwarder);
    }

    function onERC2771Received(
        address from,
        uint256 value,
        bytes calldata data,
        uint256 gas
    )
        external
        returns (bytes memory)
    {
        emit RelayedCallReceived(from, value, data, gas);
        return new bytes(0);
    }
}
