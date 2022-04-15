import React from 'react'
import style from './About4.module.css'
import {useTranslation} from 'react-i18next'

const About = () => {   
    const {t}=useTranslation();
    return (
        <div className={style.main} >
            <div className={style.inMain}>
                <div className={style.header}>
                    <h2>
                        {t("about4.h2")}
                    </h2>
                    <p>
                    {t("about4.p")}
                    </p>
                </div>
                <div className={style.flex}>
                    <div className={style.block}>
                        <h3>
                        {t("about4.block1.h3")}
                        </h3>
                        <p>
                        {t("about4.block1.p")}
                        </p>
                    </div>
                    <div className={style.block}>
                        <h3>
                        {t("about4.block2.h3")}
                        </h3>
                        <p>
                        {t("about4.block2.p")}
                        </p>
                    </div>
                    <div className={style.block}>
                        <h3>
                        {t("about4.block3.h3")}
                        </h3>
                        <p>
                        {t("about4.block3.p")}  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
