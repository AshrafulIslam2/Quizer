import React from "react";
import { Outlet } from "react-router-dom";
import Common from "../Components/common/Common";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Common></Common>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
