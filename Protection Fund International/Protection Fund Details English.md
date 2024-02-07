# Proposal of the Morpheus Protection Fund

## Introduction
In the Morpheus White Paper, 4% of the total MOR issuance is allocated for the creation of a "Protection Fund" and is delegated to code providers who act as oracles when needed for its resources.  

#### Types of actions include:
- Rewarding the discovery of bugs or vulnerabilities to prevent attacks.
- Paying for audits before deploying new smart contracts.
- Halting smart contracts in the event of an attack.
- Assessing damages and implementing a compensation mechanism after an attack.
- Planning for significant losses (hard fork scenario).

## Predefined Cases for Minor Payouts
Before smart contracts are launched on the Ethereum network, conditions under which the Protection Fund will make payments in MOR or stETH are defined.

## Types of Payments:
1. Bugs discovered and responsibly disclosed to the smart contract developers of Capital, Computation, Code, Community, and the Protection Fund.
2. Payment for audits before deploying new smart contracts on the Morpheus network.
3. Losses of MOR or sETH users due to Morpheus smart contract bugs.
4. Payments in cases where participants did not receive MOR issuance due to Morpheus smart contract failures.

Payouts from the protection fund should be proportional to the error, loss, or issuance mistake.

## Conditions for Halting Smart Contracts
Before determining payouts for damage compensation, conditions that trigger the halting of smart contracts in the event of an ongoing attack must be established.

## Damage Assessment and Payment Mechanism
Code providers will participate in the damage assessment necessary for compensation. First, the incident will be detailed and published in the GitHub repository of the affected smart contract, including a list of affected addresses and the amounts of MOR and/or stETH.

If the majority of code providers (measured by the weight of their held MOR tokens), participating in the damage assessment (no more than 7 days), confirm the report as TRUE, a payout will be initiated.

Once the payout is initiated, the software will send a message to developers requesting authorization of the payment to the affected addresses in the specified amounts.

## Plan in Case of Substantial Damage
Substantial loss is defined as an event where MOR losses exceed the total resources of the Protection Fund. In this case, instead of MOR payments, code providers must deploy new smart contracts and manually adjust the affected MOR balances. This will effectively trigger a MOR code/balance hard fork, and all providers, token holders, and other infrastructure providers will need to update their code to the new smart contracts.

In the event of stETH loss due to significant damage, the Protection Fund will pay the maximum possible amount on a proportional basis considering each person's damage.

## Conclusion
Bugs and errors in software are a reality, marked in history from the two unintentional hard forks in Bitcoin to The DAO in the early days of Ethereum.

Thus, planning for various scenarios and cases and how to deal with them in advance is a wise approach for protection and risk mitigation. Fortunately, thanks to the resources pre-allocated in the Protection Fund, as well as part of the fund that generates income through commission rewards for providing liquidity in AMM, the resources allocated for user protection will increase over time.