import React, { useEffect } from "react";
import style from "./Information.module.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import Step from "../Steps/Step";
import { useTranslation } from "react-i18next";
import { SingleService } from "../../server-state/queries/use-get-service-list";
import { useServicesListType } from "../../server-state/queries/use-get-service-list-type";

const Information = () => {
  const { t, i18n } = useTranslation();
  const { push } = useHistory();
  // const { data } = useServicesListType();
  const { state } = useLocation<{ service: SingleService }>();
  const { id } = state.service;

  if (!id) {
    push("/services");
  }
  const { data, refetch } = useServicesListType({ id });
  useEffect(() => {
    refetch();
  }, [i18n.language]);

  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>{t("information.h1")}</h1>
        <h3>{t("information.h3")}</h3>

        <Step count={1} />
        <div className={style.form}>
          <h1>{t("information.form.h1")}</h1>
          <div className={style.cards}>
            {data?.map((serviceType) => {
              return (
                <div
                  onClick={() =>
                    push("/service/description", {
                      service: state.service,
                      serviceType,
                    })
                  }
                  // to="/service/description"
                  className={style.card}
                  key={serviceType?.id}
                >
                  <img src={serviceType?.logo?.file} alt="maishiy texnika" />
                  <h3>{serviceType?.name}</h3>
                </div>
              );
            })}
            {/* {props.datas.length > 0 ? (
              i18n.language === "ru" ? (
                props.datas[1].map((data) => {
                  return (
                    <Link
                      onClick={() => props.fetchTypeOfService(data.type)}
                      to="/service/description"
                      className={style.card}
                      key={data.id}
                    >
                      <img src={data.img} alt="maishiy texnika" />
                      <h3>{data.data}</h3>
                    </Link>
                  );
                })
              ) : (
                props.datas[0].map((data) => {
                  return (
                    <Link
                      onClick={() => props.fetchTypeOfService(data.type)}
                      to="/service/description"
                      className={style.card}
                      key={data.id}
                    >
                      <img src={data.img} alt="maishiy texnika" />
                      <h3>{data.data}</h3>
                    </Link>
                  );
                })
              )
            ) : (
              <div className={style.noService}>
                <h2>{t("information.form.noServicesh2")}</h2>
                <Link to="/services">{t("information.form.back")}</Link>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
