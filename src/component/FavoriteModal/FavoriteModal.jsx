import React, { useState, useEffect } from 'react'
import cls from './FavoriteModal.module.scss';
import { useSelector } from 'react-redux';
import { getHotelsFromFavotite } from '../../store/hotel/hotelSelector';
import HotelItem from '../HotelItem/HotelItem';
import classNames from 'classnames';


const FavoriteModal = () => {
  const hotelsDate = useSelector(getHotelsFromFavotite());
  const [hotel, setHotel] = useState(hotelsDate);
  const [isCheckFilter, setCheckFilter] = useState(false);

  useEffect(() => {
    setHotel((hotel) => hotel = hotelsDate)
  }, [hotelsDate]);


  const handleSortASCByfield = (field) => {
    setCheckFilter((isCheckFilter) => !isCheckFilter);
    let sortHotel = [...hotel];
    sortHotel.sort(function(a, b) {
      return a[field] - b[field];
    });
     setHotel(sortHotel);
  }

  const handleSortDESCByfield = (field) => {
    let sortHotel = [...hotel];
    sortHotel.sort(function(a, b) {
      return b[field] - a[field];
    });
     setHotel(sortHotel);
  }

  return (
    <div className={cls.wrap}>
      <p className={cls.title}>Избранное</p>
      <div className={cls.filterArea}>
        <div className={cls.filterByRaiting}>
          <span>Рейтинг</span>
          <div className={cls.arrow}>
            <i  className={classNames( cls.arrowUp, { [cls.fill]: isCheckFilter })} onClick={() => handleSortASCByfield('raiting')}></i>
            <i onClick={() => handleSortDESCByfield('raiting')} className={cls.arrowDown}></i>
          </div>
        </div>
        <div className={cls.filterByPrice}>
          <span>Цена</span>
          <div className={cls.arrow}>
            <i className={classNames( cls.arrowUp, { [cls.fill]: isCheckFilter })}  onClick={() => handleSortASCByfield('price')}></i>
            <i onClick={() => handleSortDESCByfield('price')} className={cls.arrowDown}></i>
          </div>
        </div>
      </div>
      {hotel.length === 0 ? 'Пусто' :
        hotel?.map((hotel) => (
          <HotelItem key={hotel.id} hotels={hotel} view='favoriteHotel' isFavorite='true'/>
        ))
      }

    </div>
  )
}

export default FavoriteModal;