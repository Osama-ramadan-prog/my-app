import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}> Voya</h1>
          <p className={styles.subtitle}>بوابتك الذكية لتنظيم رحلة العمر في مكان واحد</p>
          <button className={styles.ctaButton} onClick={() => navigate('/flights')}>
            ابدأ رحلتك الآن
          </button>
        </div>
      </section>

      {/* 2. Features Section */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <span className={styles.icon}>⚡</span>
          <h3>حجز سريع</h3>
          <p>تأكيد فوري لرحلاتك وتكاسيك بدون انتظار.</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>🛡️</span>
          <h3>أمان تام</h3>
          <p>نضمن لك أفضل الفنادق والخدمات الموثوقة.</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>💰</span>
          <h3>أفضل الأسعار</h3>
          <p>مقارنة ذكية لتوفير ميزانيتك لأقصى حد.</p>
        </div>
      </section>

      {/* 3. Services Grid */}
      <h2 className={styles.sectionTitle}>اكتشف خدماتنا</h2>
      <div className={styles.grid}>
        <div className={styles.card} onClick={() => navigate('/flights')}>
          <div className={`${styles.imagePlaceholder} ${styles.flightImg}`}></div>
          <h3>حجز الطيران</h3>
        </div>
        <div className={styles.card} onClick={() => navigate('/hotels')}>
          <div className={`${styles.imagePlaceholder} ${styles.hotelImg}`}></div>
          <h3>الفنادق</h3>
        </div>
        <div className={styles.card} onClick={() => navigate('/taxi')}>
          <div className={`${styles.imagePlaceholder} ${styles.taxiImg}`}></div>
          <h3>طلب تكسي</h3>
        </div>
        <div className={styles.card} onClick={() => navigate('/tourism')}>
          <div className={`${styles.imagePlaceholder} ${styles.tourImg}`}></div>
          <h3>أماكن سياحية</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;