'use client'
import { useSession } from "next-auth/react"
import Cartel from "@/components/CartelArtists"
import { useRouter } from "next/navigation"

export default function Dashboard(props) {
  const { data: session } = useSession();
  const router = useRouter();
  
  if(!session) {
    router.push('/');
  } else {
    return (
      <Cartel />
    )
  }
  
}
