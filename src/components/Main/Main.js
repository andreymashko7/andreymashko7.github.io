import React from "react";
import cls from "./Main.module.css";

const Main = ({ children }) => {
  return <main className={cls.main}>{children}</main>;
};

export default Main;
