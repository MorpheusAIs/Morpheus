import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import { Web3ReactProvider } from "@web3-react/core";

import Web3 from "web3";
import { UserDataProvider } from '../context/userDataContext';
import { Toaster } from 'react-hot-toast';

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

function getLibrary(provider: any) {
  return new Web3(provider);
}

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <UserDataProvider>
    <SessionProvider session={session}>
      <RWBProvider>
        <div className={cx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </div>
      </RWBProvider>
      <Analytics />
    </SessionProvider>
    </UserDataProvider>
    </Web3ReactProvider>
  );
}
