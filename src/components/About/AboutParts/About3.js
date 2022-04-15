import React from "react";
import style from "./About3.module.css";
import seo from "../../../assets/ceo.jpg";
import { MdFormatQuote } from "react-icons/md";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={style.main}>
      <MdFormatQuote />
      <div className={style.inMain}>
        <div className={style.flex}>
          <div className={style.block}>
            <div
              className={style.seoIcon}
              style={{ backgroundImage: `url(${seo})` }}
            ></div>
            <h2>{t("about3.h2")}</h2>
          </div>
          <div className={style.block}>
            <p>{t("about3.p")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
