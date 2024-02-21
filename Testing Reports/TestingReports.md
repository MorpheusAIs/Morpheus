
# Findings



[high]
### ETH Sent to a Potentially Arbitrary Address

Within [`L1Sender.sol`](/<null>/contracts/L1Sender.sol), there are multiple instance of ETH being sent to an arbitrary address. For instance:
* To the `ILayerZeroEndpoint` variable.
* To the `config` variable.

Consider using a whitelist of addresses to send ETH to, or ensure you send ETH to the desired address.


[note]
### Possible Presence of Bugs in Target Solidity Version


 * 0.8.20:
	 * Bugs:
		 * [VerbatimInvalidDeduplication](https://blog.soliditylang.org/2023/11/08/verbatim-invalid-deduplication-bug/)
		 * [FullInlinerNonExpressionSplitArgumentEvaluationOrder](https://blog.soliditylang.org/2023/07/19/full-inliner-non-expression-split-argument-evaluation-order-bug/)
		 * [MissingSideEffectsOnSelectorAccess](https://blog.soliditylang.org/2023/07/19/missing-side-effects-on-selector-access-bug/)

 * 0.8.21:
	 * Bugs:
		 * [VerbatimInvalidDeduplication](https://blog.soliditylang.org/2023/11/08/verbatim-invalid-deduplication-bug/)

 * 0.8.22:
	 * Bugs:
		 * [VerbatimInvalidDeduplication](https://blog.soliditylang.org/2023/11/08/verbatim-invalid-deduplication-bug/)


Please ensure that the codebase is not impacted by any of the enumerated Solidity bugs.


[ethtrust]
### Multiple Possible Violations of 'No Conflicting Inheritance' EEA Ethtrust Security Level [S] Requirement

Throughout the [codebase]() there are multiple possible violations. For instance:
* The function [`supportsInterface`](/<null>/contracts/L2TokenReceiver.sol:26:28) within the contract `L2TokenReceiver` in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) file.
* The function [`supportsInterface`](/<null>/contracts/MOR.sol:14:19) within the contract `MOR` in [`MOR.sol`](/<null>/contracts/MOR.sol) file.
* The function [`cap`](/<null>/contracts/MOR.sol:21:23) within the contract `MOR` in [`MOR.sol`](/<null>/contracts/MOR.sol) file.
* The function [`burn`](/<null>/contracts/MOR.sol:29:31) within the contract `MOR` in [`MOR.sol`](/<null>/contracts/MOR.sol) file.
* The function [`_mint`](/<null>/contracts/MOR.sol:33:35) within the contract `MOR` in [`MOR.sol`](/<null>/contracts/MOR.sol) file.

Consider solving conflicting inheritance issues.


[note]
### Constants Not Using `UPPER_CASE` Format

In [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) there are constants not using `UPPER_CASE` format. For instance:
* The `router` constant declared on [line 14](/<null>/contracts/L2TokenReceiver.sol:14) 
* The `nonfungiblePositionManager` constant declared on [line 15](/<null>/contracts/L2TokenReceiver.sol:15) 

According to the [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html#constants), constants should be named with all capital letters with underscores separating words. For better readability, consider following this convention.


[note]
### Variables Are Initialized to Their Default Values

Within [`Distribution.sol`](/<null>/contracts/Distribution.sol), some variables are being initialized to their default values. For instance:
* The [`i`](/<null>/contracts/Distribution.sol:57) variable.
* The [`i`](/<null>/contracts/Distribution.sol:126) variable.

To avoid wasting gas uselessly, consider not initializing the variables to the same value that they have by default when they are being declared.


[low]
### Floating Pragma

Throughout the [codebase]() there are multiple floating pragma directives. For instance:
* The file [`Distribution.sol`](/<null>/contracts/Distribution.sol) has the [`solidity ^0.8.20`](/<null>/contracts/Distribution.sol:2) floating pragma directive.
* The file [`L1Sender.sol`](/<null>/contracts/L1Sender.sol) has the [`solidity ^0.8.20`](/<null>/contracts/L1Sender.sol:2) floating pragma directive.
* The file [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol) has the [`solidity ^0.8.20`](/<null>/contracts/L2MessageReceiver.sol:2) floating pragma directive.
* The file [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) has the [`solidity ^0.8.20`](/<null>/contracts/L2TokenReceiver.sol:2) floating pragma directive.
* The file [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol) has the [`solidity ^0.8.20`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:2) floating pragma directive.
* The file [`MOR.sol`](/<null>/contracts/MOR.sol) has the [`solidity ^0.8.20`](/<null>/contracts/MOR.sol:2) floating pragma directive.

Use fixed pragma version.


[note]
### Function Visibility Overly Permissive

Throughout the codebase, instances of functions with unnecessarily permissive visibility were found. For instance:
- The [`_validatePool`](/<null>/contracts/Distribution.sol:107:111) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol) with `INTERNAL` visibility could be limited to `PRIVATE`.
- The [`_stake`](/<null>/contracts/Distribution.sol:185:215) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol) with `INTERNAL` visibility could be limited to `PRIVATE`.
- The [`_withdraw`](/<null>/contracts/Distribution.sol:217:268) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol) with `INTERNAL` visibility could be limited to `PRIVATE`.
- The [`_getCurrentUserReward`](/<null>/contracts/Distribution.sol:270:277) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol) with `INTERNAL` visibility could be limited to `PRIVATE`.
- The [`_getCurrentPoolRate`](/<null>/contracts/Distribution.sol:279:289) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol) with `INTERNAL` visibility could be limited to `PRIVATE`.
- The [`_poolExists`](/<null>/contracts/Distribution.sol:291:293) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol) with `INTERNAL` visibility could be limited to `PRIVATE`.
- The [`_authorizeUpgrade`](/<null>/contracts/Distribution.sol:329:331) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol) with `INTERNAL` visibility could be limited to `PRIVATE`.
- The [`supportsInterface`](/<null>/contracts/L2TokenReceiver.sol:26:28) function in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) with `PUBLIC` visibility could be limited to `EXTERNAL`.
- The [`editParams`](/<null>/contracts/L2TokenReceiver.sol:30:41) function in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) with `PUBLIC` visibility could be limited to `EXTERNAL`.
- The [`_editParams`](/<null>/contracts/L2TokenReceiver.sol:94:104) function in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) with `INTERNAL` visibility could be limited to `PRIVATE`.
- The [`getPeriodReward`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:19:85) function in [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol) with `PUBLIC` visibility could be limited to `EXTERNAL`.
- The [`supportsInterface`](/<null>/contracts/MOR.sol:14:19) function in [`MOR.sol`](/<null>/contracts/MOR.sol) with `PUBLIC` visibility could be limited to `EXTERNAL`.
- The [`cap`](/<null>/contracts/MOR.sol:21:23) function in [`MOR.sol`](/<null>/contracts/MOR.sol) with `PUBLIC` visibility could be limited to `EXTERNAL`.
- The [`burn`](/<null>/contracts/MOR.sol:29:31) function in [`MOR.sol`](/<null>/contracts/MOR.sol) with `PUBLIC` visibility could be limited to `EXTERNAL`.
- The [`_mint`](/<null>/contracts/MOR.sol:33:35) function in [`MOR.sol`](/<null>/contracts/MOR.sol) with `INTERNAL` visibility could be limited to `PRIVATE`.

To better convey the intended use of functions and to potentially realize some additional gas savings, consider changing a function's visibility to be only as permissive as required.


[note]
### Inconsistent Use of Named Returns

Contract [`L2TokenReceiver` contract](/<null>/contracts/L2TokenReceiver.sol:13:105) has inconsistent usage of named returns in its functions.

Consider naming all returns of all functions.


[high]
### Incorrect Interface Implementations

Throughout the codebase, multiple contracts do not implement some interfaces well. For instance:
The [`L2TokenReceiver` contract](/<null>/contracts/L2TokenReceiver.sol:13:105) in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) does not implement the `IERC165` Interface well. Check the conformity checker output: 

Conformity Checker IERC165:

Functions:

	[❌] supportsInterface(bytes4) is implemented incorrectly.
		[✅] supportsInterface(bytes4) signature is correct.
		[❌] PUBLIC visibility is incorrect, should be EXTERNAL.
		[✅] VIEW mutability is correct.
		[✅] [bool] return type is correct.


The [`MOR` contract](/<null>/contracts/MOR.sol:11:36) in [`MOR.sol`](/<null>/contracts/MOR.sol) does not implement the `IERC165` Interface well. Check the conformity checker output: 

Conformity Checker IERC165:

Functions:

	[❌] supportsInterface(bytes4) is implemented incorrectly.
		[✅] supportsInterface(bytes4) signature is correct.
		[❌] PUBLIC visibility is incorrect, should be EXTERNAL.
		[✅] VIEW mutability is correct.
		[✅] [bool] return type is correct.



To avoid unexpected behavior, ensure that all contracts correctly implement their public interfaces.


[note]
### In for Loop Headers Use Prefix Increment Operator `++i` to Save Gas

In [`Distribution.sol`](/<null>/contracts/Distribution.sol) this optimization could be applied. For instance:
- The [i++](/<null>/contracts/Distribution.sol:57).
- The [i++](/<null>/contracts/Distribution.sol:126).

Consider using the prefix increment operator `++i` instead of the post-increment operator `i++` in order to save gas. This optimization skips storing the value before the incremental operation, as the return value of the expression is ignored.


[note]
### Lack of Security Contact

Throughout the [codebase](), there are contracts that do not have a security contact. For instance:
* The [`Distribution`](/<null>/contracts/Distribution.sol) contract.
* The [`L1Sender`](/<null>/contracts/L1Sender.sol) contract.
* The [`L2MessageReceiver`](/<null>/contracts/L2MessageReceiver.sol) contract.
* The [`L2TokenReceiver`](/<null>/contracts/L2TokenReceiver.sol) contract.
* The [`LinearDistributionIntervalDecrease`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol) library.
* The [`MOR`](/<null>/contracts/MOR.sol) contract.

Consider adding a NatSpec comment containing a security contact on top of the contracts definition. Using the `@custom:security-contact` convention is recommended as it has been adopted by the [OpenZeppelin Wizard](https://wizard.openzeppelin.com/) and the [ethereum-lists](https://github.com/ethereum-lists/contracts#tracking-new-deployments).


[low]
### Missing Docstrings

Throughout the [codebase]() there are several parts that do not have docstrings. For instance:
* [Line 15](/<null>/contracts/Distribution.sol:15:332) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 18](/<null>/contracts/Distribution.sol:18) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 20](/<null>/contracts/Distribution.sol:20) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 21](/<null>/contracts/Distribution.sol:21) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 24](/<null>/contracts/Distribution.sol:24) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 25](/<null>/contracts/Distribution.sol:25) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 28](/<null>/contracts/Distribution.sol:28) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 31](/<null>/contracts/Distribution.sol:31) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 49](/<null>/contracts/Distribution.sol:49:63) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 68](/<null>/contracts/Distribution.sol:68:73) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 75](/<null>/contracts/Distribution.sol:75:87) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 89](/<null>/contracts/Distribution.sol:89:105) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 116](/<null>/contracts/Distribution.sol:116:138) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 143](/<null>/contracts/Distribution.sol:143:145) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 147](/<null>/contracts/Distribution.sol:147:168) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 170](/<null>/contracts/Distribution.sol:170:172) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 174](/<null>/contracts/Distribution.sol:174:183) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 299](/<null>/contracts/Distribution.sol:299:306) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 308](/<null>/contracts/Distribution.sol:308:319) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 325](/<null>/contracts/Distribution.sol:325:327) in [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* [Line 17](/<null>/contracts/L1Sender.sol:17:114) in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol)
* [Line 18](/<null>/contracts/L1Sender.sol:18) in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol)
* [Line 20](/<null>/contracts/L1Sender.sol:20) in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol)
* [Line 21](/<null>/contracts/L1Sender.sol:21) in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol)
* [Line 23](/<null>/contracts/L1Sender.sol:23:25) in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol)
* [Line 27](/<null>/contracts/L1Sender.sol:27:36) in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol)
* [Line 74](/<null>/contracts/L1Sender.sol:74:97) in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol)
* [Line 99](/<null>/contracts/L1Sender.sol:99:113) in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol)
* [Line 13](/<null>/contracts/L2MessageReceiver.sol:13:59) in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol)
* [Line 14](/<null>/contracts/L2MessageReceiver.sol:14) in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol)
* [Line 15](/<null>/contracts/L2MessageReceiver.sol:15) in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol)
* [Line 17](/<null>/contracts/L2MessageReceiver.sol:17) in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol)
* [Line 19](/<null>/contracts/L2MessageReceiver.sol:19:22) in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol)
* [Line 24](/<null>/contracts/L2MessageReceiver.sol:24:44) in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol)
* [Line 13](/<null>/contracts/L2TokenReceiver.sol:13:105) in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol)
* [Line 14](/<null>/contracts/L2TokenReceiver.sol:14) in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol)
* [Line 15](/<null>/contracts/L2TokenReceiver.sol:15) in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol)
* [Line 17](/<null>/contracts/L2TokenReceiver.sol:17) in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol)
* [Line 26](/<null>/contracts/L2TokenReceiver.sol:26:28) in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol)
* [Line 30](/<null>/contracts/L2TokenReceiver.sol:30:41) in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol)
* [Line 43](/<null>/contracts/L2TokenReceiver.sol:43:58) in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol)
* [Line 60](/<null>/contracts/L2TokenReceiver.sol:60:92) in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol)
* [Line 8](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:8:161) in [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol)
* [Line 11](/<null>/contracts/MOR.sol:11:36) in [`MOR.sol`](/<null>/contracts/MOR.sol)
* [Line 14](/<null>/contracts/MOR.sol:14:19) in [`MOR.sol`](/<null>/contracts/MOR.sol)
* [Line 21](/<null>/contracts/MOR.sol:21:23) in [`MOR.sol`](/<null>/contracts/MOR.sol)
* [Line 25](/<null>/contracts/MOR.sol:25:27) in [`MOR.sol`](/<null>/contracts/MOR.sol)
* [Line 29](/<null>/contracts/MOR.sol:29:31) in [`MOR.sol`](/<null>/contracts/MOR.sol)

Consider thoroughly documenting all functions (and their parameters) that are part of any contract's public API. Functions implementing sensitive functionality, even if not public, should be clearly documented as well. When writing docstrings, consider following the [Ethereum Natural Specification Format](https://solidity.readthedocs.io/en/latest/natspec-format.html) (NatSpec).


[note]
### Possible Precision Loss Due to Division Before Multiplication in Multiples Operations

In [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol), there are multiple multiplications that can lead to precision loss. For instance:
* The multiplication [`*`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:51).
* The multiplication [`*`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:111).
* The multiplication [`*`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:119).
* The multiplication [`*`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:121).
* The multiplication [`*`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:155).
* The multiplication [`*`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:155).
* The multiplication [`*`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:155).

Performing multiplication before division is generally better to avoid loss of precision, consider ordering multiplication before division.


[low]
### Require Statement With Multiple Conditions

Within [`Distribution.sol`](/<null>/contracts/Distribution.sol) the [`require(
                amount_ > 0 && (newDeposited_ >= pool.minimalStake || newDeposited_ == 0),
                "DS: invalid withdraw amount"
            )`](/<null>/contracts/Distribution.sol:243:246) requires multiple conditions to be satisfied.

To simplify the codebase and raise the most helpful error messages for failing `require` statements, consider having a single require statement per condition.


[low]
### Variable Names Too Similar

Throughout the codebase, there are multiple variables with similar names. For instance:
* The [`poolData`](/<null>/contracts/Distribution.sol:79) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `poolsData`.
* The [`pool`](/<null>/contracts/Distribution.sol:94) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `pools`.
* The [`users_`](/<null>/contracts/Distribution.sol:118) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `user_`.
* The [`amounts_`](/<null>/contracts/Distribution.sol:119) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `amount_`.
* The [`user_`](/<null>/contracts/Distribution.sol:127) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `users_`.
* The [`amount_`](/<null>/contracts/Distribution.sol:128) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `amounts_`.
* The [`pool`](/<null>/contracts/Distribution.sol:148) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `pools`.
* The [`poolData`](/<null>/contracts/Distribution.sol:149) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `poolsData`.
* The [`userData`](/<null>/contracts/Distribution.sol:150) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `usersData`.
* The [`userData`](/<null>/contracts/Distribution.sol:179) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `usersData`.
* The [`pool`](/<null>/contracts/Distribution.sol:188) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `pools`.
* The [`poolData`](/<null>/contracts/Distribution.sol:189) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `poolsData`.
* The [`userData`](/<null>/contracts/Distribution.sol:190) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `usersData`.
* The [`pool`](/<null>/contracts/Distribution.sol:218) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `pools`.
* The [`poolData`](/<null>/contracts/Distribution.sol:219) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `poolsData`.
* The [`userData`](/<null>/contracts/Distribution.sol:220) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `usersData`.
* The [`userData_`](/<null>/contracts/Distribution.sol:272) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `usersData`.
* The [`poolData`](/<null>/contracts/Distribution.sol:280) name within the [`Distribution.sol`](/<null>/contracts/Distribution.sol) is similar to `poolsData`.
* The [`amount0_`](/<null>/contracts/L2TokenReceiver.sol:64) name within the [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) is similar to `amount1_`.
* The [`amount1_`](/<null>/contracts/L2TokenReceiver.sol:64) name within the [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) is similar to `amount0_`.
* The [`amountAdd0_`](/<null>/contracts/L2TokenReceiver.sol:65) name within the [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) is similar to `amountAdd1_`.
* The [`amountAdd1_`](/<null>/contracts/L2TokenReceiver.sol:66) name within the [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) is similar to `amountAdd0_`.

Consider to rename the variables using clear and descriptive variable names and adhering to a naming convention.


[note]
### Functions Are Updating the State Without Event Emissions

Throughout the codebase, instances of functions that are updating the state without an event emission were found: For instance:
- The [`Distribution_init`](/<null>/contracts/Distribution.sol:49:63) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`Distribution_init`](/<null>/contracts/Distribution.sol:49:63) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`createPool`](/<null>/contracts/Distribution.sol:68:73) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`editPool`](/<null>/contracts/Distribution.sol:75:87) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`editPool`](/<null>/contracts/Distribution.sol:75:87) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`manageUsersInPrivatePool`](/<null>/contracts/Distribution.sol:116:138) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`manageUsersInPrivatePool`](/<null>/contracts/Distribution.sol:116:138) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`claim`](/<null>/contracts/Distribution.sol:147:168) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`claim`](/<null>/contracts/Distribution.sol:147:168) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`claim`](/<null>/contracts/Distribution.sol:147:168) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`_stake`](/<null>/contracts/Distribution.sol:185:215) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`_stake`](/<null>/contracts/Distribution.sol:185:215) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`_stake`](/<null>/contracts/Distribution.sol:185:215) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`_stake`](/<null>/contracts/Distribution.sol:185:215) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`_withdraw`](/<null>/contracts/Distribution.sol:217:268) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`_withdraw`](/<null>/contracts/Distribution.sol:217:268) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`_withdraw`](/<null>/contracts/Distribution.sol:217:268) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`_withdraw`](/<null>/contracts/Distribution.sol:217:268) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`removeUpgradeability`](/<null>/contracts/Distribution.sol:325:327) function in [`Distribution.sol`](/<null>/contracts/Distribution.sol).
- The [`setRewardTokenConfig`](/<null>/contracts/L1Sender.sol:23:25) function in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol).
- The [`setDepositTokenConfig`](/<null>/contracts/L1Sender.sol:27:36) function in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol).
- The [`_replaceDepositToken`](/<null>/contracts/L1Sender.sol:38:54) function in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol).
- The [`setParams`](/<null>/contracts/L2MessageReceiver.sol:19:22) function in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol).
- The [`setParams`](/<null>/contracts/L2MessageReceiver.sol:19:22) function in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol).
- The [`lzReceive`](/<null>/contracts/L2MessageReceiver.sol:24:44) function in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol).
- The [`constructor`](/<null>/contracts/L2TokenReceiver.sol:19:24) function in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol).
- The [`constructor`](/<null>/contracts/L2TokenReceiver.sol:19:24) function in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol).
- The [`_editParams`](/<null>/contracts/L2TokenReceiver.sol:94:104) function in [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol).

Consider emitting events whenever there are state changes to make the codebase less error prone and improve its readability.


[High]
### Dangerous Use of `transferfrom`

The use of ERC20's `transferFrom` on [line 195](/<null>/contracts/Distribution.sol:195) in  [`Distribution.sol`](/<null>/contracts/Distribution.sol) does not pass `msg.sender` as a `from` parameter.

Consider using `msg.sender` as `from` parameter in ERC20's `transferFrom` calls.


[ethtrust]
### External Call Failure Check Is Missing

The call [`ILayerZeroEndpoint(config.gateway).send{value: msg.value}(
            config.receiverChainId, // communicator LayerZero chainId
            receiverAndSenderAddresses_, // send to this address to the communicator
            payload_, // bytes payload
            payable(refundTo_), // refund address
            address(0x0), // future parameter
            bytes("") // adapterParams (see "Advanced Features")
        )`](/<null>/contracts/L1Sender.sol:105:112) within the contract `L1Sender` in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol) has missing failure check.

undefined


[note]
### Uninitialized Local Variables

Throughout the [codebase](), some local variables are not initialized. For instance:
* The [`newDeposited_`](/<null>/contracts/Distribution.sol:229) local variable of [`Distribution.sol`](/<null>/contracts/Distribution.sol).
* The [`sender_`](/<null>/contracts/L2MessageReceiver.sol:34) local variable of [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol).
* The [`amountAdd0_`](/<null>/contracts/L2TokenReceiver.sol:65) local variable of [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol).
* The [`amountAdd1_`](/<null>/contracts/L2TokenReceiver.sol:66) local variable of [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol).
* The [`intervalPart_`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:117) local variable of [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol).

To improve the overall clarity, intent, and readability of the codebase, consider initializing all local variables.


[note]
### Unused Function Arguments

Within the [`Distribution` contract](/<null>/contracts/Distribution.sol), the `None` argument for the [`_authorizeUpgrade` function](/<null>/contracts/Distribution.sol:329) is unused.

To improve the overall clarity, intentionality, and readability of the codebase, consider removing any unused function parameters.


[note]
### Unused Function With Internal or Private Visibility

In [`Distribution.sol`](/<null>/contracts/Distribution.sol) the [`_authorizeUpgrade`](/<null>/contracts/Distribution.sol:329:331) function is unused.

To improve the overall clarity, intentionality, and readability of the codebase, consider using or removing any currently unused functions.


[note]
### Unused State Variable

Within the [`Distribution` contract](/<null>/contracts/Distribution.sol), the `isNotUpgradeable` state variable is unused.

To improve the overall clarity, intentionality, and readability of the codebase, consider removing any unused state variables.


[Low]
### Void Constructor Call

 The [constructor of contract `MOR`](/<null>/contracts/MOR.sol:12) calls void constructor of `ERC20("MOR", "MOR")`.

Remove the constructor call.


[high]
### Reentrant Codes Identified on a Functions

Throughout the [codebase]() there are contracts containing code that does not protect against reentrancy. For instance:
- The [`claim(uint256,address)` function](/<null>/contracts/Distribution.sol:147:168) in [`Distribution.sol`](/<null>/contracts/Distribution.sol) [👍](https://dev.mozaic.openzeppelin.comfeedback_form/0a29bfe78c6d9de22eff8de9/true) [👎](https://dev.mozaic.openzeppelin.comfeedback_form/0a29bfe78c6d9de22eff8de9/false) [💬](https://dev.mozaic.openzeppelin.comfeedback_form/0a29bfe78c6d9de22eff8de9/false/form)
- The [`sendDepositToken(uint256,uint256,uint256)` function](/<null>/contracts/L1Sender.sol:74:97) in [`L1Sender.sol`](/<null>/contracts/L1Sender.sol) [👍](https://dev.mozaic.openzeppelin.comfeedback_form/f15deb8509445d8c664941ea/true) [👎](https://dev.mozaic.openzeppelin.comfeedback_form/f15deb8509445d8c664941ea/false) [💬](https://dev.mozaic.openzeppelin.comfeedback_form/f15deb8509445d8c664941ea/false/form)
- The [`getPeriodReward(uint256,uint256,uint128,uint128,uint128,uint128)` function](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:19:85) in [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol) [👍](https://dev.mozaic.openzeppelin.comfeedback_form/9a8af6df40f0e2a7a992fdaf/true) [👎](https://dev.mozaic.openzeppelin.comfeedback_form/9a8af6df40f0e2a7a992fdaf/false) [💬](https://dev.mozaic.openzeppelin.comfeedback_form/9a8af6df40f0e2a7a992fdaf/false/form)

Consider following the checks-effects-interactions pattern whenever possible, or otherwise protecting code from potential reentrancy.


[note]
### Fuzzing Testing Opportunities

* On [line 107](/<null>/contracts/Distribution.sol:107:111) of [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* On [line 19](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:19:85) of [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol)
* On [line 87](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:87:100) of [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol)
* On [line 102](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:102:129) of [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol)
* On [line 131](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol:131:156) of [`LinearDistributionIntervalDecrease.sol`](/<null>/contracts/libs/LinearDistributionIntervalDecrease.sol)

undefined


[note]
### Use Custom Errors

Throughout the codebase, instances of revert and/or require messages were found. For instance:
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:37) statement with the message "DS: pool doesn't exist".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:42) statement with the message "DS: pool isn't public".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:69) statement with the message "DS: invalid payout start value".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:77) statement with the message "DS: invalid pool type".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:109) statement with the message "DS: invalid reward decrease".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:121) statement with the message "DS: pool is public".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:122) statement with the message "DS: invalid length".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:152) statement with the message "DS: pool claim is locked".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:156) statement with the message "DS: nothing to claim".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:186) statement with the message "DS: nothing to stake".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:200) statement with the message "DS: amount too low".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:223) statement with the message "DS: user isn't staked".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:231:234) statement with the message "DS: pool withdraw is locked".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:243:246) statement with the message "DS: invalid withdraw amount".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:314) statement with the message "DS: overplus is zero".
- In the [`Distribution.sol`](/<null>/contracts/Distribution.sol) contract, the [`require`](/<null>/contracts/Distribution.sol:330) statement with the message "DS: upgrade isn't available".
- In the [`L1Sender.sol`](/<null>/contracts/L1Sender.sol) contract, the [`require`](/<null>/contracts/L1Sender.sol:28) statement with the message "L1S: invalid receiver".
- In the [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol) contract, the [`require`](/<null>/contracts/L2MessageReceiver.sol:30) statement with the message "L2MR: invalid nonce".
- In the [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol) contract, the [`require`](/<null>/contracts/L2MessageReceiver.sol:31) statement with the message "L2MR: invalid gateway".
- In the [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol) contract, the [`require`](/<null>/contracts/L2MessageReceiver.sol:32) statement with the message "L2MR: invalid sender chain ID".
- In the [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol) contract, the [`require`](/<null>/contracts/L2MessageReceiver.sol:38) statement with the message "L2MR: invalid sender address".
- In the [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) contract, the [`require`](/<null>/contracts/L2TokenReceiver.sol:95) statement with the message "L2TR: invalid tokenIn".
- In the [`L2TokenReceiver.sol`](/<null>/contracts/L2TokenReceiver.sol) contract, the [`require`](/<null>/contracts/L2TokenReceiver.sol:96) statement with the message "L2TR: invalid tokenOut".

For conciseness and gas savings, consider replacing require and revert messages with custom errors.


[note]
### Function Might Have an Incorrect ABI Decoding

The [`lzReceive`](/<null>/contracts/L2MessageReceiver.sol:24:44) function in [`L2MessageReceiver.sol`](/<null>/contracts/L2MessageReceiver.sol) might have an incorrect ABI decoding.

Consider carefully checking the abi decodings to prevent decoding in unexpected ways.


[note]
### Incremental Update Is Not Wrapped in an Unchecked Block

* On [line 57](/<null>/contracts/Distribution.sol:57) of [`Distribution.sol`](/<null>/contracts/Distribution.sol)
* On [line 126](/<null>/contracts/Distribution.sol:126) of [`Distribution.sol`](/<null>/contracts/Distribution.sol)

Consider wrapping the incremental update into an `unchecked` block to save the gas required to check against overflows.


[note]
### Assembly



undefined
