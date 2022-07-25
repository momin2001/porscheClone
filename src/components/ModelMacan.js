import React from 'react'
import style from '../style/modelDetail.module.css'
import { Carousel } from 'react-responsive-carousel'
import Macan360 from './Macan360'

const ModelMacan = () => {
    return (
        <>
          <section class={style.contain}>
            <Carousel showThumbs={false}>
                <div class={style.modelContainer}>
                    <h1>Macan</h1>
                    <img src="https://i.ibb.co/dMBM1NY/macan.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>195kW/265 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>6,4s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>232km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div class={style.modelContainer}>
                    <h1>Macan T</h1>
                    <img src="https://i.ibb.co/v34NKYB/macant.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>195kW/265 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>6,2s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>232km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div class={style.modelContainer}>
                    <h1>Macan S</h1>
                    <img src="https://i.ibb.co/1RXfS7B/macans.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>280kW/380 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>4,8s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>259km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div class={style.modelContainer}>
                    <h1>Macan GTS</h1>
                    <img src="https://i.ibb.co/b3zJh7L/macangts.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>324kW/440 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>4,5s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>272km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                </Carousel>
                </section>
                <Macan360/>
        </>
    )
}

export default ModelMacan