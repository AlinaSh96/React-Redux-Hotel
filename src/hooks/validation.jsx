import { useState, useEffect } from 'react';

export const useValidation = (value, validations) => {
    const [minLengthError, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    setMinLengthError(value.length < validations[validation]);
                    break;
                case 'isEmail':
                    const re =
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    setEmailError(!re.test(String(value).toLowerCase()));
                    break;
                default:
            }
        }
    }, [value]);

    useEffect(() => {
        setInputValid(!minLengthError && !emailError);
    }, [minLengthError, emailError]);

    return {
        minLengthError,
        emailError,
        inputValid
    };
};
