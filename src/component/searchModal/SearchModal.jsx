import cls from './SearchModal.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { setBookingInfo } from '../../store/hotel/hotelSlice';
import { useInput } from '../../hooks/input';
import { useSelector } from 'react-redux';
import { getBookingInfo } from '../../store/hotel/hotelSelector';

const SearchModal = ({ onSearchChange }) => {
    const dispatch = useDispatch();
    const bookingDate = useSelector(getBookingInfo());

    const contryName = useInput(bookingDate.city, {});
    const dayCount = useInput(bookingDate.days, {});
    const date = useInput(bookingDate.date, {});

    let handleSubmit = (event) => {
        event.preventDefault();
        if (!onSearchChange) return;
        onSearchChange(contryName.value);

        const bookingDate = {
            city: contryName.value,
            dayCount: dayCount.value,
            date: date.value
        };

        dispatch(setBookingInfo(bookingDate));
    };

    return (
        <div className={cls.wrap}>
            <form>
                <label>
                    <span>Локация</span>
                    <input
                        type="text"
                        onChange={(e) => contryName.onChange(e)}
                        value={contryName.value}
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
                <Button className="button" onClick={handleSubmit}>
                    Найти
                </Button>
            </form>
        </div>
    );
};

export default SearchModal;