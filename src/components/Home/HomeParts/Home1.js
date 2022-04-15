import React from "react";
import style from "./Home1.module.css";
import image from "../../../assets/images/main.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Home1() {
  const { t } = useTranslation();

  return (
    <div className={style.main} style={{ backgroundImage: `url(${image})` }}>
      <h1>{t("home1.h1")}</h1>
      <div className={style.button}>
        <Link to="/services">{t("home1.link")}</Link>
      </div>
    </div>
  );
}

export default Home1;
