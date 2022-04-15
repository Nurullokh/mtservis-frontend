import React from "react";
import style from "./Contact.module.css";
// import { IoMdArrowBack } from 'react-icons/io'
import Step from "../Steps/Step";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInputState } from "@mantine/hooks";
import { SingleService } from "../../server-state/queries/use-get-service-list";

const Contact = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const { push } = useHistory();
  const { state } = useLocation<{
    service?: SingleService;
    serviceType?: SingleService;
    description?: string;
    day?: string;
    time?: string;
  }>();
  if (!state?.service?.id) {
    push("/services");
  }
  const [number, setNumber] = useInputState("");
  const { t } = useTranslation();

  return (
    <div className={style.main}>
      {/* {props.serviceType.length === 0 && <Redirect push to="/services" />} */}
      <div className={style.container}>
        <h1>Book a service</h1>
        <h3>Pick a service to schedule your appointment</h3>
        <Step count={4} />
        <form>
          <div className={style.header}>
            <h2>{t("contact.form.h2")}</h2>
          </div>
          <h3>{t("contact.form.h3")}</h3>
          <div className={style.name}>
            {/* <div>
                            <label >{t("contact.form.input1l")}</label>
                            <input
                                type='text'
                                placeholder={t("contact.form.input1pl")}
                                value={state.firstName}
                                required
                                onChange={(e) => dispatch({ type: 'FIRSTNAME', payload: e.target.value })} />
                        </div> */}
            <div>
              <label>{t("contact.form.input2l")}</label>
              <input
                type="tel"
                placeholder={t("contact.form.input2pl")}
                value={number}
                required
                onChange={setNumber}
              />
            </div>
          </div>
          <div
            className={style.button}
            onClick={() =>
              push("/service/location", { ...state, phone: number })
            }
            // onClick={() => props.fetchUserInformation(number)}
            // to="/service/location"
          >
            Continue
          </div>
          {/* )} */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
