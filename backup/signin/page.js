'use client'
import { signIn, getProviders } from 'next-auth/react'
import Image from 'next/image'
import { getServerSession } from "next-auth/next"


export default function SignIn({ providers }) {
  return (
    <div>
      {/*<Image src='/katalog_full.svg' width="196" height="64" alt='App Logo' style={{ height: '85px', marginBottom: '20px' }} />*/}
        <div>
          <button onClick={() => signIn('spotify')} >
            Sign in with Spotify
          </button>
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  }
}