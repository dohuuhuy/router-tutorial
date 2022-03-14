import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Organisms/Footer";
import Header from "../../Organisms/Header";
import styles from "./styles.module.scss";

const HomeLayout = () => {
  return (
    <section className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </section>
  );
};

export default HomeLayout;
