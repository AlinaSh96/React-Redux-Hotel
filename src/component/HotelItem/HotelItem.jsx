import cls from './HotelItem.module.scss';
import { isFavoriteHotel } from '../../store/hotel/hotelSelector';
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../store/hotel/hotelSlice';
import HouseItems from '../Icons/houseIcons';
import RaitingIcons from '../Icons/RaitingIcons';
import FavoriteIcons from '../Icons/FavoriteIcons/FavoriteIcons';
import classNames from 'classnames';


const HotelItem = ({ hotels, view}) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector(isFavoriteHotel(hotels.id));
    const handleClick = () => {
        dispatch(addToFavorite(hotels));
    }

    return (
        <div className={classNames(cls.wrapper, cls[view])}>
          {view === 'listHotel' && <div className={cls.image}>
                <HouseItems/>
            </div> }
            <div className={cls.info}>
                <p className={cls.label}>{hotels.label}</p>
                <p className={cls.chekinDate}>7 июля 2020</p>
                <div  className={cls.raiting}>
                    {/* ПЕРЕПИСАТЬ!!!!! */}
                 <RaitingIcons/>   
                 <RaitingIcons/>
                 <RaitingIcons/>
                 <RaitingIcons/>
                 <RaitingIcons/>
                 </div>
            </div>
            <div className={cls.additionalInfo}>
            <div className={cls.favorite}>
                <FavoriteIcons  isCheck = {isFavorite} handleClick = {handleClick} hotels={hotels}/>
            </div>
            <div className={cls.price}></div>
            <p>
                <span className={cls.label}>Price:</span>
                <span className={cls.price}>{hotels.price} Р</span>
            </p>
            </div>
        </div>
    );
}

export default HotelItem;