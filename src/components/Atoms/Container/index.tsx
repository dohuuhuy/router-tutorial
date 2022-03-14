import React from "react";
import styles from "./styles.module.scss";

const Container = (props: any) => {
  const { children, tag } = props;

  const Tag = `${tag || "div"}` as keyof JSX.IntrinsicElements;
  return <Tag className={styles.container}>{children}</Tag>;
};
export default Container;
