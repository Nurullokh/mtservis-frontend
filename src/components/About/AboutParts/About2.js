import React from 'react'
import style from './About2.module.css'
import {useTranslation} from 'react-i18next'

const About = () => {
    const {t}=useTranslation();

    return (
        <div className={style.main} >
            <div className={style.inMain}>
                <h4>
                    {t("about2.h4")} 
                    <span>/</span>
                    {t("about2.h4span")}
                </h4>
                <div className={style.flex}>
                    <div className={style.block}>
                        <h2>
                        {t("about2.h2")}
                        </h2>
                    </div>
                    <div className={style.block}>
                        <p>
                        {t("about2.p")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
