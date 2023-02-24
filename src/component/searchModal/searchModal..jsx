import React, { useState } from 'react'
import cls from './searchModal.module.scss';


  
const searchModal = ({
    filter,
    onChange,
    onSearchChange,
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [contryName, setContryName] = useState('');
    // const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (!onSearchChange) return;
    
    //     const newFilter: any = {
    //     //  ...filter,
    //       name_like: e.target.value,
    //     //  _page: 1,
    //     };
    // console.log(e.target.value)
    //     onSearchChange(newFilter);
    //   };

      
    let handleSubmit = (event) => {
        event.preventDefault();
        if (!onSearchChange) return;
        onSearchChange(contryName);
    }

    return (
        <div className={cls.wrap}>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Локация:</span>
                    <input
                     type="text"
                     value={contryName} 
                     onChange={(e) => setContryName(e.target.value)}/>
                </label>

                <label>
                <span>Дата Заселения:</span>
                    <input type="date" />
                </label>

                <label>
                <span>Количество дней:</span>
                    <input type="number" />
                </label>

                <input type="submit" value="Найти" />
            </form>
        </div>
    )
}

export default searchModal