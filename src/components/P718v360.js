import React from 'react'
import ThreeSixty from 'react-360-view'
import style from '../style/model360.module.css'


const P718v360 = () => {

    return (
        <>

            <section className={style.container}>
                <h1>360 Exterior</h1>
                <div className={style.contain360}>
                    <ThreeSixty
                        amount={49}
                        imagePath="img718360/"
                        fileName="718{index}.jpg"
                    />
                </div>
            </section>
        </>
    )

}

export default P718v360