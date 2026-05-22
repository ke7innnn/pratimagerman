'use client';

import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.mainWrapper}>
      <header>
        <TopUtilityBar />
        <MainNavigation />
      </header>

      <main className={styles.legalMain}>
        <div className={styles.container}>
          <div className={styles.legalHeader}>
            <span className={styles.badge}>LEGAL</span>
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className={styles.legalContent}>
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you fill out a contact form, register for a course, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to process your requests and registrations, and to communicate with you about courses, updates, and related information.</p>

            <h2>3. Information Sharing</h2>
            <p>We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>

            <h2>4. Data Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <strong>thedeutschhub@gmail.com</strong>.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
