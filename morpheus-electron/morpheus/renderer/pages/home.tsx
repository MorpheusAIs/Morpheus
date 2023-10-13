import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import SDKContainer from './sdk';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Morpheus</title>
      </Head>
      <SDKContainer />
      <div className="mt-8 grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Image
            className="ml-auto mr-auto mt-8"
            src="/images/logo.png"
            alt="Logo image"
            width="400px"
            height="66px"
          />
        </div>
        <input type="text" className="mt-8 w-1/2 ml-auto mr-auto p-2 rounded-md" placeholder="Deposit 2 ETH..." />
        <input type="button" className="mt-8 w-1/2 ml-auto mr-auto p-2 rounded-md bg-blue-500 text-white" value="Send" />
      </div>
    </React.Fragment>
  )
}

export default Home
