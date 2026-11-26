/* eslint-disable no-unused-vars -- delete this line when you start writing the code */
// Step 8: Navbar - shown on every screen.
import styles from './Navbar.module.css'

/**
 * @param {object} props
 * @param {(screen: string) => void} props.onNavigate - call it with the screen to show ("home" / "create")
 */
export default function Navbar({ onNavigate }) {
  // TODO: a <nav> with the site name and two buttons: "Home" and "Create Story"

  return (
    <nav className={styles.navbar}>
      <span className={styles.logo} onClick={() => onNavigate('home')}>News SPA</span>

      <div className={styles.links}>
        <button className={styles.btn} onClick={() => onNavigate('home')}>Home</button>
        <button className={styles.btn} onClick={() => onNavigate('create')}>Create Story</button>
      </div>

    </nav>
  )
}

