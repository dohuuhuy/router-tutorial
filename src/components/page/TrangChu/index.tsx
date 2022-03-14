import React from "react";
import { useNavigate } from "react-router-dom";
import { UrlPage } from "../../../utils/contants";
import Button from "../../Atoms/Button";
import Container from "../../Atoms/Container";
import Banner from "../../Organisms/Banner";

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
  return (
    <>
      <Banner />
      <Container>
        <p>Đây là trang chủ</p>
        <Button onClick={onDirect}>push state</Button>
      </Container>
    </>
  );
};
export default TrangChu;
