import Link from 'next/link';
import TopUtilityBar from './components/TopUtilityBar';
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header>
        <TopUtilityBar />
        <MainNavigation />
      </header>

      <main className={styles.main}>

        {/* ── Hero Section ── */}
        <div className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroTop}>
              <div className={styles.heroTopLeft}>
                <Reveal animation="fade-up">
                  <h1 className={styles.h1}>Master German,<br/>unlock your potential.</h1>
                </Reveal>
              </div>
              <div className={styles.heroTopRight}>
                <Reveal animation="fade-up" delay={200}>
                  <p className={styles.heroText}>
                    Learn German from beginners to advanced levels with The Deutsch hub. Flexible timings and expert guidance.
                  </p>
                  <div className={styles.heroBtns}>
                    <Link href="/contact-us" className={styles.btnPrimary}>Enquire Now →</Link>
                    <Link href="/online-course" className={styles.btnOutline}>View Courses</Link>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal animation="fade-up" delay={400}>
              <div className={styles.heroImageWrap}>
                <img src="/germany-berlin.jpg" alt="Learn German" className={styles.heroImage} />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Expertise Section ── */}
        <div className={styles.expertiseSection}>
          <div className={styles.container}>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseLeft}>
                <Reveal animation="fade-up">
                  <span className={styles.badge}>EXPERTISE</span>
                  <h2 className={styles.expertiseTitle}>Discover our commitment to excellence</h2>
                  <p className={styles.expertiseText}>
                    We offer German language courses and exam preparations tailored to your needs. 
                    Whether you are a beginner or looking to advance your skills, our interactive 
                    classes and dedicated instructors ensure you reach your goals.
                  </p>
                  <Link href="/contact-us" className={styles.btnPrimary}>Join Us →</Link>
                </Reveal>
              </div>
              <div className={styles.expertiseRight}>
                <Reveal animation="fade-up" delay={200}>
                  <img src="/germany-neuschwanstein.jpg" alt="Neuschwanstein Castle Germany - Learn German with The Deutsch Hub" className={styles.expertiseImage} />
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* ── Course Offerings ── */}
        <div className={styles.offeringsSection}>
          <div className={styles.container}>
            <Reveal animation="fade-up">
              <div className={styles.offeringsHeader}>
                <span className={styles.badge}>WHAT WE OFFER</span>
                <h2 className={styles.offeringsTitle}>Explore our comprehensive<br/>course offerings</h2>
              </div>
            </Reveal>
            <div className={styles.cardsGrid}>
              {([
                {
                  num: '01',
                  title: '1-on-1 Classes',
                  desc: 'Personalised sessions tailored entirely to your pace, goals, and schedule. Ideal for focused, rapid progress.',
                  link: '/contact-us',
                },
                {
                  num: '02',
                  title: 'Group Classes',
                  desc: 'Learn alongside peers in an interactive, collaborative environment. Build fluency through conversation and teamwork.',
                  link: '/contact-us',
                },
                {
                  num: '03',
                  title: 'Corporate Training',
                  desc: 'Customised German language programmes designed for working professionals and multinational teams.',
                  link: '/contact-us',
                },
                {
                  num: '04',
                  title: 'Exam Preparation',
                  desc: 'Structured coaching for Goethe, TestDaF, TELC, and ÖSD certifications with mock tests and proven strategies.',
                  link: '/contact-us',
                },
              ] as { num: string; title: string; desc: string; link: string }[]).map((card, i) => (
                <Reveal key={i} animation="fade-up" delay={i * 80}>
                  <div className={styles.card}>
                    <span className={styles.cardNum}>{card.num}</span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.desc}</p>
                    <Link href={card.link} className={styles.cardLink}>Enquire Now →</Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── Who Can Join ── */}
        <div className={styles.whoSection}>
          <div className={styles.container}>
            <Reveal animation="clip-wipe">
              <h2 className={styles.h2}>WHO CAN JOIN?</h2>
            </Reveal>
            <div className={styles.whoGrid}>
              <Reveal animation="fade-up" delay={80}>
                <div className={styles.whoCard}>
                  <p className={styles.whoLabel}>
                    All those people who are applying for Visa, going to Germany for further studies, research etc. looking for jobs, want to enhance or upgrade their job profile or salary, want to teach, want to get good marks in Graduation or certificate, Diploma and Advance Diploma or want to learn a foreign language for hobby.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal animation="fade-up" delay={600}>
              <div className={styles.whoCta}>
                <Link href="/contact-us" className={styles.btnPrimary}>Get Started Today</Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className={styles.testimonialsSection}>
          <div className={styles.container}>
            <Reveal animation="clip-wipe">
              <h2 className={styles.h2}>WHAT OUR STUDENTS SAY</h2>
            </Reveal>
            <div className={styles.testimonialsGrid}>
              <Reveal animation="fade-up" delay={100}>
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>&ldquo;</div>
                  <p className={styles.testimonialText}>
                    After just one conversation with Ma&rsquo;am, I felt motivated and confident enough to enrol.
                    The learning experience has been truly wonderful. Her focus has never been merely on completing
                    the syllabus — she ensures every student clearly understands the concepts before moving ahead.
                    She regularly conducts revisions, interactive activities, and practice sessions which make
                    the classes highly engaging and enjoyable.
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>W</div>
                    <div>
                      <strong>Working Professional</strong>
                      <span>German MNC Employee</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal animation="fade-up" delay={250}>
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>&ldquo;</div>
                  <p className={styles.testimonialText}>
                    She gives her best during training and never runs fast. The first few sessions were one-sided
                    as we were in a complete learning phase, but as we moved ahead it became very interactive.
                    She emphasises homework because all the contents are interconnected. The German language
                    course is not difficult — provided you&rsquo;re ready to put in the effort. Ultimately it&rsquo;s a win-win!
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>S</div>
                    <div>
                      <strong>Batch Student</strong>
                      <span>Batch started March 2024</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ── WhatsApp CTA ── */}
        <div className={styles.faqTeaser}>
          <div className={styles.container}>
            <Reveal animation="fade-up">
              <div className={styles.faqTeaserInner}>
                <div>
                  <h2 className={styles.faqTeaserTitle}>Have Questions?</h2>
                  <p className={styles.faqTeaserSub}>
                    Chat with us directly on WhatsApp to get instant answers about batches and fees.
                  </p>
                </div>
                <a href="https://wa.me/97470757220" target="_blank" rel="noopener noreferrer" className={styles.btnWhite}>
                  Chat on WhatsApp →
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Contact CTA ── */}
        <div className={styles.contactCtaSection}>
          <div className={styles.container}>
            <Reveal animation="fade-up">
              <div className={styles.contactCtaHeader}>
                <span className={styles.badge}>CONTACT US</span>
                <h2 className={styles.contactCtaTitle}>Ready to start your<br/>German journey?</h2>
                <p className={styles.contactCtaSub}>
                  Reach us directly or fill out our quick enquiry form to discuss courses, fees, and schedules.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={200}>
              <div className={styles.contactCtaCards}>
                <a href="tel:+919967745988" className={styles.contactCtaCard}>
                  <div className={styles.contactCtaIconWrap}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className={styles.contactCtaCardContent}>
                    <strong>Call / WhatsApp</strong>
                    <span>+91 9967745988</span>
                    <span>+974 70757220</span>
                  </div>
                  <span className={styles.contactCtaArrow}>→</span>
                </a>
                <a href="mailto:thedeutschhub@gmail.com" className={styles.contactCtaCard}>
                  <div className={styles.contactCtaIconWrap}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className={styles.contactCtaCardContent}>
                    <strong>Email Us</strong>
                    <span>thedeutschhub@gmail.com</span>
                  </div>
                  <span className={styles.contactCtaArrow}>→</span>
                </a>
                <Link href="/contact-us" className={styles.contactCtaCard}>
                  <div className={styles.contactCtaIconWrap}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className={styles.contactCtaCardContent}>
                    <strong>Send Enquiry</strong>
                    <span>Fill our quick enquiry form</span>
                  </div>
                  <span className={styles.contactCtaArrow}>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
