import React from "react";
import { FaRegGrinSquintTears, FaRegHandScissors } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { UrlPage } from "../../../utils/contants";
import styles from "./styles.module.scss";

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
  );
};

export default Header;

const menu: Menu[] = [
  {
    slug: UrlPage.Home,
    label: "Trang chủ",
    icon: <GoHome />,
  },
  {
    slug: UrlPage.GioiThieu,
    label: "Giới thiệu",
    icon: <FaRegGrinSquintTears />,
  },
  {
    slug: UrlPage.LienHe,
    label: "Liên hệ",
    icon: <FaRegHandScissors />,
  },
];

interface Menu {
  slug: string;
  label: string;
  icon: any;
}
