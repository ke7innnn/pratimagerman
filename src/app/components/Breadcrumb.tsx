import Link from 'next/link';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb() {
  return (
    <div className={styles.breadcrumbWrap}>
      <div className={styles.container}>
        <Link href="/" className={styles.crumb}>Home</Link>
        <span className={styles.separator}>&gt;</span>
        <Link href="#" className={styles.crumb}>German language</Link>
        <span className={styles.separator}>&gt;</span>
        <span className={styles.current}>German courses</span>
      </div>
    </div>
  );
}
