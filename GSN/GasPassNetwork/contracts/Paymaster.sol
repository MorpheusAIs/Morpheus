// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "@opengsn/contracts/src/BasePaymaster.sol";

/**
 * GasPassNetwork Paymaster
 * This Paymaster accepts any request similar to the AcceptEverythingPaymaster.
 * WARNING: Do NOT use this contract on the mainnet as it accepts anything, which
 * can be abused and result in draining the contract's funds.
 */
contract GasPassNetwork is BasePaymaster {
    
    event TransactionPaid(address indexed payer, uint256 gasUsed, uint256 timestamp);

    function versionPaymaster() external view override virtual returns (string memory) {
        return "3.0.0-beta.3+opengsn.gaspassnetwork.ipaymaster";
    }

    function _preRelayedCall(
        GsnTypes.RelayRequest calldata relayRequest,
        bytes calldata signature,
        bytes calldata approvalData,
        uint256 maxPossibleGas
    )
    internal
    override
    virtual
    returns (bytes memory context, bool revertOnRecipientRevert) {
        (relayRequest, signature, approvalData, maxPossibleGas);
        return ("", false);
    }

    function _postRelayedCall(
        bytes calldata context,
        bool success,
        uint256 gasUseWithoutPost,
        GsnTypes.RelayData calldata relayData
    )
    internal
    override
    virtual {
        (context, success, gasUseWithoutPost, relayData);
        emit TransactionPaid(msg.sender, gasUseWithoutPost, block.timestamp);
    }
}
