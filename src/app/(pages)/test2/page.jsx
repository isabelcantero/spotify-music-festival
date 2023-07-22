'use client'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Test() {
  const { data: session } = useSession()


  return( 
    <div>
      <h1>Testing2</h1>
      
    </div>
)}