import { useState, useEffect } from 'react';
import cls from './AutorisationModal.module.scss';
import Button from '../Button/Button';
import { Navigate } from 'react-router-dom';
import { useInput } from '../../hooks/input';

const AutorisationModal = () => {
    const [isUserLogIn, setIsUserLogIn] = useState(false);
    const login = useInput('', { isEmail: true });
    const password = useInput('', { minLength: 8 });

    useEffect(() => {
        setIsUserLogIn(JSON.parse(localStorage.getItem('isUserLogIn')));
    }, []);

    let handleSubmit = () => {
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
                        {login.isDirty && login.emailError && (
                            <div style={{ color: 'red' }}>Некорректная почта</div>
                        )}
                        <input
                            onChange={(e) => login.onChange(e)}
                            onBlur={(e) => login.onBlur(e)}
                            value={login.value}
                            type="text"
                        />
                    </label>
                    <label>
                        Пароль:
                        {password.isDirty && password.minLengthError && (
                            <div style={{ color: 'red' }}>Слишком короткий пароль</div>
                        )}
                        <input
                            onChange={(e) => password.onChange(e)}
                            onBlur={(e) => password.onBlur(e)}
                            value={password.value}
                            type="text"
                        />
                    </label>
                    <Button disabled={!login.inputValid || password.inputValid}>Войти</Button>
                </form>
            </div>
        );
    }
};

export default AutorisationModal;
