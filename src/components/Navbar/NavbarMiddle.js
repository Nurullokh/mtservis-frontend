import React, { useState } from "react";
import logo from "../../assets/nav.png";
import style from "./NavbarMiddle.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../state/auth/auth.state";

function NavbarMiddle() {
  const { t, i18n } = useTranslation();
  const {
    tokens: { access },
  } = useAuth();
  const isLogin = Boolean(access);
  // const changeLanguage = (lang) => {
  //   i18n.changeLanguage(lang);
  // };
  const [click, setClick] = useState(false);
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
        <div className={style.right}>
          {/* <button onClick={() => changeLanguage("ru")}>RU</button>
          <button onClick={() => changeLanguage("uz")}>UZ</button> */}
          {/* <h2>+998 (33) 211 99 27</h2> */}
          {/* <div className={style.button}>
            <Link to="/services">{t("navbar.btn")}</Link>
          </div> */}

          {click ? (
            <AiOutlineClose onClick={() => setClick(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setClick(true)} />
          )}
        </div>
      </div>
      <div
        className={
          click
            ? `${style.mobileMenu} ${style.mobileMenuOpen}`
            : `${style.mobileMenu} ${style.mobileMenuClose}`
        }
      >
        <div className={style.content}>
          {isLogin && (
            <Link onClick={() => setClick(false)} to="/profile">
              Profile
            </Link>
          )}
          {/* Linklarni jsonga tqw kere */}
          <Link to="/services" onClick={() => setClick(false)}>
            {t("navbar.link1")}
          </Link>
          <div className={style.subLink}>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink1")}
            </Link>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink2")}
            </Link>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink3")}
            </Link>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink4")}
            </Link>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink5")}
            </Link>
          </div>
          <Link to="/" onClick={() => setClick(false)}>
            {t("navbar.link2")}
          </Link>
          <Link to="/orders" onClick={() => setClick(false)}>
            {t("navbar.link3")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarMiddle;
