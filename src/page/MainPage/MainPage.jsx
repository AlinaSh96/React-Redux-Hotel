import cls from './MainPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHotelfetch } from '../../store/hotel/hotelSlice';
import { LogOut } from '../../component/LogOut/LogOut';
import SearchModal from '../../component/SearchModal/SearchModal.';
import HotelView from '../../component/HotelView/HotelView';
import FavoriteModal from '../../component/FavoriteModal/FavoriteModal';

export const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotelfetch('moscow'));
    }, [dispatch]);

    const handleSearchChange = (country) => {
        dispatch(getHotelfetch(country));
    };

    return (
        <div className={cls.wrap}>
            <LogOut />
            <div className={cls.additionalArea}>
                <SearchModal onSearchChange={handleSearchChange} />
                <FavoriteModal />
            </div>
            <HotelView />
        </div>
    );
};
