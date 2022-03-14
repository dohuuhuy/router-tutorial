import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>
            <Link to={"/expenses"}>expenses</Link>
          </li>
          <li>
            <Link to={"/invoices"}>invoices</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};
