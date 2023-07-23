'use client'
import AccessDenied from "@/components/AccessDenied"
import { useSession } from "next-auth/react"

export default function Test() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <AccessDenied />
    )
  }

  return( 
    <div>
      <h1>Protected</h1>
    </div>
)}