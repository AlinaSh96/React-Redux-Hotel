import React, { useEffect } from 'react'
import cls from './HotelItem.module.scss';
import HouseItems from '../Icons/houseIcons';
import RaitingIcons from '../Icons/RaitingIcons';
import FavoriteIcons from '../Icons/FavoriteIcons/FavoriteIcons';
import classNames from 'classnames';
import { isFavoriteHotel } from '../../store/hotel/hotelSelector';
import {  useSelector } from 'react-redux';

const HotelItem = ({ hotels, view, isFavorite }) => {

    const fav = useSelector(isFavoriteHotel(hotels.id));
    console.log(fav)


    return (
        <div className={classNames(cls.wrapper, cls[view])}>
          {view === 'listHotel' && <div className={cls.image}>
                <HouseItems/>
            </div> }
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
                <FavoriteIcons  hotels={hotels} isFavorite={isFavorite}/>
            </div>
            <div className={cls.price}></div>
            <p>
                <span className={cls.label}>Price:</span>
                <span className={cls.price}>{hotels.price} Р</span>
            </p>
            </div>
        </div>
    )
}

export default HotelItem