import Link from 'next/link';
import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import styles from './page.module.css';

const levels = [
  { level: '1', title: 'Beginner', desc: 'Start from scratch. Learn the foundations and basic concepts clearly without rushing.' },
  { level: '2', title: 'Intermediate', desc: 'Expand your vocabulary and engage in interactive activities and conversational practice.' },
  { level: '3', title: 'Advanced', desc: 'Achieve high proficiency and prepare for advanced certifications like Goethe, TestDaF, TELC, and ÖSD.' },
];

export default function OnlineCoursePage() {
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
              <span className={styles.heroBadge}>👩‍💻 Live Online</span>
              <h1 className={styles.pageHeroTitle}>Online German Classes</h1>
              <p className={styles.pageHeroSub}>
                Interactive live sessions from the comfort of your home. Learn German from beginners to advanced levels.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/contact-us" className={styles.ctaPrimary}>Enquire Now</Link>
                <a href="https://wa.me/97470757220" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>WhatsApp Us</a>
              </div>
            </Reveal>
          </div>
        </div>



        {/* Levels */}
        <div className={styles.sectionAlt}>
          <div className={styles.container}>
            <Reveal animation="fade-up">
              <span className={styles.sectionTag}>Curriculum</span>
              <h2 className={styles.h2Center}>Levels Taught</h2>
              <p className={styles.h2Sub}>We teach from beginners to advanced levels.</p>
            </Reveal>
            <div className={styles.levelsGrid}>
              {levels.map((l, i) => (
                <Reveal key={i} animation="fade-up" delay={i * 70}>
                  <div className={styles.levelCard}>
                    <span className={styles.cardNum}>0{l.level}</span>
                    <h3 className={styles.levelTitle}>{l.title}</h3>
                    <p className={styles.levelText}>{l.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <div className={styles.container}>
            <Reveal animation="fade-up">
              <div className={styles.ctaHeader}>
                <h2 className={styles.ctaSectionTitle}>Ready to Join the Next Batch?</h2>
                <p className={styles.ctaSectionSub}>Contact us to know the upcoming batch schedule and get enrolled today.</p>
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={200}>
              <div className={styles.ctaCards}>
                <a href="tel:+919967745988" className={styles.ctaCard}>
                  <div className={styles.ctaIconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div className={styles.ctaCardContent}>
                    <strong>Call / WhatsApp</strong>
                    <span>+91 9967745988</span>
                  </div>
                  <span className={styles.ctaArrow}>→</span>
                </a>
                <a href="mailto:thedeutschhub@gmail.com" className={styles.ctaCard}>
                  <div className={styles.ctaIconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div className={styles.ctaCardContent}>
                    <strong>Email Us</strong>
                    <span>thedeutschhub@gmail.com</span>
                  </div>
                  <span className={styles.ctaArrow}>→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
