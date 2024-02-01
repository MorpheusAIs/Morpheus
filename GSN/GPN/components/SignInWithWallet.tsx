import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUserDataContext } from "../context/userDataContext";
import { connectWallet } from "./ConnectWallet";
import { ModalChain } from "./ModalChain";



export const SignInWithWalletButton = () => {

    const [walletisConnecting, setWalletisConnecting] = useState(false);
    const { user, setUser, web3modal } = useUserDataContext();
  
    useEffect(() => {
        localStorage.removeItem("walletconnect");
    }, []);

    const [open, setOpen] = useState<boolean>(false);
    const message = (
        <>Connect to the Mumbai Network or Testnet before Connecting your Wallet</>
    );

  
    async function connect() {
        setWalletisConnecting(true);
        try {
            web3modal.clearCachedProvider();
            const { provider, signer, walletAddress, chainId } = await connectWallet(web3modal);
            const instance = await web3modal.connect().catch((er: any) => console.log(er));
            if (instance) {
               
               
                setUser((prevState: any) => ({
                    ...prevState,
                    connected: true,
                    signer,
                    provider,
                    walletAddress,
                    chainId,
                   
                }));

                setWalletisConnecting(false);
               
            }
        } catch (err) {
            setWalletisConnecting(false);
        }
    }
    function disconnect() {
        web3modal.clearCachedProvider();
        sessionStorage.removeItem("accessToken");
        toast("Wallet Disconnected");
        setUser((prevState: any) => ({
            ...prevState,
            connected: false,
            chainId: 0,
            walletAddress: "",
           
        }));
       
    }

    return (
        <>
            <ModalChain open={open} setOpen={setOpen} message={message} />
            {user.connected ? (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={disconnect}>
                    Disconnect Wallet
                </button>
            ) : (
                <button disabled={walletisConnecting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={connect}>
                    {walletisConnecting ? "Connecting..." : "Connect Wallet"}
                </button>
            )}
        </>
    );
};