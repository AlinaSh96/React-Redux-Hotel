import React from 'react'
import cls from './HotelItem.module.scss';
import HouseItems from '../Icons/houseIcons';
import RaitingIcons from '../Icons/RaitingIcons';
import FavoriteIcons from '../Icons/FavoriteIcons/FavoriteIcons';


const HotelItem = ({ hotels }) => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.image}>
                <HouseItems/>
            </div>
            <div className={cls.info}>
                <p className={cls.label}>{hotels.label}</p>
                <p className={cls.chekinDate}>7 июля 2020</p>
                <div  className={cls.raiting}>
                 <RaitingIcons/>
                 <RaitingIcons/>
                 <RaitingIcons/>
                 <RaitingIcons/>
                 <RaitingIcons/>
                 </div>
            </div>
            <div className={cls.additionalInfo}>
            <div className={cls.favorite}>
                <FavoriteIcons  hotels={hotels}/>
            </div>
            <div className={cls.price}></div>
            <p>
                <span className={cls.label}>Price:</span>
                <span className={cls.price}>23 924 Р</span>
            </p>
            </div>
        </div>
    )
}

export default HotelItem