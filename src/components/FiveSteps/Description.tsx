import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Step from "../Steps/Step";
import style from "./Description.module.css";
import { useTranslation } from "react-i18next";
import { SingleService } from "../../server-state/queries/use-get-service-list";

const Description = () => {
  const { push } = useHistory();

  const { t } = useTranslation();
  const [description, setDescription] = useState("");
  const { state } = useLocation<{
    service: SingleService;
    serviceType: SingleService;
  }>();

  if (!state?.serviceType?.id) {
    push("/services");
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>{t("description.h1")}</h1>
        <h3>{t("description.h3")}</h3>
        <Step count={2} />
        <div className={style.form}>
          <h1>{t("description.form.h1")}</h1>
          <div className={style.field}>
            <label>{t("description.form.label")}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("description.form.textarea")}
            ></textarea>
            <div className={style.buttons}>
              <div
                onClick={() =>
                  push("/service/date", { ...state, description: "" })
                }
              >
                {t("description.form.skip")}
              </div>
              <div
                onClick={() => push("/service/date", { ...state, description })}
              >
                {t("description.form.continue")}
              </div>
            </div>
            {/* <div className={style.buttons}>
              <Link to="/service/date">{t("description.form.skip")}</Link>
              <Link
                to="/service/date"
                onClick={() => props.fetchDescription(description)}
              >
                {t("description.form.continue")}
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
