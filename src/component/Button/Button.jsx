import classNames from 'classnames';
import cls from './Button.module.scss'

export const Button = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
export default Button;