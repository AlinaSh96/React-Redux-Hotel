import React from 'react'
import cls from './AutorisationPage.module.scss';
import AutorisationModal from '../../component/AutorisationModal/AutorisationModal';

export const AutorisationPage = () => {
    return (
        <div className={cls.wrap}>
            <div className={cls.blur}>
                <AutorisationModal />
            </div>
        </div>
    )
}

