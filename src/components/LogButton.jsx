'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import styles from "./styles/logbutton.module.css"

export default function Header() {
  const { data: session } = useSession()

  return (
      <div>
        <p>
          {!session && (
            <Link 
              href="/api/auth/signin" 
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}>
              <FaSignInAlt title="Log In" className={styles.login}/>
            </Link>
          )}
          {session?.user && (
            <Link
              href="/api/auth/signout" 
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}>
              <FaSignOutAlt title="Log Out" className={styles.logout}/>
            </Link>
          )}
        </p>
      </div>
  )
}
