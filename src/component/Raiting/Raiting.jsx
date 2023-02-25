import cls from './Raiting.module.scss';
import { MAX_RATING } from './constants';
import RaitingIcon from '../Icons/RaitingIcon';
import RaitingIconGold from '../Icons/RaitingIconGold';

export const Raiting = ({ value }) => {
    return (
        <div className={cls.wrapper}>
            {new Array(MAX_RATING)
                .fill(null)
                .map((_, index) => (index >= value ? <RaitingIcon /> : <RaitingIconGold />))}
        </div>
    );
};
