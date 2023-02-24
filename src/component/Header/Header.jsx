import React from 'react'
import cls from './Header.module.scss';
//import Slider from "react-slick";

import Slider from '../Carusel/Carusel';
import Carusel from '../Carusel/Carusel';


const Header = () => {


    return (
        <><div className={cls.wrap}>
            <div className={cls.info}>
                <div>
                    <p className={cls.location}>ОТЕЛИ МОСКВА</p>
                </div>
                <div className={cls.date}>
                    07 июля 2020
                </div>
            </div>
        </div><div>
               <Carusel/>
            </div></>
    )
}

export default Header