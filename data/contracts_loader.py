import json
import os
from os.path import join as path_join

CONTRACTS_DIR = "contracts/contracts"

contracts = []  # [(fname, payload), ..., (fname, payload)]

contract_filenames = ["dex.json", "pancakeswap.json", "router.json", "sushiswap.json", "uniswap.json"]


def extract_metadata_abi(contract: dict):
    subset_keys = ("metadata", "abi")
    return {key: contract[key] for key in contract if key in subset_keys}


for contract_fname in contract_filenames:
    with open(path_join(CONTRACTS_DIR, contract_fname), "r") as f:
        payload = json.load(f)

        if "contracts" in payload:
            for contract in payload["contracts"]:
                contracts.append((contract_fname, extract_metadata_abi(contract)))
        else:
            contract = payload
            contracts.append((contract_fname, extract_metadata_abi(contract)))

if __name__ == "__main__":

    print(contracts)
