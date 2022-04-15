import React from 'react'
import style from './Home2.module.css'
import { dataRU, dataUZ } from '../../Services/ServiceList'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'

function Home2(props) {
    const {t, i18n} = useTranslation();


    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>{t("home2.h1")}</h1>
                <h2>{t("home2.h2")}</h2>
                <div className={style.services}>
                    {   i18n.language === 'ru' ?
                        dataRU.map(item => {
                            if (item.id < 8) {

                                return (
                                    <Link key={item.id} to={`/services`}>
                                        <div className={style.icon} >
                                            <img src={item.img} alt="rasm" />
                                        </div>
                                        {item.text}
                                    </Link>
                                )
                            } else {
                                return null
                            }
                        })
                        :
                        dataUZ.map(item => {
                            if (item.id < 8) {

                                return (
                                    <Link key={item.id} to={`/services`}>
                                        <div className={style.icon} >
                                            <img src={item.img} alt="rasm" />
                                        </div>
                                        {item.text}
                                    </Link>
                                )
                            } else {
                                return null
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home2
