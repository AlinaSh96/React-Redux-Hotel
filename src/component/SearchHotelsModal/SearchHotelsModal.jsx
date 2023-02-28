import cls from './SearchHotelsModal.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { setBookingInfo } from '../../store/hotel/hotelSlice';
import { useInput } from '../../hooks/input';
import { useSelector } from 'react-redux';
import { getBookingInfo } from '../../store/hotel/hotelSelector';
import { useCallback } from 'react';

const SearchHotelsModal = ({ onSearchChange }) => {
    const dispatch = useDispatch();
    const bookingDate = useSelector(getBookingInfo());

    const countryName = useInput(bookingDate.city, {});
    const dayCount = useInput(bookingDate.days, {});
    const date = useInput(bookingDate.date, {});

    const handleSubmit  = useCallback((event) => {
        event.preventDefault();
        if (!onSearchChange) return;
  
        const bookingDate = {
            city: countryName.value,
            dayCount: dayCount.value,
            date: JSON.stringify(date.value),
        };

        onSearchChange(bookingDate);

        dispatch(setBookingInfo(bookingDate));
      }, [countryName.value, dayCount.value, date.value, onSearchChange, dispatch])

    return (
        <div className={cls.wrap}>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Локация</span>
                    <input
                        type="text"
                        onChange={(e) => countryName.onChange(e)}
                        value={countryName.value}
                    />
                </label>
                <label>
                    <span>Дата Заселения</span>
                    <input 
                         type="date" 
                         onChange={(e) => date.onChange(e)} 
                         value={date.value} />
                </label>
                <label>
                    <span>Количество дней</span>
                    <input
                         type="number"
                         onChange={(e) => dayCount.onChange(e)}
                         value={dayCount.value}
                    />
                </label>
                <Button className="button">
                    Найти
                </Button>
            </form>
        </div>
    );
};

export default SearchHotelsModal;
