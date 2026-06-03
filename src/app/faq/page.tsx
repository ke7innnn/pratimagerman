'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import styles from './page.module.css';
import faqHero from '../../../public/hero/faq.webp';

const faqs = [
  {
    q: 'Who can join the classes?',
    a: 'All those people who are applying for a Visa, going to Germany for further studies or research, looking for jobs, want to enhance or upgrade their job profile or salary, want to teach, want to get good marks in Graduation or certificate / Diploma / Advance Diploma, or simply want to learn a foreign language as a hobby.',
    category: 'General',
  },
  {
    q: 'When does the batch start?',
    a: 'We provide various types of batches. For the next preferred batch, kindly contact our office directly via call, WhatsApp, or email.',
    category: 'Admissions',
  },
  {
    q: 'Do you provide jobs?',
    a: 'YES — we provide job assistance in India. For jobs in Germany, we can give you some references, but we DO NOT GUARANTEE JOBS IN GERMANY.',
    category: 'Career',
  },
  {
    q: 'Can I pay in installments?',
    a: 'Yes. You can pay in installments if you are enrolling for three or more levels. If the payment is for one level only, it has to be paid in a single go.',
    category: 'Fees',
  },
  {
    q: 'Do you give a certificate?',
    a: 'Goethe Institute / Max Mueller Bhavan is the only certifying authority. All certificates are provided by them. If you study at our institute, you can appear directly for B1 (skipping A1 & A2 exams), and then C1 — saving you 9–15 months and ₹13,200 – ₹22,200 in exam fees. We prepare students for all four parts of the exam. Registration fees are paid directly to the exam authority — we will guide you through the entire process.',
    category: 'Certification',
  },
  {
    q: 'What is the fee payment method?',
    a: 'Please contact us on our given numbers for details about payment methods, discounts, and current offers.',
    category: 'Fees',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const heroY = useTransform(scrollYProgress, [0, 0.25], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div ref={containerRef} className={styles.mainWrapper}>
      <header>
        <TopUtilityBar />
        <MainNavigation />
      </header>

      <main>
        {/* ── CINEMATIC HERO ── */}
        <section className={styles.heroSection}>
          <motion.div className={styles.heroImageBg} style={{ y: heroY }}>
            <Image
              src={faqHero}
              alt="FAQ German language school"
              fill
              priority
              placeholder="blur"
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </motion.div>
          <div className={styles.heroOverlay} />

          <motion.div style={{ opacity: heroOpacity }} className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroBadge}
            >
              <span>KNOWLEDGE BASE</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.h1}
            >
              Questions<br /><span className={styles.h1Thin}>Answered</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroSubText}
            >
              Everything you need to know before starting your German language journey with us.
            </motion.p>
          </motion.div>

          {/* Stat chips on hero */}
          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {[{ n: '6', l: 'Questions Covered' }, { n: '98%', l: 'Student Satisfaction' }, { n: '10+', l: 'Years Experience' }].map((s, i) => (
              <div key={i} className={styles.heroStat}>
                <strong>{s.n}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </motion.div>

          <div className={styles.heroScrollHint}>
            <span>Scroll</span>
            <div className={styles.scrollLine} />
          </div>
        </section>

        {/* ── FAQ ACCORDION ── */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>

            {/* Side label */}
            <div className={styles.faqSide}>
              <div className={styles.sideLabel}>
                <span>F</span><span>A</span><span>Q</span>
              </div>
              <div className={styles.sideImage}>
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                  alt="Students discussing German"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1300px) 100vw, 280px"
                />
                <div className={styles.sideImageOverlay} />
                <div className={styles.sideImageBadge}>
                  <strong>Still unsure?</strong>
                  <a href="https://wa.me/97470757220" target="_blank" rel="noopener noreferrer">Chat with us →</a>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`${styles.faqItem} ${openIndex === i ? styles.faqOpen : ''}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggle(i)}
                    aria-expanded={openIndex === i}
                  >
                    <div className={styles.faqQuestionLeft}>
                      <span className={styles.faqCategory}>{faq.category}</span>
                      <span className={styles.faqText}>{faq.q}</span>
                    </div>
                    <span className={styles.faqChevron}>
                      <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"
                        style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)' }}
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.faqAnswerWrap}
                      >
                        <div className={styles.faqAnswer}>
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              viewport={{ once: true }}
              className={styles.ctaBox}
            >
              <h2>Still have questions?</h2>
              <p>Reach out to us directly — we&apos;re happy to help you start your journey.</p>
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
