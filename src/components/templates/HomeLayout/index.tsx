import React from "react";
import { Link, Outlet } from "react-router-dom";
import { UrlPage } from "../../../utils/contants";
import styles from "./styles.module.scss";

const HomeLayout = () => {
  return (
    <section className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <h1 className={styles.txtlogo}>Non</h1>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.menu}>
              {menu.map((v, i) => {
                return (
                  <li key={i}>
                    <Link to={v.slug}>{v.label}</Link>
                  </li>
                );
              })}
            </ul>{" "}
          </nav>
        </div>

        <div className={styles.AuthAccount}>
          <button className={styles.btn}>Đăng nhập</button>
          <button className={styles.btn}>Đăng ký</button>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>Copyrigt @huyi</p>
      </footer>
    </section>
  );
};

export default HomeLayout;

const menu: Menu[] = [
  {
    slug: UrlPage.Home,
    label: "Trang chủ",
  },
  {
    slug: UrlPage.GioiThieu,
    label: "Giới thiệu",
  },
  {
    slug: UrlPage.LienHe,
    label: "Liên hệ",
  },
];

interface Menu {
  slug: string;
  label: string;
}
