import TopUtilityBar from '../components/TopUtilityBar';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import styles from './page.module.css';

export default function ContactUs() {
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
              <span className={styles.heroBadge}>Get In Touch</span>
              <h1 className={styles.pageHeroTitle}>Contact Us</h1>
              <p className={styles.pageHeroSub}>
                Reach us directly on below contact points or send a message using the enquiry form to discuss our courses and other fees // discounts // offers related information.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className={styles.quickCards}>
          <div className={styles.container}>
            <div className={styles.quickGrid}>
              <Reveal animation="fade-up" delay={100}>
                <a href="tel:+919967745988" className={styles.quickCard}>
                  <div className={styles.quickIconWrap}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div className={styles.quickCardContent}>
                    <strong>Call / WhatsApp</strong>
                    <span>+91 9967745988</span>
                    <span>+974 70757220</span>
                  </div>
                  <span className={styles.quickAction}>Tap to Call →</span>
                </a>
              </Reveal>
              <Reveal animation="fade-up" delay={200}>
                <a href="mailto:thedeutschhub@gmail.com" className={styles.quickCard}>
                  <div className={styles.quickIconWrap}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div className={styles.quickCardContent}>
                    <strong>Email Address</strong>
                    <span>thedeutschhub@gmail.com</span>
                  </div>
                  <span className={styles.quickAction}>Send Email →</span>
                </a>
              </Reveal>
              <Reveal animation="fade-up" delay={300}>
                <div className={styles.quickCard}>
                  <div className={styles.quickIconWrap}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <div className={styles.quickCardContent}>
                    <strong>Location</strong>
                    <span>Online — Available Worldwide</span>
                    <span className={styles.statusBadge}>Offline classes coming soon</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className={styles.mainLayout}>
          <div className={styles.container}>
            <div className={styles.splitLayout}>

              {/* Left: Info */}
              <div className={styles.infoColumn}>
                <Reveal animation="fade-up" delay={100}>
                  <div className={styles.infoBlock}>
                    <h3>For Course Details</h3>
                    <p>Contact us via <strong>call or WhatsApp</strong> to know the upcoming batch schedule, fee structure, and current offers.</p>
                    <a href="tel:+919967745988" className={styles.infoLink}>+91 9967745988</a>
                    <a href="tel:+97470757220" className={styles.infoLink}>+974 70757220</a>
                    <a href="mailto:thedeutschhub@gmail.com" className={styles.infoLink}>thedeutschhub@gmail.com</a>
                  </div>
                </Reveal>

                <Reveal animation="fade-up" delay={200}>
                  <div className={styles.infoBlock}>
                    <h3>Teaching Mode</h3>
                    <div className={styles.modeTag}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      Online — Available Now
                    </div>
                    <div className={styles.modeTagSoon}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      Offline — Coming Soon
                    </div>
                  </div>
                </Reveal>

                <Reveal animation="fade-up" delay={300}>
                  <div className={styles.infoBlock}>
                    <h3>Payment Options</h3>
                    <p>Installment options available for 3+ levels. Contact us for payment methods and current offers.</p>
                  </div>
                </Reveal>

                <Reveal animation="fade-up" delay={400}>
                  <div className={styles.infoBlock}>
                    <h3>Batch Hours</h3>
                    <p>Multiple flexible batch slots available. Contact us for the current schedule that suits you best.</p>
                  </div>
                </Reveal>
              </div>

              {/* Right: Form */}
              <Reveal animation="slide-right" delay={200}>
                <div className={styles.formColumn}>
                  <h2 className={styles.formTitle}>Send an Enquiry</h2>
                  <p className={styles.formSub}>We&rsquo;ll get back to you within 24 hours.</p>
                  <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" placeholder="e.g. Rahul Sharma" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone / WhatsApp *</label>
                      <input type="tel" id="phone" placeholder="+91 XXXXXXXXXX" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" placeholder="your@email.com" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="interest">I&rsquo;m interested in *</label>
                      <select id="interest" required>
                        <option value="" disabled>Select an option</option>
                        <option>Online German Course</option>
                        <option>Offline German Course (Coming Soon)</option>
                        <option>Exam Preparation (Goethe / TestDaF / TELC / ÖSD)</option>
                        <option>Corporate Training</option>
                        <option>1-on-1 Private Classes</option>
                        <option>Group Classes</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="level">Current German Level</label>
                      <select id="level">
                        <option value="">Complete Beginner</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message (Optional)</label>
                      <textarea id="message" rows={4} placeholder="Any specific questions or requirements..."></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      Send Enquiry →
                    </button>
                  </form>
                </div>
              </Reveal>

            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
