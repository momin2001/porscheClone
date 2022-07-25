import React from 'react'
import ThreeSixty from 'react-360-view'
import style from '../style/model360.module.css'


const P911v360 = () => {

    return (
        <>

            <section className={style.container}>
                <h1>360 Exterior</h1>
                <div className={style.contain360}>
                    <ThreeSixty
                        amount={50}
                        imagePath="img911360/"
                        fileName="911{index}.jpg"
                    />
                </div>
            </section>
        </>
    )

}

export default P911v360