import React from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/nav.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../state/auth/auth.state";
import { Avatar } from "@mantine/core";
import { useHistory } from "react-router-dom";

function Navbar() {
  const { push } = useHistory();

  const {
    firstName,
    tokens: { access },
  } = useAuth();
  const isLogin = Boolean(access);
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  if (window.location.pathname.includes("admin")) {
    return null;
  }
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Link to="/">
          <div
            className={style.left}
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </Link>
        <div className={style.center}>
          <ul>
            <li>
              <Link to="/services">{t("navbar.link1")}</Link>
            </li>
            <li>
              <Link to="/about">{t("navbar.link2")}</Link>
            </li>
            <li>
              <Link to="/orders">{t("navbar.link3")}</Link>
            </li>
            <li>
              <Link to="/blogs">{t("navbar.link4")}</Link>
            </li>
          </ul>
        </div>
        <div className={style.right}>
          <button onClick={() => changeLanguage("ru")}>RU</button>
          <button onClick={() => changeLanguage("uz")}>UZ</button>
          <button onClick={() => changeLanguage("en")}>EN</button>

          {isLogin ? (
            <div
              onClick={() => push("/profile")}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              <Avatar />
              <p>{firstName}</p>
            </div>
          ) : (
            <div className={style.button}>
              <Link to="/register">{t("profile.enter")}</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
