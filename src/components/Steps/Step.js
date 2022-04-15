import React from "react";
import style from "./Step.module.css";
import { Link } from "react-router-dom";
import {
  AiFillDatabase,
  AiOutlineSetting,
  AiOutlineFieldTime,
  AiOutlineFileDone,
} from "react-icons/ai";
import { RiUserVoiceLine } from "react-icons/ri";
import { BiUserCheck, BiLocationPlus } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Step = ({ count }) => {
  const { i18n } = useTranslation();
  const dataUZ = [
    {
      id: 1,
      name: "Хизматлар",
      link: "/services",
      svg: <AiOutlineSetting />,
    },
    {
      id: 2,
      name: "Хизмат тури",
      link: "/services",
      svg: <AiFillDatabase />,
    },
    {
      id: 3,
      name: " Тавсифи",
      link: "/service/description",
      svg: <RiUserVoiceLine />,
    },
    {
      id: 4,
      name: "Санаси ва вақти",
      link: "/service/date",
      svg: <AiOutlineFieldTime />,
    },
    {
      id: 5,
      name: "Фойдаланувчи ҳақида маълумот",
      link: "/service/information",
      svg: <BiUserCheck />,
    },
    {
      id: 6,
      name: "Манзил",
      link: "/service/location",
      svg: <BiLocationPlus />,
    },
    {
      id: 7,
      name: "Буюртмани тасдиқланг",
      link: "/service/book",
      svg: <AiOutlineFileDone />,
    },
  ];
  const dataRU = [
    {
      id: 1,
      name: "Услуга",
      link: "/services",
      svg: <AiOutlineSetting />,
    },
    {
      id: 2,
      name: "Тип Обслуживания",
      link: "/services",
      svg: <AiFillDatabase />,
    },
    {
      id: 3,
      name: "Описание",
      link: "/service/description",
      svg: <RiUserVoiceLine />,
    },
    {
      id: 4,
      name: "Дата и время",
      link: "/service/date",
      svg: <AiOutlineFieldTime />,
    },
    {
      id: 5,
      name: "Информация о пользователе",
      link: "/service/information",
      svg: <BiUserCheck />,
    },
    {
      id: 6,
      name: "Место нахождения",
      link: "/service/location",
      svg: <BiLocationPlus />,
    },
    {
      id: 7,
      name: "Подтвердить заказ",
      link: "/service/book",
      svg: <AiOutlineFileDone />,
    },
  ];
  const dataEN = [
    {
      id: 1,
      name: "Service",
      link: "/services",
      svg: <AiOutlineSetting />,
    },
    {
      id: 2,
      name: "Service Type",
      link: "/services",
      svg: <AiFillDatabase />,
    },
    {
      id: 3,
      name: "Description",
      link: "/service/description",
      svg: <RiUserVoiceLine />,
    },
    {
      id: 4,
      name: "Date and time",
      link: "/service/date",
      svg: <AiOutlineFieldTime />,
    },
    {
      id: 5,
      name: "User information",
      link: "/service/information",
      svg: <BiUserCheck />,
    },
    {
      id: 6,
      name: "Location",
      link: "/service/location",
      svg: <BiLocationPlus />,
    },
    {
      id: 7,
      name: "Confirm the order",
      link: "/service/book",
      svg: <AiOutlineFileDone />,
    },
  ];
  let counter = 0;

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.steps}>
          {i18n.language === "ru"
            ? dataRU.map((data) => {
                if (counter < count) {
                  counter += 1;
                  return (
                    <Link
                      key={data.id}
                      to={data.link}
                      className={style.stepActive}
                    >
                      <div className={style.icon}>{data.svg}</div>
                      <div className={style.path}>
                        <div className={style.square}></div>
                        <div className={style.line}></div>
                      </div>
                      <p>{data.name}</p>
                    </Link>
                  );
                } else if (counter === count) {
                  counter += 1;
                  return (
                    <div key={data.id} className={style.stepBlue}>
                      <div className={style.icon}>{data.svg}</div>
                      <div className={style.path}>
                        <div className={style.square}></div>
                        <div className={style.line}></div>
                      </div>
                      <p>{data.name}</p>
                    </div>
                  );
                } else {
                  return (
                    <div key={data.id} className={style.step}>
                      <div className={style.icon}>{data.svg}</div>
                      <div className={style.path}>
                        <div className={style.square}></div>
                        <div className={style.line}></div>
                      </div>
                      <p>{data.name}</p>
                    </div>
                  );
                }
              })
            : i18n.language === "en"
            ? dataEN.map((data) => {
                if (counter < count) {
                  counter += 1;
                  return (
                    <Link
                      key={data.id}
                      to={data.link}
                      className={style.stepActive}
                    >
                      <div className={style.icon}>{data.svg}</div>
                      <div className={style.path}>
                        <div className={style.square}></div>
                        <div className={style.line}></div>
                      </div>
                      <p>{data.name}</p>
                    </Link>
                  );
                } else if (counter === count) {
                  counter += 1;
                  return (
                    <div key={data.id} className={style.stepBlue}>
                      <div className={style.icon}>{data.svg}</div>
                      <div className={style.path}>
                        <div className={style.square}></div>
                        <div className={style.line}></div>
                      </div>
                      <p>{data.name}</p>
                    </div>
                  );
                } else {
                  return (
                    <div key={data.id} className={style.step}>
                      <div className={style.icon}>{data.svg}</div>
                      <div className={style.path}>
                        <div className={style.square}></div>
                        <div className={style.line}></div>
                      </div>
                      <p>{data.name}</p>
                    </div>
                  );
                }
              })
            : dataUZ.map((data) => {
                if (counter < count) {
                  counter += 1;
                  return (
                    <Link
                      key={data.id}
                      to={data.link}
                      className={style.stepActive}
                    >
                      <div className={style.icon}>{data.svg}</div>
                      <div className={style.path}>
                        <div className={style.square}></div>
                        <div className={style.line}></div>
                      </div>
                      <p>{data.name}</p>
                    </Link>
                  );
                } else if (counter === count) {
                  counter += 1;
                  return (
                    <div key={data.id} className={style.stepBlue}>
                      <div className={style.icon}>{data.svg}</div>
                      <div className={style.path}>
                        <div className={style.square}></div>
                        <div className={style.line}></div>
                      </div>
                      <p>{data.name}</p>
                    </div>
                  );
                } else {
                  return (
                    <div key={data.id} className={style.step}>
                      <div className={style.icon}>{data.svg}</div>
                      <div className={style.path}>
                        <div className={style.square}></div>
                        <div className={style.line}></div>
                      </div>
                      <p>{data.name}</p>
                    </div>
                  );
                }
              })}
        </div>
      </div>
    </div>
  );
};

export default Step;
