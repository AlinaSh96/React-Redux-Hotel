import React from 'react'
import cls from './FavoriteModal.module.scss';
import { useSelector } from 'react-redux';
import { getHotelsFromFavotite } from '../../store/hotel/hotelSelector';
import HotelItem from '../HotelItem/HotelItem';

const FavoriteModal = () => {
  const hotels = useSelector(getHotelsFromFavotite());
  return (
    <div className={cls.wrap}>
      {hotels.length === 0 ? 'Пусто' :
        hotels?.map((hotel) => (
          <HotelItem key={hotel.id} hotels={hotel} />
        ))
      }

    </div>
  )
}

export default FavoriteModal;