import React, { useState } from 'react'
import cls from './SearchModal.module.scss';
import Button from '../Button/Button';

const SearchModal = ({
    onSearchChange,
}) => {
    const [contryName, setContryName] = useState('Москва');
    const [dayCount, setDayCount] = useState(1);
    const [date, setDate] = useState( new Date().toISOString().split('T')[0]);

    let handleSubmit = (event) => {
        event.preventDefault();
        if (!onSearchChange) return;
        onSearchChange(contryName);
    }

    return (
        <div className={cls.wrap}>
            <form>
                <label>
                    <span>Локация</span>
                    <input
                        type="text"
                        value={contryName}
                        onChange={(e) => setContryName(e.target.value)} />
                </label>
                <label>
                    <span>Дата Заселения</span>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                </label>
                <label>
                    <span>Количество дней</span>
                    <input
                        type="number"
                        value={dayCount}
                        onChange={(e) => setDayCount(e.target.value)} />
                </label>
                <Button className='button' onClick={handleSubmit}>
                    Найти
                </Button>
            </form>
        </div>
    );
}

export default SearchModal;