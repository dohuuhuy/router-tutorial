import { Link } from 'react-router-dom'
import { menu } from './func'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <h1 className={styles.txtlogo}>
            <span>N</span>on
          </h1>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {menu.map((v, i) => {
              return (
                <li key={i}>
                  <span className={styles.icon}>{v.icon}</span>
                  <Link to={v.slug}>{v.label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className={styles.AuthAccount}>
        <button className={styles.btn}>Đăng nhập</button>
        <button className={styles.btn}>Đăng ký</button>
      </div>
    </header>
  )
}

export default Header
