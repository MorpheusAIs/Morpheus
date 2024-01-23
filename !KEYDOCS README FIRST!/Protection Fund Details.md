# Morpheus Protection Fund Proposal

## Introduction
The Morpheus white paper sets aside 4% of all MOR emissions for the purpose of a “Protection Fund” and delegates to the Code Providers to act as oracles in the case of its resources being needed.
Type of actions:
- Payment of buy bounty to avoid attacks.
- Payment of audits before new Smart Contracts are deployed.
- Halting the Smart Contracts in case of an on going attack.
- Signaling and Mechansim for payout after an attack.
- Plan In Case of Significant Loss Event (Hard Fork Scenario)

## Pre-Defined Cases Triggering Minor Payouts
Before the Smart Contracts go live on the Ethereum network here defined are the conditions under which the Protection Fund will pay out MOR or stETH.

## Types of Payments:
1. Bugs discovered and responsibly disclosed to the developers of a Morpheus Capital, Code, Compute, Community or Protection Fund Smart Contract.
2. Payment of audits before new Smart Contracts are deployed on the Morpheus network.
3. User losses of MOR or stETH in the case of an exploited Morpheus Smart Contract.
4. Making whole providers who didn’t receive MOR emissions in the case of a failure of the Morpheus Smart Contract.

Amounts of payments from the production fund should be in proportion to the bug, loss or emission error.

## Halting Conditions For Smart Contracts
Before payments for damages can figured out, there should be conditions that trigger a halt of the Smart Contracts in the case of an on going attack.

## Signaling & Mechanism For Payout
Code Providers will participate in signaling when a payment should be triggered. First an incident will be detailed and posted on the GitHub repository of the affected Smart Contract. Including a list of affected addresses and amounts of MOR and / or stETH.

If a majority of Code Providers (as measured by the weight of their MOR tokens held) which participate in the Signaling period (no longer than 7 days) validate the report as TRUE then a payment will be triggered.

Once a payment is triggered the software will message the developers to authorize a payment to the affected addresses in the amounts specified.

## Plan In Case of a Significant Loss Event
A Significant Loss Event is defined as an event in which the MOR losses exceed the total resources of the Protection Fund. In this case, rather than make a payout of MOR the Code Providers should deploy new Smart Contracts and correct the MOR balances effected manually. This would effectively cause a hard fork in the code / MOR balances and all Providers, token hodlers and other infrastructure providers would have to update their code to the new Smart Contracts.

In the case of stETH lost in a Significant Loss Event, the Protection Fund shall pay out to the maximum extent possible on a pro-rata basis to the amount of each person’s losses.

## Conclusion
Bugs and errors in software are a reality and mark the history from the two unintentional hard forks of Bitcoin to The DAO during the early days of Ethereum. 

So planning ahead for different scenarios and cases and how to handle them is a wise approach for protecting against and otherwise mitigating risks. Fortunately, having set aside resources in advance with the Protection Fund, and also part of the protection fund earning LP rewards in the AMM the resources dedicated to protection of users ought to grow larger over time.
