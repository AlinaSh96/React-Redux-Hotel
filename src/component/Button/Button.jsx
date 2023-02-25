import classNames from 'classnames';
import cls from './Button.module.scss'

export const Button = (props) => {
    const {
        className,
        disabled,
        children,
        ...otherProps
    } = props;

    return (
        <button
            disabled={disabled}
            type="submit"
            className={classNames(cls.button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
export default Button;