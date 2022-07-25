import React from 'react'
import style from '../style/modelDetail.module.css'
import {Carousel} from 'react-responsive-carousel'
import Cayenne360 from './Cayenne360'

const ModelCayenne = () => {
    return (
        <> 
          <section className={style.contain}>
            <Carousel showThumbs={false}>
                <div className={style.modelContainer}>
                    <h1>Cayenne</h1>
                    <img src="https://i.ibb.co/NKVsmvV/cayenne.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>250kW/340 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>6,2s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>245km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Cayenne E-Hybrid</h1>
                    <img src="https://i.ibb.co/Q82scL4/cayennehyb.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>340kW/462 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>5,0s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>253km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Cayenne S</h1>
                    <img src="https://i.ibb.co/NKVsmvV/cayenne.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>324kW/440 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>5,2s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>265km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Cayenne GTS</h1>
                    <img src="https://i.ibb.co/NYp70bP/cayenne-GTS.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>338kW/460 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>4,8s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>270km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Cayenne Turbo</h1>
                    <img src="https://i.ibb.co/B3MTqDY/cayenne-Turbo.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>404kW/550 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>4,1s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>286km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                <div className={style.modelContainer}>
                    <h1>Cayenne Turbo GT</h1>
                    <img src="https://i.ibb.co/MZk6Rd6/cayenne-Turbogt.png" />
                    <div className={style.powerContain}>
                        <div className={style.power}>
                            <h2>471kW/640 PS</h2>
                            <p>Power[kW]/Power[PS]</p>
                        </div>
                        <div className={style.power}>
                            <h2>3,3s</h2>
                            <p>Acceleration 0-100km/h</p>
                        </div>
                        <div className={style.power}>
                            <h2>300km/h</h2>
                            <p>Top Speed</p>
                        </div>
                    </div>
                </div>
                </Carousel>
                </section>
                <Cayenne360/>
        </>
    )
}

export default ModelCayenne