'use client'
import Cartel from "@/components/Cartel"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Test() {
  const { data: session } = useSession()


  return( 
    <div>
      <h1>Testing</h1>
      <Cartel />
    </div>
)}