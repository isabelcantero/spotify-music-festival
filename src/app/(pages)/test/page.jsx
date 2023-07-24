/*
import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react"
import { getToken } from "next-auth/jwt"

// fetch('https://...', { cache: 'no-store' })

export default async function F(req, res) {
  //const providers = await getProviders()
  //const session = await getToken({ req });
  //console.log(session);

  return (
    <>
      <h1>Server Side Rendering</h1>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to
        render.
      </p>
    </>
  )
}*/


export default function Home() {


  return( 
    <div>
      <h1>This is the Test page</h1>
    </div>
  )
}
