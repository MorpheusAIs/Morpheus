# The purpose of the guide is to pass you through the process of creating a Dune Dashboard for the Standard TCM Style Distribution Contract

## General Process
1) Identify the type of visualisations required 
2) Obtain the relevant contract addresses from Etherscan 
3) Fork the relevant visualisations on Dune and adjust the code by adding contract addresses from 2.
4) Make sure to update Titles / Subtitles, Logos and Descriptions

## Identify Useful Visualisations
Identify the types of visualisations needed for the Techno Capital Machine Launch. Generally useful information for such launches includes: 
- Total TVL in nominal currency and USD (split by each deposited asset)
- Unique Number of Wallets deposited 
- Net Flows over time (in unit of time deemed useful)
- Total Contract Balance TVL over time
- Largest Depositors and Recent Transactions 
- Some measure of Return on Investment depending on certain variables (such as FDV / Total $ deposited)

## Obtain Relevant Contract Addresses
Prior to writing any DuneSQL, one needs to identify the relevant contract address to query for balances and transfers in. In the case of Morpheus it is the Distribution Contract below: 
- Morpheus Distribution Contract: [0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790](https://etherscan.io/address/0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790) 
We must also identify the contract address of the token for which the yield will be used to buy and burn the eco-system token. In this case it is stETH, however, there is no reason this can't be another yield-bearing asset such as sDAI or USDM. The stETH contract is below: 
- stETH Contract: [0xae7ab96520de3a18e5e111b5eaab095312d7fe84](https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84)

  
## Fork Relevant Visualisations and Refactor the Code 
Given that a blockchain contains historical state of all prior transactions, anyone can easily look up transactions on the blockchain going back to the genesis ETH block. Dune is a tool that allows us to efficiently query such transactions through super-fast parallelised computing. It also streamlines the visualisation process with built-in tooling. We will briefly go through each visualisation category and see how to quickly adjust it to fit a project's needs: 

1) Total TVL in nominal currency and USD
- The `deposited` CTE tracks all stETH transfers to the Distribution Contract. The `withdrawn` CTE tracks all stETH transfers out of the Distribution Contract. Change the `to` and `from` fields to the project's staking contract and ensure that the `contract_address` field reflects the yield-bearing token utilised. To convert to USD, we utilised another CTE called `prices`.

2) Unique Depositors
- Similarly, we track the distinct count of `from` addresses that have transferred stETH into the contract specified. Ensure that the `to` field is populated with staking contract as well as the relevant address for the `contract_address` field. 

3) Net Flows over time
- Replace the `to` and `from` values with the staking contract address. Change the `contract_address` to the token to be deposited. If your token doesn't use 18 decimal places, modify the 1e18 value to match your token's precision.

- Modify Timeframe: In the `days` CTE, update the start date in the CAST('YYYY-MM-DD' AS timestamp) to reflect your analysis period.

- Adapt for Different Tokens: To analyze another token, simply change the contract_address in both `deposited` and `withdrawn` CTEs.

4) Total Contract Balance TVL over time
This code simply uses blocks of code from 3) but includes a window function in the final few lines [OVER()] to maintain a rolling sum across all the days.  

- Update Contract Addresses: Change the `to` and `from` values to your project's contract address for deposits and withdrawals. Replace the `contract_address` with the address of the token you're tracking.

- Token Precision: If your token uses a different precision than 18 decimal places, adjust the 1e18 divisor accordingly to match your token's decimal precision.

- Modify Timeframe: In the `days` CTE, change the start date in CAST('YYYY-MM-DD' AS timestamp) to the beginning of your analysis period.

- Adapt for Different Tokens: To analyze a different token, simply alter the `contract_address` in the `deposited` and `withdrawn` CTEs to the new token's contract address.

This approach calculates the cumulative total of stETH (or any specified token) within the contract over time.

5) Largest Depositors and Recent Transactions
The first query utilises two CTEs and combines them in the final SELECT statement. The first CTE `quantum` selects the depositing addresses in the `from` field and sums across the `value` field for the total stETH deposited. The second CTE again also selects the depositing addresses but instead of summing, it keeps a 'count'. The final SELECT statement joins both CTEs in one table. To modify follow the instructions below: 

- Update Contract Address: Replace the `to` value with the contract address where deposits are being made for your project.

- Adjust Token Precision: If the token you're tracking uses a precision other than 18 decimal places, modify the pow(10, 18)part to match the token's actual precision (e.g., pow(10, token_decimal)).

- Adapt for Different Tokens: Change the `contract_address` in the WHERE clause to the address of the token you're analyzing.

The recent transactions query simply takes the Event-Transfee table (a popular Dune table tracking all ERC20 transfer events from genesis!) orders by the block time, and limits to the last 100 transfers. Adjust the `to` field to the relevant depositing address.

6) Return on Investment
The query is structured into several Common Table Expressions (CTEs) and a final calculation that combines these components:

- `deposited` and `withdrawn`: These CTEs calculate the total stETH deposited and withdrawn from the contract, respectively.
- `prices`: Fetches the latest USD price of ETH.
- `total_USD`: Calculates the net stETH in the contract in USD terms.
- `Emissions`: Estimates remaining tokens based on a fixed emission schedule for Morpheus, we are emitting 14,400 tokens per day, and 24% of them are allocated to Capital Providers.
- `FDVs`: Models different Full Diluted Valuations (FDVs) for the MOR token and calculates the "Stimulus Check", or the amount available for distribution.
- The final SELECT calculates the ROI and APR based on these assumptions.

To Modify the Query:
- Update Contract and Token Addresses: Replace the `to` and `from` values in `deposited` and `withdrawn` CTEs with the relevant depositing contract address for your project. Adjust the `contract_address` to the token you're tracking.
- Adjust Token Precision: Change the 1e18 divisor if your token uses a different decimal precision.
- Update Prices CTE: If analysing a different token than ETH, modify the `symbol` and `contract_address` in the `prices` CTE to match.
- Adapt Emission CTE: Customise the `Emissions` -> The code is structured in this way: %_of_tokens_to_CapitalProviders * total_tokens_emitted_per_day * number_of_days. The subtraction ensures that the code remains dynamic without needing to update the `number_of_days` variable.
- Valuation Models: Customise `FDVs` CTEs ->  Identify realistic Marketcaps and list them in the array. Divide by the total supply which, in this case, is 42M in the `Stimulus_Check` column. 
- ROI and APR Calculations: Ensure the date in the `Emissions` CTE reflects your project's launch date for accurate APR calculations.

## Double-check Titles and Subtitles 
Ensure that all titles and sub-titles are clear and legible. Ensure consistency between all the visualisations to allow for ease of reading and less confusion! Always annotate the axes too. 


