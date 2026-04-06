// import { useState } from 'react';
import styles from './Tourism.module.css';

function Tourism() {
  const destinations = [
    { id: 1, title: 'أهرامات الجيزة', country: 'مصر', category: 'تاريخ', img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=500' },
    { id: 2, title: 'جزر المالديف', country: 'المالديف', category: 'استرخاء', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500' },
    { id: 3, title: 'برج إيفل', country: 'فرنسا', category: 'رومانسية', img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500' },
    { id: 4, title: 'سور الصين العظيم', country: 'الصين', category: 'مغامرة', img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500' },
    { id: 5, title: 'مدينة البتراء', country: 'الأردن', category: 'آثار', img: 'https://images.unsplash.com/photo-1579606052309-8260492822a6?w=500' },
    { id: 6, title: 'شلالات نياجرا', country: 'كندا/أمريكا', category: 'طبيعة', img: 'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=500' },
  ];

  return (
    <div className={styles.tourismPage}>
      <header className={styles.hero}>
        <h1>استكشف أجمل الوجهات السياحية 🌍</h1>
        <p>اكتشف أماكن جديدة واصنع ذكريات لا تُنسى</p>
      </header>

      <section className={styles.gallerySection}>
        <div className={styles.filters}>
          <button className={styles.activeFilter}>الكل</button>
          <button>تاريخ</button>
          <button>طبيعة</button>
          <button>مغامرة</button>
        </div>

        <div className={styles.galleryGrid}>
          {destinations.map(dest => (
            <div key={dest.id} className={styles.destCard}>
              <div className={styles.imageBox}>
                <img src={dest.img} alt={dest.title} />
                <span className={styles.categoryBadge}>{dest.category}</span>
              </div>
              <div className={styles.destContent}>
                <h3>{dest.title}</h3>
                <p>📍 {dest.country}</p>
                <button className={styles.exploreBtn}>استكشف الآن</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tourism;