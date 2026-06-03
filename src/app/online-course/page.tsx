'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import styles from './page.module.css';

const levels = [
  { id: 'A1', title: 'Beginner', desc: 'No prior knowledge needed. Learn to introduce yourself, use basic phrases, and understand simple everyday expressions.', tier: 'foundation', tierLabel: 'Foundation' },
  { id: 'A2', title: 'Elementary', desc: 'Understand sentences on familiar topics — shopping, family, work. Can communicate in simple, routine tasks.', tier: 'foundation', tierLabel: 'Foundation' },
  { id: 'B1', title: 'Intermediate', desc: 'Handle most travel situations. Describe experiences and events. Produce simple connected text on familiar topics.', tier: 'independence', tierLabel: 'Independence' },
  { id: 'B2', title: 'Upper-Intermediate', desc: 'Understand complex texts. Interact fluently with native speakers. Produce clear, detailed writing on many subjects.', tier: 'independence', tierLabel: 'Independence' },
  { id: 'C1', title: 'Advanced', desc: 'Express ideas fluently and spontaneously. Use language flexibly for academic, professional, and social purposes.', tier: 'mastery', tierLabel: 'Mastery' },
  { id: 'C2', title: 'Mastery', desc: 'Near-native proficiency. Understand virtually everything, express with precision, and differentiate finer shades of meaning.', tier: 'mastery', tierLabel: 'Mastery' }
];

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Interactive Live Batches',
    desc: 'Engage in real-time, highly interactive classes with live feedback and recorded session access.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: 'Personalized Attention',
    desc: 'Small batch sizes designed to prioritize your progress and build your speaking confidence.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    label: 'Goethe Exam Prep',
    desc: 'Structured prep focusing on official Goethe modules, intensive writing, and exam simulations.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    label: 'Global Community',
    desc: 'Learn alongside dedicated students connecting from Germany, India, Qatar, and beyond.',
  },
];

export default function OnlineCoursePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const floatY1 = useTransform(scrollYProgress, [0.05, 0.3], ["0px", "-60px"]);
  const floatY2 = useTransform(scrollYProgress, [0.05, 0.3], ["0px", "-40px"]);

  return (
    <div ref={containerRef} className={styles.mainWrapper}>
      <header>
        <TopUtilityBar />
        <MainNavigation />
      </header>

      <main className={styles.main}>

        {/* ── FULL BLEED HERO ── */}
        <section className={styles.heroSection}>
          <motion.div className={styles.heroImageBg} style={{ y: heroY }}>
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
              alt="Online German learning laptop session"
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
            <div className={styles.heroOverlay} />
          </motion.div>

          {/* Floating accent cards */}
          <motion.div className={styles.floatCard1} style={{ y: floatY1 }}>
            <span className={styles.floatIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                <path d="M12 2a6 6 0 0 1 6 6v1H6V8a6 6 0 0 1 6-6z" />
              </svg>
            </span>
            <div>
              <strong>98%</strong>
              <p>Pass Rate</p>
            </div>
          </motion.div>
          <motion.div className={styles.floatCard2} style={{ y: floatY2 }}>
            <span className={styles.floatIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
            <div>
              <strong>A1 – C2</strong>
              <p>All Levels</p>
            </div>
          </motion.div>

          <motion.div style={{ opacity: heroOpacity }} className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroBadge}
            >
              <span>LIVE ONLINE CLASSES</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.h1}
            >
              Master German<br/>From Anywhere
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroSubText}
            >
              Interactive live sessions from the comfort of your home. Learn German from beginners to advanced levels with proven methodologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroBtns}
            >
              <Link href="/contact-us" className={styles.btnPrimary}>Enquire Now</Link>
              <a href="https://wa.me/97470757220" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>WhatsApp Us</a>
            </motion.div>
          </motion.div>

          <div className={styles.heroScrollHint}>
            <span>Scroll to explore</span>
            <div className={styles.scrollLine} />
          </div>
        </section>

        {/* ── FEATURES STRIP ── */}
        <section className={styles.featuresStrip}>
          <div className={styles.container}>
            <div className={styles.featuresGrid}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={styles.featureCard}
                >
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <div>
                    <strong>{f.label}</strong>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMAGERY BAND ── */}
        <section className={styles.imageryBand}>
          <div className={styles.imageryGrid}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={styles.imageryItem}
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                alt="Student studying German online"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.imageryOverlay}><span>Live Learning</span></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`${styles.imageryItem} ${styles.imageryItemTall}`}
            >
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
                alt="German language books and notes"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.imageryOverlay}><span>Goethe Expert</span></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={styles.imageryItem}
            >
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                alt="Student celebrating success"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.imageryOverlay}><span>Proven Results</span></div>
            </motion.div>
          </div>
        </section>

        {/* ── BENTO BOX CURRICULUM ── */}
        <section className={styles.bentoSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={styles.sectionHeader}
            >
              <span className={styles.sectionBadge}>CURRICULUM</span>
              <h2 className={styles.sectionTitle}>Levels Taught</h2>
              <p className={styles.sectionSubText}>From absolute beginner to near-native mastery — every stage of your German journey covered.</p>
            </motion.div>

            <div className={styles.bentoGrid}>
              {levels.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`${styles.bentoBox} ${
                    l.tier === 'foundation'
                      ? styles.foundationCard
                      : l.tier === 'independence'
                      ? styles.independenceCard
                      : styles.masteryCard
                  }`}
                >
                  <div className={styles.bentoContent}>
                    <div className={styles.cardHeader}>
                      <span className={styles.levelBadge}>{l.id}</span>
                      <span className={styles.tierBadge}>{l.tierLabel}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{l.title}</h3>
                    <div className={styles.separator}></div>
                    <p className={styles.cardDesc}>{l.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className={styles.ctaBox}
            >
              <h2>Ready to Join the Next Batch?</h2>
              <p>Contact us to know the upcoming batch schedule and get enrolled today.</p>
              <div className={styles.ctaBtns}>
                <a href="tel:+919967745988" className={styles.btnMassiveAlt}>Call Us</a>
                <a href="mailto:thedeutschhub@gmail.com" className={styles.btnMassive}>Email Us</a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
