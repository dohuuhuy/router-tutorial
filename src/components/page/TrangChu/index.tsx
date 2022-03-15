import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UrlPage } from "../../../utils/contants";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import Banner from "../../Organisms/Banner";
import styles from "./styles.module.scss";

const TrangChu = () => {
  const navigate = useNavigate();
  const onDirect = () => {
    navigate(UrlPage.LienHe + "?m=6", {
      state: {
        a: 1,
        b: 2,
      },
    });
  };

  const [state, setstate] = useState<any>();

  const onChange = (event: any): void => {
    const { value } = event.target;
    setstate((v: any) => ({ ...v, selectedItem: value }));
  };

  const clear = () => {
    setstate((v: any) => ({ ...v, selectedItem: "" }));
    // event.target.;
  };

  console.log("state", state);
  return (
    <>
      <Banner />
      <Container>
        <p>Đây là trang chủ</p>
        <Button onClick={onDirect}>push state</Button>

        <div className={styles.divSelect}>
          <label>Select </label>
          <input
            onChange={onChange}
            value={state.selectedItem}
            onClick={clear}
            onFocus={clear}
            style={{ width: "300px" }}
            type="text"
            list="listDemo"
            placeholder="chọn gì đi"
            className={styles.selectSearch}
          />
          <datalist id="listDemo">
            {listDemo.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              );
            })}
          </datalist>
        </div>
      </Container>
    </>
  );
};
export default TrangChu;

const listDemo = ["ali", "metu", "puri", "onno", "leri", "mena"];
