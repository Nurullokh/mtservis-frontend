import style from "./OrderList.module.css";
import { BsPeopleCircle } from "react-icons/bs";
import { BiPhone, BiTimeFive, BiCalendarExclamation } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useOrders } from "../../server-state/queries/use-get-orders";
import { Loader } from "@mantine/core";

const Orders = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useOrders();
  const orders = data?.pages[0].results;

  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>{t("order.h1")}</h1>
        <h3>{t("order.h3")}</h3>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={style.orders}>
            {orders?.map((item) => (
              <div className={style.order} key={item.id}>
                <div className={style.information}>
                  <h1>
                    {" "}
                    <div>
                      <BsPeopleCircle />
                    </div>{" "}
                    <span>{t("order.span1")}</span>: {item.service}
                  </h1>
                  <h1>
                    {" "}
                    <div>
                      <BiPhone />
                    </div>
                    <span>{t("order.span3")}</span>: {item.service_type}
                  </h1>
                  <h1>
                    <div>
                      <FaUserShield />
                    </div>{" "}
                    <span>{t("order.span2")}</span>: {item.description}
                  </h1>
                  <h1>
                    {" "}
                    <div>
                      <BiCalendarExclamation />
                    </div>{" "}
                    <span>{t("order.span4")}</span>: {item.date}
                  </h1>
                  <h1>
                    {" "}
                    <div>
                      <BiTimeFive />
                    </div>{" "}
                    <span>{t("order.span5")}</span>: {item.time}
                  </h1>
                </div>
                <div className={style.status}>
                  <div className={style.step}>
                    {item.status === "confirmed" ||
                    item.status === "in_process" ||
                    item.status === "done" ? (
                      <div className={style.icongreen}>
                        <IoCheckmarkDoneSharp />
                      </div>
                    ) : (
                      <div className={style.iconYellow}>
                        <FiLoader />
                      </div>
                    )}
                    {item.status === "confirmed" ||
                    item.status === "in_process" ||
                    item.status === "done" ? (
                      <h3>{t("order.confirm1")}</h3>
                    ) : (
                      <h3>{t("order.confirm12")}</h3>
                    )}
                  </div>
                  <div className={style.line}></div>
                  <div className={style.step}>
                    {item.status === "in_process" || item.status === "done" ? (
                      <div className={style.icongreen}>
                        <IoCheckmarkDoneSharp />
                      </div>
                    ) : (
                      <div className={style.iconYellow}>
                        <FiLoader />
                      </div>
                    )}
                    {item.status === "in_process" || item.status === "done" ? (
                      <h3>{t("order.confirm2")}</h3>
                    ) : (
                      <h3>{t("order.confirm12")}</h3>
                    )}
                  </div>
                  <div className={style.line}></div>
                  <div className={style.step}>
                    {item.status === "done" ? (
                      <div className={style.icongreen}>
                        <IoCheckmarkDoneSharp />
                      </div>
                    ) : (
                      <div className={style.iconYellow}>
                        <FiLoader />
                      </div>
                    )}
                    {item.status === "done" ? (
                      <h3>{t("order.confirm3")}</h3>
                    ) : (
                      <h3>{t("order.confirm12")}</h3>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
