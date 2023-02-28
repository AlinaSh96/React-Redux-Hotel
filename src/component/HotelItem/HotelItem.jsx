import cls from './HotelItem.module.scss';
import { isFavoriteHotel, getBookingInfo } from '../../store/hotel/hotelSelector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../store/hotel/hotelSlice';
import HouseItems from '../Icons/HouseIcons';
import FavoriteIcons from '../Icons/FavoriteIcons/FavoriteIcons';
import classNames from 'classnames';
import { Raiting } from '../Raiting/Raiting';

const HotelItem = ({ hotels: hotel, view }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector(isFavoriteHotel(hotel.hotelId));
    const handleClick = () => {
        dispatch(addToFavorite(hotel));
    }
    
    const bookingDate = useSelector(getBookingInfo());

    return (
        <div className={classNames(cls.wrapper, cls[view])}>
            {view === 'listHotel' && (
                <div className={cls.image}>
                    <HouseItems />
                </div>
            )}
            <div className={cls.info}>
                <p className={cls.label}>{hotel.hotelName}</p>
                <div className={cls.date}>
                    <span>{JSON.parse(bookingDate.date)}</span>
                    <span>-</span>
                    <span>{bookingDate.days}</span>
                </div>
                <div className={cls.raiting}>
                    <Raiting key = {hotel.hotelId} value={hotel.stars} id={hotel.hotelId} size="small" />
                </div>
            </div>
            <div className={cls.additionalInfo}>
                <div className={cls.favorite}>
                    <FavoriteIcons isCheck={isFavorite} handleClick={handleClick} hotels={hotel} />
                </div>
                <div className={cls.price}></div>
                <p>
                    <span className={cls.label}>Price:</span>
                    <span className={cls.price}>{hotel.priceAvg} Р</span>
                </p>
            </div>
        </div>
    );
};

export default HotelItem;
