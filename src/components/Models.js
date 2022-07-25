import React from 'react'
import style from '../style/models.module.css'

const Models = () => {
    return (
        <>
          <section className={style.sec}>
            <h1>Models</h1>
            <div className={style.modelContainer}>
            <div className={style.modelBox}>
                <h2>718</h2>
                <button className={style.btnBuild}>Build Your Own</button>
                <button className={style.btnModel}>All Models</button>
            </div>
            <div className={style.modelBox2}>
                <h2>911</h2>
                <button className={style.btnBuild}>Build Your Own</button>
                <button className={style.btnModel}>All Models</button>
            </div>
            <div className={style.modelBox3}>
                <h2>Taycan</h2> 
                <button className={style.btnBuild}>Build Your Own</button>
                <button className={style.btnModel}>All Models</button>
            </div>
            <div className={style.modelBox4}>
                <h2>Panamera</h2>
                <button className={style.btnBuild}>Build Your Own</button>
                <button className={style.btnModel}>All Models</button>
            </div>
            <div className={style.modelBox5}>
                <h2>Macan</h2>
                <button className={style.btnBuild}>Build Your Own</button>
                <button className={style.btnModel}>All Models</button>
            </div>
            <div className={style.modelBox6}>
                <h2>Cayenne</h2>
                <button className={style.btnBuild}>Build Your Own</button>
                <button className={style.btnModel}>All Models</button>
            </div>
            </div>
            
          </section>

        </>
    )
}
export default Models