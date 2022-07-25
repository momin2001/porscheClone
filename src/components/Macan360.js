import React from 'react'
import ThreeSixty from 'react-360-view'
import style from '../style/model360.module.css'


const Macan360 = () => {

    return (
        <>

            <section className={style.container}>
                <h1>360 Exterior</h1>
                <div className={style.contain360}>
                    <ThreeSixty
                        amount={51}
                        imagePath="imgMacan360/"
                        fileName="macan{index}.jpg"
                    />
                </div>
            </section>
        </>
    )

}

export default Macan360