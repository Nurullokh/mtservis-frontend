import React from 'react'
import style from './About1.module.css'
import img from '../../../assets/images/about1.jpg'
import {useTranslation} from 'react-i18next'

const About = () => {
    const {t}=useTranslation();
    return (
        <div className={style.main} style={{backgroundImage:`url(${img})`}} >
            <div className={style.inMain}>
                <h1>
                    {t("about1.h1")}
                </h1>
            </div>
        </div>
    )
}

export default About
