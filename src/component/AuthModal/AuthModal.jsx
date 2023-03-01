import { useState, useEffect } from 'react';
import cls from './AuthModal.module.scss';
import Button from '../Button/Button';
import { Navigate } from 'react-router-dom';
import { useInput } from '../../hooks/input';

const AuthModal = () => {
    const [isUserLogIn, setIsUserLogIn] = useState(false);
    const login = useInput('', { isEmail: true });
    const password = useInput('', { minLength: 8 });

    useEffect(() => {
        setIsUserLogIn(JSON.parse(localStorage.getItem('isUserLogIn')) || false);
    }, []);

    let handleSubmit = () => {
        console.log(1234);
        localStorage.setItem('isUserLogIn', JSON.stringify(true));
        setIsUserLogIn(true);
    };

    if (isUserLogIn) {
        return <Navigate to="main" />;
    } else {
        return (
            <div className={cls.wrap}>
                <p className={cls.label}>Simple Hotel Check</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Логин:
                        <input
                            onChange={(e) => login.onChange(e)}
                            onBlur={(e) => login.onBlur(e)}
                            value={login.value}
                            type="text"
                        />
                        {login.isDirty && login.emailError && (
                            <div style={{ color: 'red' }}>Некорректная почта</div>
                        )}
                    </label>
                    <label>
                        Пароль:
                        <input
                            onChange={(e) => password.onChange(e)}
                            onBlur={(e) => password.onBlur(e)}
                            value={password.value}
                            type="text"
                        />
                        {password.isDirty && password.minLengthError && (
                            <div style={{ color: 'red' }}>Слишком короткий пароль</div>
                        )}
                    </label>
                    {(!login.inputValid || password.inputValid) && (
                            <div style={{ color: 'red' }}>Введите логин и пароль</div>
                        )}
                    <Button disabled={!login.inputValid || password.inputValid}>Войти</Button>
                </form>
            </div>
        );
    }
};

export default AuthModal;
