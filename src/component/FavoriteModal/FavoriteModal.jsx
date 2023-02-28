import { useState, useEffect } from 'react';
import cls from './FavoriteModal.module.scss';
import { useSelector } from 'react-redux';
import { getHotelsFromFavotite } from '../../store/hotel/hotelSelector';
import HotelItem from '../HotelItem/HotelItem';
import classNames from 'classnames';
import {
    FILTER_COST_DOWN,
    FILTER_COST_UP,
    FILTER_RAITING_DOWN,
    FILTER_RATING_UP
} from './constants';

const FavoriteModal = () => {
    const hotelsDate = useSelector(getHotelsFromFavotite());
    const [hotels, setHotel] = useState(hotelsDate);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        setHotel(hotelsDate);
    }, [hotelsDate]);

    const handleSortASCByfield = (field) => {
        const sorted = [...hotels].sort((a, b) => a[field] - b[field]);
        setHotel(sorted);
        setFilter(field === 'priceAvg' ? 'COST_UP' : 'RATING_UP');
    };

    const handleSortDESCByfield = (field) => {
        const sorted = [...hotels].sort((a, b) => b[field] - a[field]);
        setHotel(sorted);
        setFilter(field === 'priceAvg' ? 'COST_DOWN' : 'RAITING_DOWN');
    };
    return (
        <div className={cls.wrap}>
            <p className={cls.title}>Избранное</p>
            <div className={cls.filterArea}>
                <div
                    className={classNames([cls.filterByRaiting], {
                         [cls.checkFilter]: [FILTER_RATING_UP, FILTER_RAITING_DOWN].includes(filter)
                    })}
                >
                    <span>Рейтинг</span>
                    <div className={cls.arrow}>
                        <i
                            className={classNames([cls.arrowUp], {
                                [cls.fill]: filter === FILTER_RATING_UP
                            })}
                            onClick={() => handleSortASCByfield('stars')}
                        ></i>
                        <i
                            className={classNames([cls.arrowDown], {
                                [cls.fill]: filter === FILTER_RAITING_DOWN
                            })}
                            onClick={() => handleSortDESCByfield('stars')}
                        ></i>
                    </div>
                </div>
                <div
                    className={classNames([cls.filterByPrice], {
                        [cls.checkFilter]: [FILTER_COST_UP, FILTER_COST_DOWN].includes(filter)
                    })}
                >
                    <span>Цена</span>
                    <div className={cls.arrow}>
                        <i
                            className={classNames([cls.arrowUp], {
                                [cls.fill]: filter === FILTER_COST_UP
                            })}
                            onClick={() => handleSortASCByfield('priceAvg')}
                        ></i>
                        <i
                            className={classNames([cls.arrowDown], {
                                [cls.fill]: filter === FILTER_COST_DOWN
                            })}
                            onClick={() => handleSortDESCByfield('priceAvg')}
                        ></i>
                    </div>
                </div>
            </div>
            {hotels.length === 0
                ? 'Пусто'
                : hotels?.map((hotel) => (
                      <HotelItem key={hotel.hotelId} hotels={hotel} view="favoriteHotel" />
                  ))}
        </div>
    );
};

export default FavoriteModal;
