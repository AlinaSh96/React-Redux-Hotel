import LogoutIcons from '../Icons/LogoutIcons';
import cls from './LogOut.module.scss';

export const LogOut = () => {
    return (
        <div className={cls.wrapper}>
            <span>Выйти</span>
            <LogoutIcons />
        </div>
    );
}

