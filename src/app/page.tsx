'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import TopUtilityBar from './components/TopUtilityBar';
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
import styles from './page.module.css';
import homeHero from '../../public/hero/home.webp';
import bentoStudy from '../../public/images/bento-study.webp';
import bentoCorporate from '../../public/images/bento-corporate.webp';
import bentoSpeaking from '../../public/images/bento-speaking.webp';
import masonryGermany from '../../public/images/masonry-germany.webp';
import masonryBerlin from '../../public/images/masonry-berlin.webp';
import masonryMunich from '../../public/images/masonry-munich.webp';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Expertise Masonry Parallax effects
  const masonryRef = useRef(null);
  const { scrollYProgress: masonryScroll } = useScroll({
    target: masonryRef,
    offset: ["start end", "end start"]
  });

  // Balanced parallax offsets that prevent navigation header collision
  const yImage1 = useTransform(masonryScroll, [0, 1], [-40, 40]);
  const yImage2 = useTransform(masonryScroll, [0, 1], [-10, 10]);
  const yImage3 = useTransform(masonryScroll, [0, 1], [30, -50]);

  return (
    <div ref={containerRef} className={styles.mainWrapper}>
      <header>
        <TopUtilityBar />
        <MainNavigation />
      </header>

      <main className={styles.main}>
        {/* ── FULL-SCREEN CINEMATIC HERO ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroImageBg}>
            <Image 
              src={homeHero} 
              alt="Students collaborating" 
              fill
              priority
              placeholder="blur"
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
            <div className={styles.heroOverlay}></div>
          </div>
          
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>ELEVATE YOUR FUTURE</span>
            </div>
            <h1 className={styles.h1}>
              The Art of<br/>German Language
            </h1>
            <p className={styles.heroSubText}>
              Immersive, aesthetic, and proven methodology to master German. Join the elite network of learners.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/contact-us" className={styles.btnPrimary}>
                Start Your Journey
              </Link>
              <Link href="/online-course" className={styles.btnOutline}>
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── BENTO BOX OFFERINGS GRID ── */}
        <section className={styles.bentoSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>WHAT WE OFFER</span>
              <h2 className={styles.sectionTitle}>Master German on your terms</h2>
            </div>

            <div className={styles.bentoGrid}>
              
              {/* Card 01 - Intensive Goethe Prep (Premium Horizontal Split Card updated to C2) */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`${styles.bentoBox} ${styles.bentoLarge}`}
              >
                <div className={styles.bentoImgWrap}>
                  <Image src={bentoStudy} alt="Study" fill placeholder="blur" style={{ objectFit: 'cover' }} sizes="(max-width: 1100px) 100vw, 33vw" />
                  <div className={styles.bentoImgOverlay}></div>
                </div>
                <div className={styles.bentoContent}>
                  <div className={styles.bentoMeta}>
                    <span className={styles.bentoBadgeTiny}>ACADEMIC EXCELLENCE</span>
                    <div className={styles.bentoNum}>01</div>
                  </div>
                  
                  <div className={styles.bentoHeaderGroup}>
                    <div className={styles.bentoIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                    </div>
                    <h3>Intensive Goethe Prep</h3>
                  </div>

                  <p>Guaranteed success methodologies for all Goethe levels from A1 to C2. Learn to excel in every exam section with expert material.</p>
                  
                  <div className={styles.levelsWrapper}>
                    <span className={styles.levelsLabel}>Levels:</span>
                    <div className={styles.levelPills}>
                      <span className={styles.levelPill}>A1</span>
                      <span className={styles.levelPill}>A2</span>
                      <span className={styles.levelPill}>B1</span>
                      <span className={styles.levelPill}>B2</span>
                      <span className={styles.levelPill}>C1</span>
                      <span className={styles.levelPill}>C2</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 02 - Corporate German (Full-bleed Luxurious Image overlay card) */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`${styles.bentoBox} ${styles.bentoFullBleed}`}
              >
                <div className={styles.bentoBgImage}>
                  <Image src={bentoCorporate} alt="Corporate" fill placeholder="blur" style={{ objectFit: 'cover' }} sizes="(max-width: 1100px) 100vw, 33vw" />
                  <div className={styles.bentoDarkOverlay}></div>
                </div>
                <div className={styles.bentoBleedContent}>
                  <div className={styles.bleedHeader}>
                    <span className={styles.bleedBadge}>CORPORATE</span>
                    <div className={styles.bleedNum}>02</div>
                  </div>

                  <div className={styles.bleedBody}>
                    <div className={styles.bleedTitleGroup}>
                      <div className={styles.bentoIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      </div>
                      <h3>Corporate German</h3>
                    </div>
                    <p>Tailored vocabulary and etiquette training for professionals shifting to DACH regions.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 03 - Immersive Speaking (Full-bleed Luxurious Image overlay card) */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`${styles.bentoBox} ${styles.bentoFullBleed}`}
              >
                <div className={styles.bentoBgImage}>
                  <Image src={bentoSpeaking} alt="Speaking" fill placeholder="blur" style={{ objectFit: 'cover' }} sizes="(max-width: 1100px) 100vw, 33vw" />
                  <div className={styles.bentoDarkOverlay}></div>
                </div>
                <div className={styles.bentoBleedContent}>
                  <div className={styles.bleedHeader}>
                    <span className={styles.bleedBadge}>SPEAKING</span>
                    <div className={styles.bleedNum}>03</div>
                  </div>

                  <div className={styles.bleedBody}>
                    <div className={styles.bleedTitleGroup}>
                      <div className={styles.bentoIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      </div>
                      <h3>Immersive Speaking</h3>
                    </div>
                    <p>Speak from day one. Overcome the fear of making mistakes in our dynamic group sessions.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── MASONRY IMAGE GRID (Refined with Parallax Scroll) ── */}
        <section ref={masonryRef} className={styles.masonrySection}>
          <div className={styles.container}>
            <div className={styles.masonryGrid}>
              <div className={styles.masonryText}>
                <span className={styles.sectionBadge}>EXPERTISE</span>
                <h2>Immerse yourself<br/>in a new <em>culture</em></h2>
                <p>We don't just teach grammar. We unlock a new world of opportunities in Germany.</p>
                
                <div className={styles.masonryStats}>
                  <div className={styles.statBox}>
                    <div className={styles.statLine}>
                      <strong>98%</strong>
                    </div>
                    <span>Success Rate</span>
                  </div>
                  <div className={styles.statBox}>
                    <div className={styles.statLine}>
                      <strong>★</strong>
                    </div>
                    <span>Goethe Certified</span>
                  </div>
                </div>
              </div>

              {/* 3 Photos with scroll-linked Parallax offsets */}
              <div className={styles.masonryImages}>
                 <div className={styles.masonryImgCol}>
                   <motion.div style={{ y: yImage1 }} className={styles.parallaxImageWrapper}>
                     <Image src={masonryGermany} alt="Germany architecture" className={styles.imgTilted} fill placeholder="blur" style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                   </motion.div>
                 </div>
                 
                 <div className={styles.masonryImgCol} style={{ paddingTop: '100px' }}>
                   <motion.div style={{ y: yImage2 }} className={styles.parallaxImageWrapper}>
                     <Image src={masonryBerlin} alt="Berlin" fill placeholder="blur" style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                   </motion.div>
                   
                   <motion.div style={{ y: yImage3 }} className={`${styles.parallaxImageWrapper} ${styles.offsetDown}`}>
                     <Image src={masonryMunich} alt="Munich" fill placeholder="blur" style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                   </motion.div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={styles.testimonialsHeader}
            >
              <span className={styles.sectionBadge}>STUDENT REVIEWS</span>
              <h2 className={styles.testimonialsTitle}>Words from our learners</h2>
            </motion.div>
            <div className={styles.featuredTestimonial}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p className={styles.testimonialText} style={{ fontSize: '18px', lineHeight: '1.8', fontStyle: 'italic', color: 'var(--color-text-main)', marginBottom: '24px' }}>
                &ldquo;I would like to share my feedback for our German Teacher, Pratima Bidkar Ma&rsquo;am.<br/><br/>
                I am a working professional associated with one of the German MNCs. I always had a desire to learn something new, especially the German language, but due to professional and personal commitments, it was never possible to pursue it seriously.<br/><br/>
                One day, I came across Ma&rsquo;am&rsquo;s post regarding German language classes and decided to enquire about it. After just one conversation with her, I felt motivated and confident enough to enroll myself. We started our sessions around two months ago, and since then, the learning experience has been truly wonderful.<br/><br/>
                Initially, Ma&rsquo;am had mentioned that completing a level may take around three months for beginners like us. However, her focus has never been merely on completing the syllabus. She always ensures that every concept is thoroughly understood.&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar} style={{ background: 'var(--color-primary)', color: '#fff' }}>★</div>
                <div>
                  <strong>Verified Student</strong>
                  <span>Working Professional · German MNC</span>
                </div>
              </div>
            </div>

            <div className={styles.testimonialsGrid} style={{ marginTop: '40px' }}>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>&ldquo;After just one conversation with Ma&rsquo;am, I felt motivated and confident enough to enroll. Since then, the learning experience has been truly wonderful. Her priority is our learning and grasping ability rather than just finishing the portion. The sessions are always full of energy, fun, and positive learning.&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>★</div>
                  <div>
                    <strong>Verified Student</strong>
                    <span>Working Professional · German MNC</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`${styles.testimonialCard} ${styles.testimonialCardAccent}`}
              >
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>&ldquo;She gives her best during every training. Never rushes through content. As we progressed it became highly interactive. She emphasises homework because all contents are interconnected. Ultimately it&rsquo;s a win-win situation — you put in effort, you see results.&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>★</div>
                  <div>
                    <strong>Verified Student</strong>
                    <span>A1 Batch · March 2024</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>&ldquo;The German language course is not difficult provided the trainees are ready to put in the efforts. Ma&rsquo;am regularly conducts revisions, interactive activities, and practice sessions, which make the classes highly engaging and enjoyable. She creates a very comfortable environment.&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>★</div>
                  <div>
                    <strong>Verified Student</strong>
                    <span>Online Batch · 2024</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── FLOATING CALL TO ACTION ── */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className={styles.ctaBox}
            >
              <h2>Ready for Deutschland?</h2>
              <p>Don't wait. Join the community of successful German speakers today.</p>
              <Link href="/contact-us" className={styles.btnMassive}>
                Book Free Trial
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
