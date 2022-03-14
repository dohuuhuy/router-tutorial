import React from "react";
import styles from "./styles.module.scss";

const Button = (props: any) => {
  const { children, icon, onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.item}>
        {icon && <span className={styles.icon}> {icon}</span>}
        {children}
      </div>
    </button>
  );
};
export default Button;
