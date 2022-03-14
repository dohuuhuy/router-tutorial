import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";

// import styles from "./styles.module.scss";

const GioiThieu = () => {
  let navigate = useNavigate();
  const onDir = () => {
    navigate("/lien-he");
  };
  return (
    <Container>
      <p>Đây là trang giới thiệu</p>
      <Button onClick={onDir}>Sang trang liên hệ</Button>
    </Container>
  );
};
export default GioiThieu;
