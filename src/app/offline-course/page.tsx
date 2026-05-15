import Link from 'next/link';
import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import styles from './page.module.css';

export default function OfflineCoursePage() {
  return (
    <>
      <header>
        <TopUtilityBar />
        <MainNavigation />
      </header>

      <main className={styles.main}>

        {/* Page Hero */}
        <div className={styles.pageHero}>
          <div className={styles.container}>
            <Reveal animation="fade-up">
              <span className={styles.heroBadge}>🏫 Coming Soon</span>
              <h1 className={styles.pageHeroTitle}>Offline German Classes</h1>
              <p className={styles.pageHeroSub}>
                We are bringing in-person classroom sessions to you very soon! Register your interest now and be among the first to know when offline classes begin.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/contact-us" className={styles.ctaPrimary}>Register Interest</Link>
                <Link href="/online-course" className={styles.ctaSecondary}>Take Online Classes Instead →</Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Coming Soon Panel */}
        <div className={styles.section}>
          <div className={styles.container}>
            <Reveal animation="fade-up">
              <div className={styles.comingSoonBox}>
                <div className={styles.comingSoonIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4v18" />
                    <path d="M19 21V11l-6-4" />
                    <path d="M9 9h0" />
                    <path d="M9 13h0" />
                    <path d="M9 17h0" />
                  </svg>
                </div>
                <h2 className={styles.comingSoonTitle}>Offline Classes — Launching Soon!</h2>
                <p className={styles.comingSoonText}>
                  While we prepare our offline classroom experience, our online live classes are fully operational and just as effective.
                  Thousands of students have succeeded through our interactive online sessions.
                </p>
                <p className={styles.comingSoonText}>
                  Fill in your details via the contact form and we will personally notify you the moment offline classes launch in your area.
                </p>
                <div className={styles.heroCtas}>
                  <Link href="/contact-us" className={styles.ctaPrimaryDark}>Notify Me When Ready</Link>
                  <Link href="/online-course" className={styles.ctaOutline}>Explore Online Classes</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>



      </main>

      <Footer />
    </>
  );
}
