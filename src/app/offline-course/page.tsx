'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import styles from './page.module.css';
import offlineHero from '../../../public/hero/offline.webp';

export default function OfflineCoursePage() {
  return (
    <div className={styles.mainWrapper}>
      <header>
        <TopUtilityBar />
        <MainNavigation />
      </header>

      <main>
        {/* ── HERO BG ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroImageBg}>
            <Image
              src={offlineHero}
              alt="Offline German classroom coming soon"
              fill
              priority
              placeholder="blur"
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>
          <div className={styles.heroOverlay} />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heroContent}
          >
            {/* Animated badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={styles.comingSoonBadge}
            >
              <span className={styles.badgeDot} />
              <span>IN-PERSON CLASSES</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={styles.h1}
            >
              Coming<br />
              <span className={styles.h1Accent}>Soon</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroSubText}
            >
              Our offline classroom experience is launching soon. A dedicated learning center with small batches, expert instruction, and a fully immersive environment.
            </motion.p>



            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroBtns}
            >
              <Link href="/contact-us" className={styles.btnPrimary}>
                Notify Me
              </Link>
              <Link href="/online-course" className={styles.btnOutline}>
                Try Online Classes →
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating info card */}
          <motion.div
            className={styles.floatCard}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ animationDelay: '1s' }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className={styles.floatCardInner}
            >
              <span className={styles.floatIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </span>
              <div>
                <strong>Be First to Know</strong>
                <p>Register your interest today</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── TEASER CARDS ── */}
        <section className={styles.teaserSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={styles.teaserHeader}
            >
              <span className={styles.sectionBadge}>WHAT TO EXPECT</span>
              <h2 className={styles.sectionTitle}>The Offline Experience</h2>
            </motion.div>

            <div className={styles.teaserGrid}>
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                      <path d="M12 17v4" />
                      <path d="M8 21h8" />
                    </svg>
                  ),
                  title: 'Dedicated Classroom',
                  desc: 'Premium learning space equipped with smart boards, study materials, and a focused academic atmosphere.'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: 'Personal Instruction',
                  desc: 'Face-to-face coaching from our certified Goethe-trained expert who knows every student by name.'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                      <path d="M6 6h10" />
                      <path d="M6 10h10" />
                    </svg>
                  ),
                  title: 'Premium Study Kits',
                  desc: 'Printed workbooks, vocabulary flash cards, grammar charts, and full mock exam papers — all included.'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                  title: 'Intensive Batches',
                  desc: 'Small groups of max 12 students ensure personalised progress tracking and accelerated learning.'
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={styles.teaserCard}
                >
                  <span className={styles.teaserIcon}>{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOTIFY CTA ── */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={styles.ctaBox}
            >
              <h2>Don&apos;t Miss the Launch</h2>
              <p>Register your interest now and be the first to join when we open our classroom doors.</p>
              <div className={styles.ctaBtns}>
                <a href="tel:+919967745988" className={styles.btnMassiveAlt}>Call Us</a>
                <a href="mailto:thedeutschhub@gmail.com" className={styles.btnMassive}>Register Interest</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
