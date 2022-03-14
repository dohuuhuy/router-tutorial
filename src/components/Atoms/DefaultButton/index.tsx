import React from "react";
import styles from "./styles.module.scss";

const DefaultButton = (props: { children: any }) => {
  const { children } = props;
  return <button className={styles.button}>{children}</button>;
};
export default DefaultButton;
