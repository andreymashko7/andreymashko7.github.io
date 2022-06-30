import React from "react";
import cls from "./Footer.module.css";
import { ReactComponent as Logo } from "../../img/icons/heart.svg";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <span className={cls.footer__text}>
        Powered by me
        <Logo className="icon__heart" />
      </span>
    </footer>
  );
};

export default Footer;
