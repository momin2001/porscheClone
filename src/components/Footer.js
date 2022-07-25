import React from 'react'
import style from '../style/footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={style.container}>
                <h1>Change Country/Region</h1>
                <div className={style.input}>

                    <select name="location" id="location">
                        <option defaultValue="select a region">Select a Region</option>
                        <option value="North America">North America</option>
                        <option value="Latin America">Latin America</option>
                        <option value="Europe">Europe</option>
                        <option value="Middle East">Middle East</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Australia/Oceania">Australia/Ocea</option>

                    </select>
                    <select name="location2" id="location2">
                        <option defaultValue="select a Country/region">Select a Country/Region</option>

                    </select>
                    <hr />
                    <div className={style.content}>
                        <p>
                            © 2022 Dr. Ing. h.c. F. Porsche AG.  Legal notice. Privacy Policy. Cookie Policy. Consumption/Emissions. Open Source Software Notice.<br /><br/>

                            * Data determined in accordance with the measurement method required by law. Since 1 September 2017 certain new cars have been type approved in accordance with the Worldwide Harmonised Light Vehicles Test Procedure (WLTP), a more realistic test procedure to measure fuel/electricity consumption and CO₂ emissions. As of 1 September 2018 the WLTP replaced the New European Driving Cycle (NEDC). Due to the more realistic test conditions, the fuel/electricity consumption and CO₂ emission values determined in accordance with the WLTP will, in many cases, be higher than those determined in accordance with the NEDC. This may lead to corresponding changes in vehicle taxation from 1 September 2018. You can find more information on the difference between WLTP and NEDC at www.porsche.com/wltp.<br/><br/>

                            Currently, we are still obliged to provide the NEDC values, regardless of the type approval process used. The additional reporting of the WLTP values is voluntary until their obligatory use. As far as new cars (which are type approved in accordance with the WLTP) are concerned, the NEDC values will, therefore, be derived from the WLTP values during the transition period. To the extent that NEDC values are given as ranges, these do not relate to a single, individual car and do not constitute part of the offer. They are intended solely as a means of comparing different types of vehicle. Extra features and accessories (attachments, tyre formats, etc.) can change relevant vehicle parameters such as weight, rolling resistance and aerodynamics and, in addition to weather and traffic conditions, as well as individual handling, can affect the fuel/electricity consumption, CO₂ emissions and performance values of a car.

                            <br/><br/>** Important information about the all-electric Porsche models can be found here.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer