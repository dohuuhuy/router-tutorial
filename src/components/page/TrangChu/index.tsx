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

        <label>Select </label>
        <input type="text" id="txt_ide" list="ide" placeholder="chọn gì đi" />
        <datalist id="ide">
          <option selected value="Brackets" />
          <option value="Coda" />
          <option value="Dreamweaver" />
          <option value="Espresso" />
          <option value="jEdit" />
          <option value="Komodo Edit" />
          <option value="Notepad++" />
          <option value="Sublime Text 2" />
          <option value="Taco HTML Edit" />
          <option value="Textmate" />
          <option value="Text Pad" />
          <option value="TextWrangler" />
          <option value="Visual Studio" />
          <option value="VIM" />
          <option value="XCode" />
        </datalist>
      </Container>
    </>
  );
};
export default TrangChu;
