// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NumericalStorage {
    uint256 public storedValue; // The value stored in the contract
    
    event ValueStored(uint256 indexed oldValue, uint256 indexed newValue); // Event triggered when value is stored

    function storeValue(uint256 newValue) public {
        emit ValueStored(storedValue, newValue);
        storedValue = newValue; // Update the stored value
    }
}
