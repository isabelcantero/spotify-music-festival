'use client'
import { useSession } from "next-auth/react"
import styles from './page.module.css'
import Cartel from "@/components/CartelArtists"

export default function Dashboard(props) {
  const { data: session } = useSession();

  return (
    <main className={styles.main}>
      <h1>Your Spotify Music Festival</h1>
      <h1>Welcome {session.user.name}</h1>

      <h1>Your Top Artists</h1>
      <Cartel />
    </main>
  )
}
