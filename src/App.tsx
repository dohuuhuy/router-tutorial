import { Route, Routes } from "react-router-dom";
import "./common/styles/App.css";
import GioiThieu from "./components/page/GioiThieu";
import LienHe from "./components/page/LienHe";
import TrangChu from "./components/page/TrangChu";
import HomeLayout from "./components/templates/HomeLayout";
import { UrlPage } from "./utils/contants";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={UrlPage.Home} element={<HomeLayout />}>
          <Route index element={<TrangChu />} />
          <Route path={UrlPage.GioiThieu} element={<GioiThieu />} />
          <Route path={UrlPage.LienHe} element={<LienHe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
