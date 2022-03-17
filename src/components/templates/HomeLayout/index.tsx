import Footer from '@Organisms/Footer'
import Header from '@Organisms/Header'
import { Outlet } from 'react-router-dom'

import styles from './styles.module.scss'

const HomeLayout = () => {
  return (
    <section className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </section>
  )
}

export default HomeLayout
