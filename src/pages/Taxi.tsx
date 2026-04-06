import { useState } from 'react';
import styles from './Taxi.module.css';

function Taxi() {
  const [booking, setBooking] = useState({
    pickup: '',
    destination: '',
    passengers: '1',
    time: ''
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("طلب تكسي جديد:", booking);
    alert(`تم استلام طلبك للتوصيل إلى ${booking.destination}`);
  };

  return (
    <div className={styles.taxiPage}>
      <header className={styles.header}>
        <h1>توصيل آمن ومريح من وإلى المطار 🚕</h1>
        <p>سائقون محترفون بانتظارك على مدار الساعة</p>
      </header>

      <section className={styles.bookingSection}>
        <form className={styles.bookingForm} onSubmit={handleBooking}>
          <div className={styles.inputGroup}>
            <label>نقطة الانطلاق</label>
            <input 
              type="text" 
              placeholder="مثلاً: مطار الملك خالد" 
              onChange={(e) => setBooking({...booking, pickup: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>الوجهة</label>
            <input 
              type="text" 
              placeholder="إلى أين ستذهب؟" 
              onChange={(e) => setBooking({...booking, destination: e.target.value})}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>عدد الركاب</label>
            <select onChange={(e) => setBooking({...booking, passengers: e.target.value})}>
              <option value="1">1-3 ركاب (سيدان)</option>
              <option value="4">4-6 ركاب (عائلية)</option>
              <option value="7">7+ ركاب (حافلة صغيرة)</option>
            </select>
          </div>

          <button type="submit" className={styles.bookBtn}>احجز الآن</button>
        </form>
      </section>

      <section className={styles.carsSection}>
        <h2 className={styles.sectionTitle}>أنواع السيارات المتاحة</h2>
        <div className={styles.carGrid}>
          <div className={styles.carCard}>
            <div className={styles.carIcon}>🚗</div>
            <h3>اقتصادية</h3>
            <p>مثالية لـ 3 ركاب وحقيبتين</p>
            <span className={styles.priceTag}>ابتداءً من $20</span>
          </div>
          <div className={styles.carCard}>
            <div className={styles.carIcon}>🚐</div>
            <h3>عائلية (SUV)</h3>
            <p>تتسع لـ 6 ركاب مع حقائب كبيرة</p>
            <span className={styles.priceTag}>ابتداءً من $45</span>
          </div>
          <div className={styles.carCard}>
            <div className={styles.carIcon}>✨</div>
            <h3>فاخرة (VIP)</h3>
            <p>سيارات مرسيدس أو أودي حديثة</p>
            <span className={styles.priceTag}>ابتداءً من $80</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Taxi;