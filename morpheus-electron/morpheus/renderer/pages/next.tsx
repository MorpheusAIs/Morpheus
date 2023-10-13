import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function Next() {
  return (
    <React.Fragment>
      <Head>
      <title>Home - Morpheus</title>
      </Head>
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
        <span>⚡ Nextron ⚡</span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/home">
          <a className="btn-blue">Go to home page</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Next
