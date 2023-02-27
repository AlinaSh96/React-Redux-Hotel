import { useState, useEffect } from 'react';
import cls from './FavoriteModal.module.scss';
import { useSelector } from 'react-redux';
import { getHotelsFromFavotite } from '../../store/hotel/hotelSelector';
import HotelItem from '../HotelItem/HotelItem';
import classNames from 'classnames';

const FavoriteModal = () => {
    const hotelsDate = useSelector(getHotelsFromFavotite());
    const [hotels, setHotel] = useState(hotelsDate);

    useEffect(() => {
        setHotel(hotelsDate);
    }, [hotelsDate]);

    const handleSortASCByfield = (field) => {
        const sorted = [...hotels].sort((a, b) => a[field] - b[field]);
        setHotel(sorted);
    };

    const handleSortDESCByfield = (field) => {
        const sorted = [...hotels].sort((a, b) => b[field] - a[field]);
        setHotel(sorted);
    };

    return (
        <div className={cls.wrap}>
            <p className={cls.title}>Избранное</p>
            <div className={cls.filterArea}>
                <div className={cls.filterByRaiting}>
                    <span>Рейтинг</span>
                    <div className={cls.arrow}>
                        <i
                            className={classNames(cls.arrowUp)}
                            onClick={() => handleSortASCByfield('raiting')}
                        ></i>
                        <i
                            onClick={() => handleSortDESCByfield('raiting')}
                            className={cls.arrowDown}
                        ></i>
                    </div>
                </div>
                <div className={cls.filterByPrice}>
                    <span>Цена</span>
                    <div className={cls.arrow}>
                        <i
                            className={classNames(cls.arrowUp )}
                            onClick={() => handleSortASCByfield('price')}
                        ></i>
                        <i
                            onClick={() => handleSortDESCByfield('price')}
                            className={cls.arrowDown}
                        ></i>
                    </div>
                </div>
            </div>
            {hotels.length === 0
                ? 'Пусто'
                : hotels?.map((hotel) => (
                      <HotelItem key={hotel.id} hotels={hotel} view="favoriteHotel" />
                  ))}
        </div>
    );
};

export default FavoriteModal;
