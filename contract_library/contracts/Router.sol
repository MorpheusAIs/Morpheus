// SPDX-License-Identifier: MIT

//TODO: Remove Network Nations specific code and replace with Morpheus specific code
//TODO: Migrate to Morpheus speocidcations
//TODO: Add security measures
//TODO: calculate and distribute fees based on the "4Cs" system (see Morpheus specifications)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract NetworkNationSplit is UUPSUpgradeable, OwnableUpgradeable {
    // Store the network admin address
    address public networkAdmin;

    // Store the fee distribution for each all addresses
    mapping(address => uint256) public feeDistribution; 
    
    //TODO: Update security based on Morpheus specs
    modifier only_admin {
        require(msg.sender == networkAdmin, "Only the network admin can perform this action.");
        _;
    }

    function initialize(address _admin) public initializer {
        __Context_init_unchained();
        __Ownable_init_unchained();
        __NetworkNationSplit_init_unchained(_admin);
        __UUPSUpgradeable_init_unchained();
    }

    function __NetworkNationSplit_init_unchained(address _admin) private onlyInitializing {
        networkAdmin = _admin;
    }

    // Function to set the network admin address
    function setNetworkAdmin(address _networkAdmin) public only_admin {
        networkAdmin = _networkAdmin;
    }

    // Function to set the fee distribution for an address
    //TODO: replace this function with a function that sets the fee distribution for multiple addresses at once
    function setFeeDistribution(address _address, uint256 _percentage) public only_admin {
        feeDistribution[_address] = _percentage;
    }

    function collectFee(address[] memory partners, uint256[] memory percentages) public payable {
        require(msg.value > 0, "not enough tokens sent");
        // Ensure that the number of partners matches the number of percentages
        require(partners.length == percentages.length, "The number of partners and the number of percentages must match.");

        // Iterate through the partners and transfer the appropriate percentage of the fee
        for (uint256 i = 0; i < partners.length; i++) {
            require(feeDistribution[partners[i]] == percentages[i], "The percentage for this partner does not match the value in the fee distribution.");

            payable(partners[i]).transfer(msg.value * percentages[i] / sum(percentages));
        }
    }

    function sum(uint256[] memory percentages) private pure returns (uint256) {
        uint256 result = 0;
        for (uint256 i = 0; i < percentages.length; i++) {
            result += percentages[i];
        }
        return result;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {
    }
}