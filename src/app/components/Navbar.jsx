'use client';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>EasyLabour</div>
      <div className={styles.links}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
