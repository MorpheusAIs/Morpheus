# Multisignature Set Up For Morpheus

As the time approaches to deploy the Morpheus Smart Contracts on Ethereum & Abritrum for the fair launch process to begin, the question of the multisignature set up has been raised. For full transparency it is wise to lay out the process of setting up the multi signature security, the experience of the key holders and how the process may evolve in the future.

## 1. Purposes of the Multisig
- The primary need for the multisig is to deploy the Smart Contracts. 
- Secondarily the Smart Contracts must be updated from time to time due to all the functions not yet being automated. For example while the Capital Provider function is fully automated, the Code Provider addresses and weights are currently manually updated. So new Code contributors will need to be credited in the Smart Contract monthly as they add their proof of work to the network. Hopefully all these functions can be automated in the future.
- The third purpose of the multisig is in case of bugs or errors in the Smart Contracts. This may require pausing or upgrading the Smart Contacts. Hopefully this function can be Decentralized in the future, however the need for expert oracles among the Code Providers (to address bugs) is likely to persist as described in the whitepaper.

## 2. The Set Up Process and Key Holders
Following the recommendations of the cybersecurity experts and auditors involved in testing the Smart Contracts the “SAFE'' software (previously known as the Gnosis SAFE) multisignature Smart Contract will be employed to manage the keys. https://app.safe.global/welcome

- 7 key holders have been selected from the community to take part in the multi sig.
- Each key holder has deep experience in cyber security + 6 to 12 years in crypto.
- The SAFE software will be set up to require 4 of the 7 key holders to sign transactions.
- The key ceremony is being witnessed by an independent auditor.
- The key holders are jurisdictionally & geographically diverse.
- None of the key holders are members of the same company.
- Identities of the key holders will not be doxxed for obvious personal security reasons.

## 3. Resulting Multisig Addresses:
- Multisig Address for Ethereum: 0x1FE04BC15Cf2c5A2d41a0b3a96725596676eBa1E
- Multisig Address for Arbitrum: 0x151c2b49CdEC10B150B2763dF3d1C00D70C90956

## 4. How The Multisig Is Likely To Evolve
To be clear the key holders have little meaningful power over the Smart Contracts. On purpose most of the functions of the Smart Contracts cannot be changed by the admin (controlled by the multisig) and as the Smart Contracts evolve and mature it is anticipated that the admin key may not be required at all. This step of becoming non-upgradable should be taken carefully as it will make the Smart Contracts much harder for the community to upgrade in the future.

Lastly, as the goal of the Morpheus community is always to move toward “atomic governance” everyone looks forward to multiple implementations of every aspect of the Morpheus code base from Smart Contracts to Node software; this is welcomed and encouraged. The 24% MOR emissions for Coders will include these multiple implementations, presuming they honor the same tokenomics and fair launch ownership records of the Morpheus community.
