import cls from './Auth.module.scss';
import AuthModal from '../../component/AuthModal/AuthModal';

export const AuthPage = () => {
    return (
        <div className={cls.wrap}>
            <div className={cls.blur}>
                <AuthModal />
            </div>
        </div>
    );
};
