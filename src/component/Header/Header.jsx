import cls from './Header.module.scss';
import Carusel from '../Carusel/Carusel';
import ArrowIcons from '../Icons/ArrowIcons';
import { useSelector } from 'react-redux';
import { getBookingInfo } from '../../store/hotel/hotelSelector';

const Header = () => {
    const bookingDate = useSelector(getBookingInfo());

    return (
        <>
            <div className={cls.wrap}>
                <div className={cls.info}>
                    <div className={cls.breadCrumbs}>
                        <span className={cls.location}>Отели</span>
                        <ArrowIcons />
                        <span>{bookingDate.city}</span>
                    </div>
                    <div className={cls.date}>{bookingDate.date}</div>
                </div>
            </div>
            <div>
                <Carusel />
            </div>
        </>
    );
};

export default Header;
