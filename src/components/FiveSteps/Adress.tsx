import React, { useReducer, useState } from "react";
import style from "./Adress.module.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import Step from "../Steps/Step";
import { useTranslation } from "react-i18next";
import { SingleService } from "../../server-state/queries/use-get-service-list";

const initialState = {
  street: "",
  district: "",
};
const reducer = (state: any = [], action: { type: any; payload: any }) => {
  switch (action.type) {
    case "STREET":
      return {
        ...state,
        street: action.payload,
      };
    case "DISTRICT":
      return {
        ...state,
        district: action.payload,
      };
    case "CLEAR":
      return {
        ...state,
        street: "",
        district: "",
      };
    default:
      return state;
  }
};
const Adress = () => {
  const { push } = useHistory();
  const { state: commingData } = useLocation<{
    service?: SingleService;
    serviceType?: SingleService;
    description?: string;
    day?: string;
    time?: string;
  }>();
  if (!commingData?.service?.id) {
    push("/services");
  }

  const { t } = useTranslation();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>{t("adress.h1")}</h1>
        <h3>{t("adress.h3")}</h3>
        <Step count={5} />
        <div className={style.header}>
          <h2>{t("adress.h2")}</h2>
          <div className={style.modal}>
            <form style={{ width: "100%" }}>
              <label>{t("adress.modal1.inputs.input1label")}</label>
              <input
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  margin: "10px 0px",
                }}
                type="text"
                placeholder={t("adress.modal1.inputs.input1placeholder")}
                value={state.street}
                required
                onChange={(e) =>
                  dispatch({ type: "STREET", payload: e.target.value })
                }
              />
              <label>{t("adress.modal1.inputs.input2label")}</label>
              <input
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  margin: "10px 0px",
                }}
                type="text"
                placeholder={t("adress.modal1.inputs.input2placeholder")}
                value={state.district}
                required
                onChange={(e) =>
                  dispatch({ type: "DISTRICT", payload: e.target.value })
                }
              />
              <div className={style.buttons}>
                {state.district && state.street ? (
                  <div
                    className={style.btn}
                    onClick={() =>
                      push("/service/book", { ...commingData, ...state })
                    }
                  >
                    {t("adress.modal1.inputs.continue")}
                  </div>
                ) : (
                  <div className={style.btn}>
                    {t("adress.modal1.inputs.fill")}!!!
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
