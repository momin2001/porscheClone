import React, { useState } from 'react'
import style from '../style/discover.module.css'

const Discover = () => {
    const [show, setShow] = useState(false);
    function visible() {
        setShow(true);
    }
    function notVisible() {
        setShow(false);
    }
    return (

        <section className={style.secDiscover}>
            <h1>Discover</h1>
            <div className={style.imgSec}>
                <div className={style.imgbox}>
                    <img src="https://i.ibb.co/0yvNCkR/discover1.webp" className={style.image} />
                    <p>Tequipment Sound & Design</p>
                </div>
                <div className={style.imgbox}>
                    <img src="https://i.ibb.co/nPK3Rmp/discover2.webp" className={style.image} />
                    <p>Discover what makes GTS unique</p>
                </div>
                <div className={style.imgbox}>
                    <img src="https://i.ibb.co/zhyC71c/discover3.webp" className={style.image} />
                    <p>Porsche Executive Manufactur</p>
                </div>
                <div className={style.imgbox}>
                    <img src="https://i.ibb.co/F73bcfX/discover4.webp" className={style.image} />
                    <p>Porsche E-performance</p>
                </div>


            </div>
            <hr />
                <div className={style.menu}>
                    <div className={style.col1}>
                        <h2>Build & Find</h2>
                        <a href="#">Build Your Porsche</a>
                        <a href="#">Compare Models</a>
                        <a href="#">Search Pre-Owned</a>
                    </div>
                    <div className={style.col1}>
                        <h2>Online Services</h2>
                        <a href="#">Porsche Login</a>
                        <a href="#">Sign up for News</a>
                    </div>
                    <div className={style.col1}>
                        <h2>Behind the Scenes</h2>
                        <a href="#">Passion Motorsports</a>
                        <a href="#">Porsche Experience</a>
                        <a href="#">Porsche Classic</a>
                        <a href="#">Porsche Museum</a>
                    </div>
                    <div className={style.col1}>
                        <h2>Porsche Company</h2>
                        <a href="#">Capital Markets</a>
                        <a href="#">At a Glance</a>
                        <a href="#">Responsibility</a>
                        <a href="#">Jobs & Careers</a>
                        <a href="#">FAQ</a>
                        <a href="#">Christophorus-The Porsche Magazine </a>
                        <button className={style.share} onMouseOver={visible} onMouseLeave={notVisible}>Share Page</button>
                        <div className={style.social} style={{ visibility: show ? "visible" : "hidden" }} onMouseOver={visible} onMouseLeave={notVisible}>
                            <img src="https://i.ibb.co/jyh9ypz/facebook.png" width="50rem" height="50rem" />
                            <img src="https://i.ibb.co/8M4nXsW/twitter2.png" width="50rem" height="50rem" />
                            <img src="https://i.ibb.co/dW22wYF/Digg-Logo.png" width="50rem" height="50rem" />
                            <img src="https://i.ibb.co/19DSv1y/linkedin.webp" width="50rem" height="50rem" />
                            <img src="https://i.ibb.co/bdm2C96/pinterest.png" width="50rem" height="50rem" />
                        </div>
                        <div className={style.social2}  >
                            <h2>Connect with Porsche</h2>
                            <img src="https://i.ibb.co/jyh9ypz/facebook.png" width="50rem" height="50rem" />
                            <img src="https://i.ibb.co/XsMsXyB/youtube.png" width="50rem" height="50rem" />
                            <img src="https://i.ibb.co/8M4nXsW/twitter2.png" width="50rem" height="50rem" />
                            <img src="https://i.ibb.co/bdm2C96/pinterest.png" width="50rem" height="50rem" />
                            <img src="https://i.ibb.co/BGyjH5F/instagram.webp" width="50rem" height="50rem" />
                            <img src="https://i.ibb.co/19DSv1y/linkedin.webp" width="50rem" height="50rem" />

                        </div>
                    </div>
                </div>
        </section>

    )
}

export default Discover