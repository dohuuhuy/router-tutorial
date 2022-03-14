import styles from "./styles.module.scss";
import cx from "classnames";
interface Props {
  children: React.ReactNode;
  icon?: any;
  onClick?: any;
  className?: any;
}

const Button = (props: Props) => {
  const { children, icon, onClick, className } = props;
  return (
    <button className={cx(className, styles.button)} onClick={onClick}>
      <div className={styles.item}>
        {icon && <span className={styles.icon}> {icon}</span>}
        {children}
      </div>
    </button>
  );
};
export default Button;
