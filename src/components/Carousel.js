import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import style from '../style/carousel.module.css'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => {
    return (
        <div className={style.caros}>
        <Carousel transitionTime={"1500"} interval="5000" showThumbs={false} autoPlay infiniteLoop className={style.caros}>
            <div>
                <img src="https://i.ibb.co/54RSkvg/911caros.jpg"  />
            </div>
            <div >
                <img src="https://i.ibb.co/3R0R77J/cayenne-Caros3.webp"  />
            </div>
            <div >
                <img src="https://i.ibb.co/rQHZKLh/taycancaros2.jpg"  />
            </div>
            <div>
                <img src="https://i.ibb.co/dmC04R8/718caros2.webp"  />
            </div>

        </Carousel>
        </div>
    )
}

