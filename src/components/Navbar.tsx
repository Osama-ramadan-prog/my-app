import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation(); // لمعرفة الصفحة الحالية وتمييز الرابط النشط

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* الشعار */}
        <div className={styles.logo}>
          <Link to="/"> <span>Voya</span></Link>
        </div>

        {/* الروابط */}
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={location.pathname === '/' ? styles.active : ''}>الرئيسية</Link>
          </li>
          <li>
            <Link to="/flights" className={location.pathname === '/flights' ? styles.active : ''}>الطيران</Link>
          </li>
          <li>
            <Link to="/hotels" className={location.pathname === '/hotels' ? styles.active : ''}>الفنادق</Link>
          </li>
          <li>
            <Link to="/taxi" className={location.pathname === '/taxi' ? styles.active : ''}>التكاسي</Link>
          </li>
          <li>
            <Link to="/tourism" className={location.pathname === '/tourism' ? styles.active : ''}>السياحة</Link>
          </li>
        </ul>

        {/* زر إضافي للتميز */}
        <div className={styles.navActions}>
          <button className={styles.loginBtn}>تسجيل الدخول</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;