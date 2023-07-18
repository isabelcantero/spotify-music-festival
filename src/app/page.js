import styles from './page.module.css'
import Link from 'next/link'

export default function Welcome() {
  return (
    <main className={styles.main}>
      <h1>Your Spotify Music Festival</h1>

      <Link href="/dashboard">Dashboard</Link>
    </main>
  )
}
