# Open Issues:

## 1. How to pay for gas fees of the end user without adding complexity? 
Example Solutions:
- Have developers use a part of the ETH generated from yield activities to pay for the user's transaction.
Or 
- Developers pay fees on behalf of the user via account abstraction or gas station type set up.

## 2. How should ETH fees paid to Compute providers flow?
Example Flow: 
- A. User pays fee in the base currency of the smart contract (i.e. x% of transaction value, paid in ETH).
- B. The executing compute provider receives the fee directly. This is a fee for work performed. 
- C. Compute provider is only directed compute requests in proportion to amount of MTN staked.

- The option for a user to pick their compute provider would still be open, but not built into the default.

## 3. How are MTN fees set by the user or Compute provider?
Example Solutios:
- A. The user sets a MTN fee they are willing pay and are matched to a compute provider willing to work for that fee.
or
- B. The network sets an MTN payment variable and burns 50% and the other 50% goes to the computer provider.
