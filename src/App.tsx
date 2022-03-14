import { Route, Routes } from "react-router-dom";
import "./App.css";
import Expenses from "./components/page/Expenses";
import Invoices from "./components/page/Invoices";
import { Home } from "./components/templates/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
