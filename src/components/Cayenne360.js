import React from 'react'
import ThreeSixty from 'react-360-view'
import style from '../style/model360.module.css'


const Cayenne360 = () => {

    return (
        <>

            <section className={style.container}>
                <h1>360 Exterior</h1>
                <div className={style.contain360}>
                    <ThreeSixty
                        amount={36}
                        imagePath="img360/"
                        fileName="cayenne{index}.jpg"
                        spinReverse="true"
                    />
                </div>
            </section>
        </>
    )
}

export default Cayenne360