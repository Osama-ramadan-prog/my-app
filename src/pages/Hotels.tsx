import { useState } from 'react';
import styles from './Hotels.module.css';

function Hotels() {
const [search, setSearch] = useState({ city: '', guests: '2', date: '' });

const featuredHotels = [
    {
    id: 1,
    name: "فندق ريتز كارلتون",
      location: "الرياض، السعودية",
      price: 450,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500"
    },
    {
      id: 2,
      name: "منتجع موفنبيك",
      location: "دبي، الإمارات",
      price: 320,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500"
    }
  ];

  return (
    <div className={styles.hotelsPage}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>اعثر على إقامتك المثالية 🏨</h1>
          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="إلى أين تريد الذهاب؟" 
              onChange={(e) => setSearch({...search, city: e.target.value})}
            />
            <input 
              type="date" 
              onChange={(e) => setSearch({...search, date: e.target.value})}
            />
            <select onChange={(e) => setSearch({...search, guests: e.target.value})}>
              <option value="1">شخص واحد</option>
              <option value="2">شخصين</option>
              <option value="4">عائلة</option>
            </select>
            <button className={styles.searchBtn}>بحث</button>
          </div>
        </div>
      </header>

      <section className={styles.listSection}>
        <h2 className={styles.title}>أفضل الفنادق المختارة لك</h2>
        <div className={styles.hotelsGrid}>
          {featuredHotels.map(hotel => (
            <div key={hotel.id} className={styles.hotelCard}>
              <div className={styles.imageWrapper}>
                <img src={hotel.img} alt={hotel.name} />
                <span className={styles.rating}>⭐ {hotel.rating}</span>
              </div>
              <div className={styles.details}>
                <h3>{hotel.name}</h3>
                <p className={styles.location}>📍 {hotel.location}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>${hotel.price} <small>/ ليلة</small></span>
                  <button className={styles.viewBtn}>عرض التفاصيل</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hotels;