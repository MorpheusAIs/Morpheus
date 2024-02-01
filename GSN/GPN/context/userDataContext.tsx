import React, { createContext, useContext, useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { connectWallet } from "@/components/ConnectWallet";






type contextType = {
    user: { [key: string]: any };
    setUser: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
    web3modal: any;
};

const context: contextType = {
    web3modal: {},
    user: {},
    setUser: (e: object) => {
        return;
    },
};



export const UserDataContext = createContext(context);

interface UserDataContextProps {
    children: React.ReactNode;
}

export const UserDataProvider: React.FC<UserDataContextProps> = ({ children }) => {
    
  
    const [user, setUser] = useState<{ [key: string]: any }>({
        connected: false,
        chainId: 0,
    });
    const [web3modal, setWeb3Modal] = useState<any>({});
    
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    80001: "https://rpc-mumbai.maticvigil.com",
                },
            },
        },
        
    };

    useEffect(() => {
        const web3modal = new Web3Modal({
            network: "mumbai",
            cacheProvider: true,
            providerOptions, // required
        });
        setWeb3Modal(web3modal);
        if (web3modal.cachedProvider) {
            connectWallet(web3modal).then((res) => {
                if (res?.status === "connected") {
                    setUser((prevState) => ({
                        ...prevState,
                        ...res,
                        connected: true
                    }));
                }
            });
        }
    }, []);

    return (
        <div>
            <UserDataContext.Provider
                value={{
                    user,
                    setUser,
                    web3modal,
                }}>
                {children}
            </UserDataContext.Provider>
        </div>
    );
};

export const useUserDataContext = () => {
    const context = useContext(UserDataContext);
    if (context === undefined) {
        throw new Error("useUserDataContext must be used within a UserDataProvider");
    }
    return context;
};