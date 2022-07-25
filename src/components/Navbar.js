import React, { useState } from 'react'
import style from '../style/navbar.module.css'
import style2 from '../style/CarMenu.module.css'
import CarMenu from './CarMenu'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'


const Navbar = () => {
  const [Hover, setHover] = useState(false);
  let [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const mouseOver = () => {
    setHover(true);
  }
  const mouseLeave = () => {
    setHover(false);
  }
  let setNumber1 = () => {
    setNum(1);
  }
  let setNumber2 = () => {
    setNum(2);
  }
  let setNumber3 = () => {
    setNum(3);
  }
  let setNumber4 = () => {
    setNum(4);
  }
  let setNumber5 = () => {
    setNum(5);
  }
  let setNumber6 = () => {
    setNum(6);
  }
  let name = "911";
  let imagesrc;
  function check() {
    if (num == 1) {
      name = "718";
      imagesrc = "https://i.ibb.co/cvQTsPZ/718L.jpg";
    }
    else if (num == 2) {
      name = "911";
      imagesrc = "https://i.ibb.co/FWw3nJN/911L.jpg";
    }
    else if (num == 3) {
      name = "Taycan";
      imagesrc = "https://i.ibb.co/Xk1x4pc/taycanL.jpg";
    }
    else if (num == 4) {
      name = "Panamera";
      imagesrc = "https://i.ibb.co/Vg66hR3/panamera-L.jpg";
    }
    else if (num == 5) {
      name = "Macan";
      imagesrc = "https://i.ibb.co/1dCWCXG/macanL.jpg";
    }
    else if (num == 6) {
      name = "Cayenne";
      imagesrc = "https://i.ibb.co/PYZXFtz/cayenneL.jpg";
    }


  }
  const handleShow = () => {
    setShow(true);
    console.log('from handle show')
  }
  const handleNotShow = () => {
    setShow(false);
    console.log('from not handle show')
  }
  function check2() {
    if (show == true) {

      console.log("check2 is true")
    } else if (show == false) {
      console.log("check2 is false");
      <CarMenu name={name} image={imagesrc} />
    }

  }
  function showMenuFunc() {
    showMenu ? setShowMenu(false) : setShowMenu(true)
  }

  return (
    <>
     <MediaQuery minWidth={1216}>
      <div className={style.navbar} >
        <Link to={'/'}>
          <img src="https://i.ibb.co/wBWTfPw/Porsche-logo.png" className={style.logo} />
        </Link>

        <div className={style.modelImages} > 


          <div id="one" onMouseOverCapture={() => { mouseOver(); setNumber1() }} onMouseLeave={mouseLeave} className={style.model} >
            <img src="https://i.ibb.co/W2m2cpR/718.jpg" />
            <p>718</p>
          </div>
          <div id="two" onMouseOverCapture={() => { mouseOver(); setNumber2() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://i.ibb.co/B4dyXG7/911.jpg" />
            <p>911</p>
          </div>
          <div onMouseOver={() => { mouseOver(); setNumber3() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://i.ibb.co/25FzmxQ/taycan.jpg" />
            <p>Taycan</p>
          </div>
          <div onMouseOver={() => { mouseOver(); setNumber4() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://i.ibb.co/JrFNvpf/panamera.jpg" />
            <p>Panamera</p>
          </div>
          <div onMouseOver={() => { mouseOver(); setNumber5() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://i.ibb.co/tqSVJCR/macan.jpg" />
            <p>Macan</p>
          </div>
          <div onMouseOver={() => { mouseOver(); setNumber6() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://i.ibb.co/6swS1s3/cayenne.jpg" />
            <p>Cayenne</p>
          </div>

        </div>
        
          
        
        <div className={style.links} >
          <ul>
            <li><img src="https://i.ibb.co/RvQCXbk/shopping-bag.png" width="20px" height="20px" />Shop</li>
            <li><img src="https://i.ibb.co/cc8LV03/location.png" width="20px" height="20px" />Dealers</li>
            <li><img src="https://i.ibb.co/K0vQd1G/person.png" width="20px" height="20px" />My Porsche</li>
            <li><img src="https://i.ibb.co/mDYgtqb/dots.png" width="20px" height="20px" className={style.dots} /></li>
          </ul>
        </div>
        <div className={style.btnContain} onClick={showMenuFunc}>
          <img src="https://i.ibb.co/B6HwVZd/menu.png" className={style.menuBtn} />
        </div>
      </div>
      </MediaQuery>


     <MediaQuery maxWidth={1215}>
      <div className={style.navbar2} style={{height: !showMenu ? "50px" : "120vh", position: showMenu ? "relative" : "fixed" }}>
        <Link to={'/'}>
          <img src="https://i.ibb.co/wBWTfPw/Porsche-logo.png" className={style.logo} />
        </Link>

        
        
          <div className={style.modelImages} style={{ display: !showMenu ? "none" : "flex", flexDirection: "column" }}>


            <div id="one" onMouseOverCapture={() => { mouseOver(); setNumber1() }} onMouseLeave={mouseLeave} className={style.model} > 
              <img src="https://i.ibb.co/W2m2cpR/718.jpg" />
              <p>718</p>
            </div>
            <div id="two" onMouseOverCapture={() => { mouseOver(); setNumber2() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/B4dyXG7/911.jpg" />
              <p>911</p>
            </div>
            <div onMouseOver={() => { mouseOver(); setNumber3() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/25FzmxQ/taycan.jpg" />
              <p>Taycan</p>
            </div>
            <div onMouseOver={() => { mouseOver(); setNumber4() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/JrFNvpf/panamera.jpg" />
              <p>Panamera</p>
            </div>
            <div onMouseOver={() => { mouseOver(); setNumber5() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/tqSVJCR/macan.jpg" />
              <p>Macan</p>
            </div>
            <div onMouseOver={() => { mouseOver(); setNumber6() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/6swS1s3/cayenne.jpg" />
              <p>Cayenne</p>
            </div>
          </div>
        
        <div className={style.links} >
          <ul>
            <li><img src="https://i.ibb.co/RvQCXbk/shopping-bag.png" width="20px" height="20px" />Shop</li>
            <li><img src="https://i.ibb.co/cc8LV03/location.png" width="20px" height="20px" />Dealers</li>
            <li><img src="https://i.ibb.co/K0vQd1G/person.png" width="20px" height="20px" />My Porsche</li>
            <li><img src="https://i.ibb.co/mDYgtqb/dots.png" width="20px" height="20px" className={style.dots} /></li>
          </ul>
        </div>
        <div className={style.btnContain} onClick={showMenuFunc}>
          <img src="https://i.ibb.co/B6HwVZd/menu.png" className={style.menuBtn} />
        </div>
      </div>
      </MediaQuery>
      {check()}

      {Hover && (
        <div onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
          <CarMenu name={name} image={imagesrc} />
        </div>
      )}






    </>


  )
}

export default Navbar