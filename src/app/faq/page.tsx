'use client';

import { useState } from 'react';
import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import styles from './page.module.css';

const faqs = [
  {
    q: 'Who can join the classes?',
    a: 'All those people who are applying for a Visa, going to Germany for further studies or research, looking for jobs, want to enhance or upgrade their job profile or salary, want to teach, want to get good marks in Graduation or certificate / Diploma / Advance Diploma, or simply want to learn a foreign language as a hobby.',
  },
  {
    q: 'When does the batch start?',
    a: 'We provide various types of batches. For the next preferred batch, kindly contact our office directly via call, WhatsApp, or email.',
  },
  {
    q: 'Do you provide jobs?',
    a: 'YES — we provide job assistance in India. For jobs in Germany, we can give you some references, but we DO NOT GUARANTEE JOBS IN GERMANY.',
  },
  {
    q: 'Can I pay in installments?',
    a: 'Yes. You can pay in installments if you are enrolling for three or more levels. If the payment is for one level only, it has to be paid in a single go.',
  },
  {
    q: 'Do you give a certificate?',
    a: 'Goethe Institute / Max Mueller Bhavan is the only certifying authority. All certificates are provided by them. If you study at our institute, you can appear directly for B1 (skipping A1 & A2 exams), and then C1 — saving you 9–15 months and ₹13,200 – ₹22,200 in exam fees. We prepare students for all four parts of the exam. Registration fees are paid directly to the exam authority — we will guide you through the entire process.',
  },
  {
    q: 'What is the fee payment method?',
    a: 'Please contact us on our given numbers for details about payment methods, discounts, and current offers.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <header>
        <TopUtilityBar />
        <MainNavigation />
      </header>

      <main className={styles.main}>

        {/* Page Header */}
        <div className={styles.pageHero}>
          <div className={styles.container}>
            <Reveal animation="fade-up">
              <span className={styles.heroBadge}>Answers</span>
              <h1 className={styles.pageHeroTitle}>Frequently Asked<br />Questions</h1>
              <p className={styles.pageHeroSub}>
                Everything you need to know before starting your German journey with us.
              </p>
            </Reveal>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <Reveal key={i} animation="fade-up" delay={i * 60}>
                  <div className={`${styles.faqItem} ${openIndex === i ? styles.faqOpen : ''}`}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => toggle(i)}
                      aria-expanded={openIndex === i}
                    >
                      <span>{faq.q}</span>
                      <span className={styles.faqChevron}>{openIndex === i ? '−' : '+'}</span>
                    </button>
                    {openIndex === i && (
                      <div className={styles.faqAnswer}>
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Still have questions */}
            <Reveal animation="fade-up" delay={200}>
              <div className={styles.faqCta}>
                <div className={styles.ctaHeader}>
                  <h3>Still have questions?</h3>
                  <p>Reach out to us directly — we&rsquo;re happy to help!</p>
                </div>
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
              </div>
            </Reveal>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
