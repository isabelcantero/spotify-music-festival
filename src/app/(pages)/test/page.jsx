'use client'
import { useSession } from "next-auth/react"

export default function Data() {
  const { data: session } = useSession();

  return(
    <div>
    

    </div>
  )
}