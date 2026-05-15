import styles from './Breadcrumb.module.css';

export default function Breadcrumb() {
  return (
    <div className={styles.breadcrumbWrap}>
      <div className={styles.container}>
        <a href="/" className={styles.crumb}>Home</a>
        <span className={styles.separator}>&gt;</span>
        <a href="#" className={styles.crumb}>German language</a>
        <span className={styles.separator}>&gt;</span>
        <span className={styles.current}>German courses</span>
      </div>
    </div>
  );
}
