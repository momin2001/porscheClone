import React from 'react'
import style from '../style/modelDetail.module.css'
import { Carousel } from 'react-responsive-carousel'
import P718v360 from './P718v360'


const ModelDetail = (props) => {
    return (
        <>
            <section class={style.contain}>
                <Carousel showThumbs={false}>
                    <div className={style.modelContainer}>
                        <h1>718 Cayman</h1>
                        <img src="https://i.ibb.co/0CBjkMp/cayman.png" />
                        <div className={style.powerContain}>
                            <div className={style.power}>
                                <h2>220kW/300 PS</h2>
                                <p>Power[kW]/Power[PS]</p>
                            </div>
                            <div className={style.power}>
                                <h2>5.1s</h2>
                                <p>Acceleration 0-100km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.modelContainer}>
                        <h1>718 Boxster</h1>
                        <img src="https://i.ibb.co/37vSjxS/boxster.png" />
                        <div className={style.powerContain}>
                            <div className={style.power}>
                                <h2>220kW/300 PS</h2>
                                <p>Power[kW]/Power[PS]</p>
                            </div>
                            <div className={style.power}>
                                <h2>5,1s</h2>
                                <p>Acceleration 0-100km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.modelContainer}>
                        <h1>718 Cayman T</h1>
                        <img src="https://i.ibb.co/8cdwNqZ/caymant.png" />
                        <div className={style.powerContain}>
                            <div className={style.power}>
                                <h2>220kW/300 PS</h2>
                                <p>Power[kW]/Power[PS]</p>
                            </div>
                            <div className={style.power}>
                                <h2>5,1s</h2>
                                <p>Acceleration 0-100km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.modelContainer}>
                        <h1>718 Boxster T</h1>
                        <img src="https://i.ibb.co/wSx6LNX/boxstert.png" />
                        <div className={style.powerContain}>
                            <div className={style.power}>
                                <h2>220kW/300 PS</h2>
                                <p>Power[kW]/Power[PS]</p>
                            </div>
                            <div className={style.power}>
                                <h2>5,1s</h2>
                                <p>Acceleration 0-100km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.modelContainer}>
                        <h1>718 Cayman S</h1>
                        <img src="https://i.ibb.co/0CBjkMp/cayman.png" />
                        <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>257kW/350 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>4,6s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        </div>
                    </div>
                    <div className={style.modelContainer}>
                        <h1>718 Boxster S</h1>
                        <img src="https://i.ibb.co/37vSjxS/boxster.png" />
                        <div className={style.powerContain}>
                            <div className={style.power}>
                                <h2>257kW/350 PS</h2>
                                <p>Power[kW]/Power[PS]</p>
                            </div>
                            <div className={style.power}>
                                <h2>4,6s</h2>
                                <p>Acceleration 0-100km/h</p>
                            </div>
                        </div>
                        </div>
                        <div className={style.modelContainer}>
                            <h1>718 Cayman GTS</h1>
                            <img src="https://i.ibb.co/GRZYC5L/cayman-GTS.png" />
                            <div className={style.powerContain}>
                                <div className={style.power}>
                                    <h2>294kW/400 PS</h2>
                                    <p>Power[kW]/Power[PS]</p>
                                </div>
                                <div className={style.power}>
                                    <h2>4,5s</h2>
                                    <p>Acceleration 0-100km/h</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.modelContainer}>
                            <h1>718 Boxster GTS</h1>
                            <img src="https://i.ibb.co/tQDKsdJ/boxster-GTS.png" />
                            <div className={style.powerContain}>
                                <div className={style.power}>
                                    <h2>294kW/400 PS</h2>
                                    <p>Power[kW]/Power[PS]</p>
                                </div>
                                <div className={style.power}>
                                    <h2>4,5s</h2>
                                    <p>Acceleration 0-100km/h</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.modelContainer}>
                            <h1>718 Boxster 25</h1>
                            <img src="https://i.ibb.co/Vw2kfdY/boxster25.png" />
                            <div className={style.powerContain}>
                                <div className={style.power}>
                                    <h2>294kW/400 PS</h2>
                                    <p>Power[kW]/Power[PS]</p>
                                </div>
                                <div className={style.power}>
                                    <h2>4,5s</h2>
                                    <p>Acceleration 0-100km/h</p>
                                </div>
                            </div>
                        </div>
                    

                </Carousel>

            </section>
            <P718v360/>
        </>
    )
}

export default ModelDetail