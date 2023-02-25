import cls from './Header.module.scss';
import Carusel from '../Carusel/Carusel';
import ArrowIcons from '../Icons/ArrowIcons';

const Header = () => {
    return (
        <>
            <div className={cls.wrap}>
                <div className={cls.info}>
                    <div className={cls.breadCrumbs}>
                        <span className={cls.location}>Отели</span>
                        <ArrowIcons/>
                        <span>Москва</span>
                    </div>
                    <div className={cls.date}>
                        07 июля 2020
                    </div>
                </div>
            </div>
            <div>
                <Carusel />
            </div>
        </>
    );
}

export default Header;