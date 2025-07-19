// src/app/components/Footer.jsx
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>About EasyLabour</h3>
          <p>
            EasyLabour connects individuals with trusted labour help for daily needs electricians, plumbers,
            cleaners, and more with minimal platform fees. We ensure fairness to workers while offering reliability
            to customers.
          </p>
        </div>

        <div className={styles.column}>
          <h3>For Customers</h3>
          <ul>
            <li><a href="#">Book a Helper</a></li>
            <li><a href="#">View Services</a></li>
            <li><a href="#">Help & Support</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>For Professionals</h3>
          <ul>
            <li><a href="#">Register as a Labour</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Connect with Us</h3>
          <div className={styles.socialIcons}>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2025 EasyLabour. Empowering local workers with digital opportunity.</p>
      </div>
    </footer>
  );
}
