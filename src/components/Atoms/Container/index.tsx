import React from "react";
import styles from "./styles.module.scss";
import cx from "classnames";
const Container = (props: any) => {
  const { children, tag, className } = props;

  const Tag = `${tag || "div"}` as keyof JSX.IntrinsicElements;
  return <Tag className={cx(className, styles.container)}>{children}</Tag>;
};
export default Container;
