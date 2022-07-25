import React from 'react'
import ThreeSixty from 'react-360-view'
import style from '../style/model360.module.css'


const Panamera360 = () => {

    return (
        <>

            <section className={style.container}>
                <h1>360 Exterior</h1>
                <div className={style.contain360}>
                    <ThreeSixty
                        amount={49}
                        imagePath="imgPanamera360/"
                        fileName="panamera{index}.jpg"
                    />
                </div>
            </section>
        </>
    )

}

export default Panamera360