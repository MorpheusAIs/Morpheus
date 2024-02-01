import { ethers } from "ethers";

export const connectWallet = async (web3modal: any) => {
    // const [getMe] = useLazyQuery(GET_ME);

    let status = "notConnected";
    try {
        const instance = await web3modal.connect().catch((er: any) => console.log(er));
        if (instance) {
            const provider = new ethers.providers.Web3Provider(instance);
            const signer = provider.getSigner();
            const walletAddress = await signer.getAddress();
            const chainId = await signer.getChainId();
            status = "connected";
            return {
                provider,
                signer,
                walletAddress,
                chainId,
                status,
            };
        }
    } catch (error: any) {
        return error;
    }
};