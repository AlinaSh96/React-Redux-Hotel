import React from 'react'
import cls from './Carusel.module.scss';
import Slider from "react-slick";
import { sliderItems } from '../../store/hotel/hotelSelector';
import {useDispatch, useSelector} from "react-redux";

const Carusel = () => {

    const sliderImages = useSelector(sliderItems());
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div>
            <Slider {...settings} className="card__container--inner">
                {sliderImages.map((item, index) => {
                    const name = 'slider1'
                    return (
                        <div
                            className={cls.item}
                            key={index}>
                            <img className={cls.test} src={require(`./${name}.png`)} alt="slider1" />
                        </div>
                    );
                })}
            </Slider>
        </div>
    )
}

export default Carusel