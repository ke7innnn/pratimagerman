'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import styles from './page.module.css';
import contactHero from '../../../public/hero/online.webp';
import studentsStudying from '../../../public/images/students-studying.webp';

const CONTACT_WHATSAPP = '97470757220';

const contactMethods = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Call or WhatsApp',
    desc: 'Speak directly with our advisors',
    lines: ['🇮🇳 +91 9967745988', '🇶🇦 +974 70757220'],
    href: ['tel:+919967745988', 'tel:+97470757220'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: 'Email Us',
    desc: 'We reply within 24 hours',
    lines: ['thedeutschhub@gmail.com'],
    href: ['mailto:thedeutschhub@gmail.com'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Office Hours',
    desc: 'We are available 6 days a week',
    lines: ['Mon – Sat: 9 AM – 8 PM', 'Sunday: Closed'],
    href: [],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="18" x="3" y="3" rx="2" />
        <rect width="8" height="18" x="13" y="3" rx="2" />
        <path d="M9 9h.01M9 13h.01M15 9h.01M15 13h.01" />
      </svg>
    ),
    title: 'Registered Offices',
    desc: 'Our official locations',
    lines: ['🇮🇳 Mumbai, MH (Registered)', '🇶🇦 Doha, Qatar (Corporate)'],
    href: [],
  },
];

export default function ContactUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const heroY = useTransform(scrollYProgress, [0, 0.25], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  // Controlled form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [level, setLevel] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = 
      `Hello Pratima German Language Institute,\n\n` +
      `I am interested in learning more about your German courses. Here are my details:\n\n` +
      `Name: ${name}\n` +
      `WhatsApp Number: ${phone}\n` +
      `Email: ${email}\n` +
      `Interested In: ${interest || 'Not specified'}\n` +
      `Current Level: ${level || 'Not specified'}\n` +
      `Message: ${message || 'No additional message'}\n\n` +
      `Please get in touch with me at your earliest convenience.\n\nThank you!`;

    const encodedText = encodeURIComponent(formattedMessage);
    
    // Detect mobile device to decide between WhatsApp App and WhatsApp Web
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    const whatsappUrl = isMobile
      ? `https://api.whatsapp.com/send?phone=${CONTACT_WHATSAPP}&text=${encodedText}`
      : `https://web.whatsapp.com/send?phone=${CONTACT_WHATSAPP}&text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={containerRef} className={styles.mainWrapper}>
      <header>
        <TopUtilityBar />
        <MainNavigation />
      </header>

      <main className={styles.main}>

        {/* ── CINEMATIC HERO ── */}
        <section className={styles.heroSection}>
          <motion.div className={styles.heroImageBg} style={{ y: heroY }}>
            <Image
              src={contactHero}
              alt="Contact Pratima German Language Institute"
              fill
              priority
              placeholder="blur"
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </motion.div>
          <div className={styles.heroOverlay} />

          {/* Floating info card */}
          <motion.div
            className={styles.floatAccent}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.floatAccentDot} />
            <span>Available Mon – Sat · 9AM–8PM</span>
          </motion.div>

          <motion.div style={{ opacity: heroOpacity }} className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroBadge}
            >
              <span>GET IN TOUCH</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.h1}
            >
              Start Your<br />German Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroSubText}
            >
              Reach us directly or send a message — discuss courses, fees, and current offers with our friendly team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroBtns}
            >
              <a href="#contact-form" className={styles.btnPrimary}>Send a Message</a>
              <a href="https://wa.me/97470757220" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>WhatsApp Us</a>
            </motion.div>
          </motion.div>

          <div className={styles.heroScrollHint}>
            <span>Scroll</span>
            <div className={styles.scrollLine} />
          </div>
        </section>

        {/* ── CONTACT METHODS BAR ── */}
        <section className={styles.methodsBar}>
          <div className={styles.container}>
            <div className={styles.methodsGrid}>
              {contactMethods.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={styles.methodCard}
                >
                  <span className={styles.methodIcon}>{m.icon}</span>
                  <div className={styles.methodBody}>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                    {m.lines.map((line, li) =>
                      m.href[li] ? (
                        <a key={li} href={m.href[li]} className={styles.methodLink}>{line}</a>
                      ) : (
                        <span key={li} className={styles.methodText}>{line}</span>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPLIT: IMAGE + FORM ── */}
        <section id="contact-form" className={styles.contactSection}>
          <div className={styles.splitLayout}>

            {/* Left: Lifestyle image stack */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={styles.imageStack}
            >
              <div className={styles.imgMain}>
                <Image
                  src={studentsStudying}
                  alt="Students learning German together"
                  fill
                  placeholder="blur"
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1100px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={styles.formColumn}
            >
              <div className={styles.formBox}>
                <div className={styles.formHeader}>
                  <span className={styles.formBadge}>ENQUIRY FORM</span>
                  <h2 className={styles.formTitle}>Send an Enquiry</h2>
                  <p className={styles.formSubText}>We&apos;ll get back to you within 24 hours.</p>
                </div>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Rahul Sharma"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">WhatsApp Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 00000 00000"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="hello@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="interest">Interested In</label>
                    <select
                      id="interest"
                      required
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                    >
                      <option value="" disabled>Select a course</option>
                      <option>Online Classes (Live)</option>
                      <option>Offline Classes (In-Person)</option>
                      <option>Goethe Exam Prep</option>
                      <option>Corporate Training</option>
                      <option>1-on-1 Private Sessions</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="level">Current Level</label>
                    <select
                      id="level"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                    >
                      <option value="" disabled>Select your level</option>
                      <option>Complete Beginner (A1)</option>
                      <option>Elementary (A2)</option>
                      <option>Intermediate (B1)</option>
                      <option>Upper-Intermediate (B2)</option>
                      <option>Advanced (C1)</option>
                      <option>Mastery (C2)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your goals..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>Send Message</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
