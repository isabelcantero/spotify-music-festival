import Link from "next/link"
import LogButton from "./LogButton"
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <nav>
        <p>
          <Link href="/">
              <Image src="/logo.png" alt="" width={70} height={70} />
          </Link>
        </p>

        <ul>
          <li>
            <Link href="/myfestival">MyFestival</Link>
          </li>
          <li>
            <Link href="/tracklist">Tracklist</Link>
          </li>
        </ul>

        <LogButton />
      </nav>
    </header>
  )
}
