import cls from './Raiting.module.scss';
import { MAX_RATING } from './constants';
import RaitingIcon from '../Icons/RaitingIcon';
import RaitingIconGold from '../Icons/RaitingIconGold';
import { v4 as uuidv4 } from 'uuid';

export const Raiting = ({ value, id }) => {
    return (
        <div  className={cls.wrapper}>
            {new Array(MAX_RATING)
                .fill(null)
                .map((_, index) => (index >= value ? <RaitingIcon key={uuidv4()}/> : <RaitingIconGold  key={uuidv4()}/>))}
        </div>
    );
};
