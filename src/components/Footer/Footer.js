import React from 'react'
import style from './Footer.module.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTelegramPlane, FaFacebook } from 'react-icons/fa'
import {useTranslation} from 'react-i18next'


function Footer() {
    const {t}=useTranslation();
    if (window.location.pathname.includes('admin')) {
        return null
    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>{t("footer.h1")}</h1>
                <div className={style.icons}>
                    <div className={style.logo}>
                        <a href="./"><AiOutlineInstagram /></a>
                    </div>
                    <div className={style.logo}>
                        <a href="./"><FaTelegramPlane /></a>
                    </div>
                    <div className={style.logo}>
                        <a href="./"><FaFacebook /></a>
                    </div>
                </div>
                <h3>{t("footer.h3")}</h3>
                <h4>{t("footer.h4")}</h4>
                <a href='https://hbbhportfolio.vercel.app'>{t("footer.devLink")}</a>
            </div>
        </div>
    )
}


export default Footer
