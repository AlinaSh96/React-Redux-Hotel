import React from 'react'
import cls from './HotelView.module.scss';
import Header from '../Header/Header';
import HotelItem from '../HotelItem/HotelItem';
import {useDispatch, useSelector} from "react-redux";
import { allHotels } from '../../store/hotel/hotelSelector';


const HotelView = () => {

const hotels = useSelector(allHotels());


console.log(hotels)
// const hotel = {
//     id: 123,
//     fullName: 'Москва Астория',
//     locationName: 'Москва Астория',
//     locationId: 'Москва Астория',
//     label: 12,
//     _score: 'Москва Астория',
//     location: 333,
// }


  return (
    <div className={cls.wrap}>
     <Header/>
     <p>Добавлено в избранное: 3 отеля</p>
     <div  className={cls.hotelContainer}>
     {hotels?.map((hotel) => (
          <HotelItem key={hotel.id} hotels={hotel} />
        ))}
     </div>
    </div>
  )
}

export default HotelView