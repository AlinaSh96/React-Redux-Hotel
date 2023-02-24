import React, { useEffect } from 'react'
import cls from './MainPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import { getHotelfetch } from "../../store/hotel/hotelSlice"
import SearchModal from '../../component/searchModal/searchModal.';
import HotelView from '../../component/HotelView/HotelView';
import FavoriteModal from '../../component/FavoriteModal/FavoriteModal';
import Button from '../../component/Button/Button';



export const MainPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getHotelfetch('moscow'))

    }, [dispatch])


    const handleSearchChange = (country) => {
        dispatch(getHotelfetch(country));
      };
    return (
        <div className={cls.wrap}>
            <SearchModal 
                onSearchChange={handleSearchChange}
               />
               <FavoriteModal/>
               <HotelView/>
               <Button
        >
           ТЕСТ
        </Button>
        </div>
    )
}


