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
            <Link href="/myfestival">MyFestival</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/tracklist">Tracklist</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">Protected</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/test">Test</Link>
          </li>
          <li className={styles.navItem}>
            <LogButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}
