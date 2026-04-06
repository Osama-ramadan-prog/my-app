import { useState } from 'react';
import styles from './Flights.module.css';

function Flights() {
  // تخزين بيانات البحث
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("جاري البحث عن رحلات:", searchData);
    alert(`البحث من ${searchData.from} إلى ${searchData.to}`);
  };

  return (
    <div className={styles.flightsPage}>
      {/* قسم العنوان الخلفي */}
      <header className={styles.header}>
        <h1>احجز رحلتك القادمة بأفضل الأسعار ✈️</h1>
      </header>

      {/* محرك البحث */}
      <section className={styles.searchSection}>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <div className={styles.inputGroup}>
            <label>من أين؟</label>
            <input 
              type="text" 
              placeholder="مدينة الإقلاع" 
              onChange={(e) => setSearchData({...searchData, from: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>إلى أين؟</label>
            <input 
              type="text" 
              placeholder="وجهة الوصول" 
              onChange={(e) => setSearchData({...searchData, to: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>التاريخ</label>
            <input 
              type="date" 
              onChange={(e) => setSearchData({...searchData, date: e.target.value})}
            />
          </div>

          <button type="submit" className={styles.searchBtn}>بحث</button>
        </form>
      </section>

      {/* عروض ترويجية */}
      <section className={styles.offers}>
        <h3>عروض حصرية اليوم</h3>
        <div className={styles.offerCard}>
          <div className={styles.flightInfo}>
            <span>الخطوط الجوية العربية</span>
            <p>الرياض ➔ دبي</p>
          </div>
          <div className={styles.price}>ابتداءً من 250$</div>
          <button className={styles.bookBtn}>عرض الرحلات</button>
        </div>
      </section>
    </div>
  );
}

export default Flights;