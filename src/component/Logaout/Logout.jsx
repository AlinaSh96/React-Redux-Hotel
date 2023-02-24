import LogoutIcons from '../Icons/LogoutIcons';
import cls from './Logout.module.scss';

export const Logout = () => {

    return (
        <div className={cls.wrapper}>
         <span>Выйти</span>
         <LogoutIcons/>
        </div>
    )
}

