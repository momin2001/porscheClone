import React from 'react'
import style from '../style/modelDetail.module.css'
import {Carousel} from 'react-responsive-carousel'
import Taycan360 from './Taycan360'

const ModelTaycan = () => {
    return (
        <>
          <section className={style.contain}>
            <Carousel showThumbs={false}>
                <div className={style.modelContainer}>
                    <h1>Taycan</h1>
                    <img src="https://i.ibb.co/vw0scwG/taycan.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>300kW/408 PS</h2>
                            <p>Overboost power with Launch<br/> Control
                                 upto [kW]/Overboost<br/> Power with 
                                 Launch Control upto<br/> [PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>5,4s</h2>
                            <p>Acceleration 0-100km/h with<br/> Launch Control</p>
                        </div>
                        <div className={style.power}>
                            <h2>230km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Taycan 4S</h1>
                    <img src="https://i.ibb.co/BjFK8m9/taycan4s.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>390kW/530 PS</h2>
                            <p>Overboost power with Launch<br/> Control
                                 upto [kW]/Overboost<br/> Power with 
                                 Launch Control upto<br/> [PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>4,0s</h2>
                            <p>Acceleration 0-100km/h with<br/> Launch Control</p>
                        </div>
                        <div className={style.power}>
                            <h2>250km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Taycan GTS</h1>
                    <img src="https://i.ibb.co/J2wNZfM/taycangts.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>440kW/598 PS</h2>
                            <p>Overboost power with Launch<br/> Control
                                 upto [kW]/Overboost<br/> Power with 
                                 Launch Control upto<br/> [PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>3,7s</h2>
                            <p>Acceleration 0-100km/h with<br/> Launch Control</p>
                        </div>
                        <div className={style.power}>
                            <h2>250km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Taycan Turbo</h1>
                    <img src="https://i.ibb.co/dp7bwTw/taycan-Turbo.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>500kW/680 PS</h2>
                            <p>Overboost power with Launch<br/> Control
                                 upto [kW]/Overboost<br/> Power with 
                                 Launch Control upto<br/> [PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>3,2s</h2>
                            <p>Acceleration 0-100km/h with<br/> Launch Control</p>
                        </div>
                        <div className={style.power}>
                            <h2>260km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Taycan Turbo S</h1>
                    <img src="https://i.ibb.co/P9rM6mw/taycan-Turbos.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>560kW/761 PS</h2>
                            <p>Overboost power with Launch<br/> Control
                                 upto [kW]/Overboost<br/> Power with 
                                 Launch Control upto<br/> [PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>2,8s</h2>
                            <p>Acceleration 0-100km/h with<br/> Launch Control</p>
                        </div>
                        <div className={style.power}>
                            <h2>260km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>

                </Carousel>
                </section> 
                <Taycan360/>
        </>
    )
} 

export default ModelTaycan   