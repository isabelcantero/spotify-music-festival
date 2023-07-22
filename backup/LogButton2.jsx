'use client'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Header() {
  const { data: session, status } = useSession()

  return (
    <header>
      <div>
        <p>
          {!session && (
            <>
              <span>
                You are not signed in 
              </span>
              <a href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}>
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span>
                <small>Signed in as: </small>
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  )
}
