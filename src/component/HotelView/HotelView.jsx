import cls from './HotelView.module.scss';
import Header from '../Header/Header';
import HotelItem from '../HotelItem/HotelItem';
import { useSelector } from 'react-redux';
import { allHotels, getHotelsFromFavotite } from '../../store/hotel/hotelSelector';

const HotelView = () => {
    const hotels = useSelector(allHotels());
    const favoriteHotels = useSelector(getHotelsFromFavotite());

    return (
        <div className={cls.wrap}>
            <Header />
            <p className={cls.favoriteCount}>Добавлено в избранное: {favoriteHotels.length}</p>
            <div className={cls.hotelContainer}>
                {hotels?.map((hotel) => (
                    <HotelItem key={hotel.id} hotels={hotel} view="listHotel" />
                ))}
            </div>
        </div>
    );
};

export default HotelView;
