'use client';

import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import styles from '../privacy-policy/page.module.css';

export default function TermsOfServicePage() {
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
            <h1>Terms of Service</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className={styles.legalContent}>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the services of The Deutsch Hub, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>2. Course Registration</h2>
            <p>Registration for courses is subject to availability. We reserve the right to refuse service, terminate accounts, or cancel orders in our sole discretion.</p>

            <h2>3. Payment and Fees</h2>
            <p>All fees are payable in advance unless otherwise agreed. Installment options are available only for specific long-term enrollments. Fees once paid are non-refundable.</p>

            <h2>4. Code of Conduct</h2>
            <p>Students are expected to maintain a respectful and professional demeanor. Disruptive behavior or harassment will not be tolerated and may result in immediate dismissal without refund.</p>

            <h2>5. Intellectual Property</h2>
            <p>All course materials, including but not limited to study kits, worksheets, and presentations, are the intellectual property of The Deutsch Hub and may not be reproduced or distributed without permission.</p>

            <h2>6. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Your continued use of our services following any changes indicates your acceptance of the new terms.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
