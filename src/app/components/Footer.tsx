import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.footerLogo}>
              <img src="/logo/logpo.png" alt="The Deutsch Hub" className={styles.logoImg} />
            </Link>
            <p className={styles.brandTagline}>
              Empowering your German journey with premium online and offline courses.
            </p>
          </div>
          
          <div className={styles.linksCol}>
            <h3>Navigation</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/online-course">Online Course</Link></li>
              <li><Link href="/offline-course">Offline Course</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h3>Get in Touch</h3>
            <ul>
              <li><a href="tel:+919967745988">+91 9967745988</a></li>
              <li><a href="tel:+97470757220">+974 70757220</a></li>
              <li><a href="mailto:thedeutschhub@gmail.com">thedeutschhub@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} The Deutsch hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
