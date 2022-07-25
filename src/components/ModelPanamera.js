import React from 'react'
import style from '../style/modelDetail.module.css'
import {Carousel} from 'react-responsive-carousel'
import Panamera360 from './Panamera360'

const ModelPanamera = () => {
    return (
        <>
          <section class={style.contain}>
            <Carousel showThumbs={false}>
                <div className={style.modelContainer}>
                    <h1>Panamera</h1>
                    <img src="https://i.ibb.co/tsdkRjB/panamera.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>243kW/330 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>5,6s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>270km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Panamera 4S</h1>
                    <img src="https://i.ibb.co/DbbZ7r7/panamera4s.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>243kW/330 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>4,3s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>295km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Panamera 4S E-Hybrid</h1>
                    <img src="https://i.ibb.co/m8cfwvV/panamera4sehyb.png" />
                    <div className={style.powerContain}> 
                        <div className={style.power}>
                            <h2>243kW/330 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div> 
                        <div className={style.power}>
                            <h2>3,7s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>270km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Panamera GTS</h1>
                    <img src="https://i.ibb.co/z2PqpFT/panamera-GTS.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>353kW/480 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>3,9s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>300km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Panamera Turbo S</h1>
                    <img src="https://i.ibb.co/XtsgkqV/panamera-Turbos.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>463kW/630 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>3,1s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>315km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Panamera Turbo S E-Hybrid</h1>
                    <img src="https://i.ibb.co/bg5sYKK/panamera-Turboshyb.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>515kW/700 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>3,2s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>315km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                </Carousel>
                </section>
                <Panamera360/>
        </>
    )
}

export default ModelPanamera