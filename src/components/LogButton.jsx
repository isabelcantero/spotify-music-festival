'use client'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header>
      <div>
        <p>
          {!session && (
              <a href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}>
                Sign in
              </a>
          )}
          {session?.user && (
              <a href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign out
              </a>
          )}
        </p>
      </div>
    </header>
  )
}
