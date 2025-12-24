import Link from 'next/link'
import styles from '@/styles/PageNav.module.css'

export default function PageNav() {
  return (
    <nav className={styles.navMenu + " " + styles.show}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Careers</Link>
          </li>
        </ul>
    </nav>
  )
}
