import Link from "next/link"
import styles from './styles.module.css'

export default function Toolbar() {
  return (
    <div className={styles.nav}>
      <p>cat.box</p>
      <Link href="/">
        Home
      </Link>
      <Link href="/simple">
        Simple Cat Box
      </Link>
      <Link href="/full">
        Full Twilight
      </Link>
    </div>
  )
}