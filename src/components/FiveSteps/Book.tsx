import React from "react";
import style from "./Book.module.css";
import Step from "../Steps/Step";
import { useTranslation } from "react-i18next";
import { Button } from "@mantine/core";
import { useLocation, useHistory } from "react-router-dom";
import { SingleService } from "../../server-state/queries/use-get-service-list";
import { useCreateOrder } from "../../server-state/mutations/use-create-order";

const Book = () => {
  const { t } = useTranslation();
  const { mutate, isLoading } = useCreateOrder();
  const { push } = useHistory();
  const { state } = useLocation<{
    service?: SingleService;
    serviceType?: SingleService;
    description?: string;
    day?: string;
    time?: string;
    street?: string;
    district?: string;
  }>();

  const clickHandler = () => {
    const today = new Date();
    if (state.day === "Tomorrow") {
      today.setDate(today.getDate() + 1);
    }
    if (state.day === "Next Tomorrow") {
      today.setDate(today.getDate() + 2);
    }
    const date = today.toLocaleDateString("uz");
    // let time: any = state.time?.split("PM");
    // time = time && time?.length > 0 && time[0];

    mutate(
      {
        address: `${state?.district} district ${state?.street} street`,
        // brand: 2,
        date,
        description:
          state.description === "" ? "default description" : state.description,
        status: "new",
        time: 6,
        service_type: state.serviceType?.id,
      },
      {
        onSuccess(res) {
          push("/orders");
          console.log(res);
        },
      }
    );
    // props.addProduct("orders", {
    //   data: props.selectedData,
    //   serviceType: props.serviceType,
    //   description: props.describtion,
    //   date: props.dateTime.date,
    //   time: props.dateTime.time,
    //   email: props.userInformation.email,
    //   name: props.userInformation.firstName,
    //   number: props.userInformation.number,
    //   AdressStreet: props.adress.street,
    //   AdressDistrict: props.adress.district,
    //   lat: props.currentLocation.lat,
    //   lang: props.currentLocation.lang,
    // });
    // window.location.reload();
  };
  return (
    <div className={style.main}>
      {/* {props.serviceType.length === 0 && <#4747b9irect push to="/services" />} */}
      <div className={style.container}>
        <h1>{t("book.h1")}</h1>
        <h3>{t("book.h3")}</h3>
        <Step count={6} />
        <div className={style.form}>
          <h1>{t("book.formh1")}</h1>

          <div
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
            }}
          >
            <h3>{t("book.one")}: </h3>
            <h4 style={{ marginLeft: "10px", color: "#4747b9" }}>
              {state?.service?.name}
            </h4>
          </div>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
            }}
          >
            <h3>{t("book.two")}: </h3>
            <h4 style={{ marginLeft: "10px", color: "#4747b9" }}>
              {state?.serviceType?.name}
            </h4>
          </div>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
            }}
          >
            <h3>{t("book.three")}: </h3>
            <h4 style={{ marginLeft: "10px", color: "#4747b9" }}>
              {state?.description}
            </h4>
          </div>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
            }}
          >
            <h3>{t("book.four")}: </h3>
            <h4 style={{ marginLeft: "10px", color: "#4747b9" }}>
              {state?.district} district {state?.street} street
            </h4>
          </div>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
            }}
          >
            <h3>{t("book.date")}: </h3>
            <h4 style={{ marginLeft: "10px", color: "#4747b9" }}>
              {state?.day} day at {state?.time} oclock
            </h4>
          </div>
          <Button
            styles={{ root: { width: "400px" } }}
            size="md"
            onClick={clickHandler}
            loading={isLoading}
          >
            {t("book.formlink")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Book;
