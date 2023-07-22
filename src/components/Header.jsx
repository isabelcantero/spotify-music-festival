import Link from "next/link"
import styles from "./header.module.css"
import LogButton from "./LogButton"

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/test">Test</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/test2">Test2</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">Protected</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/data">Data from auth</Link>
          </li>
          <li className={styles.navItem}>
            <LogButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}
