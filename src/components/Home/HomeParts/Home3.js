import React from 'react'
import style from './Home3.module.css'
import { BsCalendar } from 'react-icons/bs'
import { RiChatSettingsLine } from 'react-icons/ri'
import { FaDollarSign } from 'react-icons/fa'
import {useTranslation} from 'react-i18next'

function Home3() {
    const {t} = useTranslation();


    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>{t("home3.h1")}</h1>
                <h2>{t("home3.h2")}</h2>
                <div className={style.cards}>
                    <div className={style.card}>
                        <div className={style.logo}>
                            <BsCalendar />
                        </div>
                        <h1>{t("home3.card1.h1")}</h1>
                        <p>{t("home3.card1.p")}</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.logo}>
                            <RiChatSettingsLine />
                        </div>
                        <h1>{t("home3.card2.h1")}</h1>
                        <p>{t("home3.card2.p")}</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.logo}>
                            <FaDollarSign />
                        </div>
                        <h1>{t("home3.card3.h1")}</h1>
                        <p>{t("home3.card3.p")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3
