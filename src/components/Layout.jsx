import React from "react";
import { Outlet } from "react-router-dom";
import TempHeader from "./TempHeader";

function Layout() {
  return (
    <>
      <header>
        <h1>Cars App</h1>
        <TempHeader />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
