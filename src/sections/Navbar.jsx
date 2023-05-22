import {data} from "../data"
import Logo from "../images/logo.jpg"
import {IoIosColorPalette} from "react-icons/io"
import { useEffect, useState } from "react"

const Navbar = ({setBackGround}) => {
  //show or hide popup
  const [showPopup,setShowPopup]=useState(false)

  //save to localStorage choose colors
  const mainColor=localStorage.getItem('color_option');
  if(mainColor !== null) {
    document.documentElement.style.setProperty("--main-color",mainColor)
  }
  //choose colors
  useEffect(() => {
    return () => {
      document.querySelectorAll(".div__colors div").forEach((div)=>{
        div.addEventListener("click",(e)=>{
          document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
          localStorage.setItem('color_option',e.target.dataset.color)
        } )
      })
    };
  });


  //background change save localStorge
  const colorWhite=localStorage.getItem('color_white');
  const colorLight=localStorage.getItem('color_light');
  const background=localStorage.getItem('background');
  if(colorWhite !== null && colorLight !== null && background !== null) {
    document.documentElement.style.setProperty("--white-color",colorWhite)
    document.documentElement.style.setProperty("--light-color",colorLight)
    document.documentElement.style.setProperty("--background",background)
  }
  //background change
  useEffect(() => {
    return () => {
      document.querySelectorAll(".background__colors div").forEach((div)=>{
        div.addEventListener("click",(e)=>{
          document.documentElement.style.setProperty("--white-color",e.target.dataset.color1)
          document.documentElement.style.setProperty("--light-color",e.target.dataset.color2)
          document.documentElement.style.setProperty("--background",e.target.dataset.background)
          localStorage.setItem('color_white',e.target.dataset.color1)
          localStorage.setItem('color_light',e.target.dataset.color2)
          localStorage.setItem('background',e.target.dataset.background)
          setBackGround(e.target.dataset.background);
        })
      })
    };
  });
  return (
    <>
    <nav>
      <div className="container nav__container" data-aos="flip-up">
        <a href="index.html" className="nav__logo"> <img src={Logo} alt="Logo" /></a>
        <ul className="nav__menu">
          {data.map(({id,link,title})=>{
            return (
              <li key={id}><a href={link}>{title}</a></li>
            )
          })}
        </ul>
        <button onClick={()=> setShowPopup(prev=>!prev)}  id="theme__icon"><IoIosColorPalette/></button>
      </div>
    </nav>

    {showPopup && 
    <>
            <div onClick={()=>setShowPopup(false)} className="overlay"></div>
            <div className="container container__theme">
          <div className="details__theme">
            <h3>Customize Your Theme</h3>
            <p>Change the primary and background color to your preference.</p>
          </div>
          <div className="colors__theme">
            <h5>Primary Color</h5>
            <div className="div__colors">
              <div data-color="#690cc6" className="purple"></div>
              <div data-color="#198754" className="green"></div>
              <div data-color="#00008B" className="dark-blue"></div>
              <div data-color="#dc3545" className="fuchsia"></div>
              <div data-color="#AF0606" className="red"></div>
              <div data-color="#c49404" className="yellow"></div>
            </div>
          </div>
          <div className="background__theme">
            <h5>Background Color</h5>
            <div className="background__colors">
              <div id="light" data-color1="#fff" data-color2="#f0eff0" data-background="light-theme"   ></div>
              <div id="black" data-color1="#000000" data-color2="#0e0d0d" data-background="dark-theme"  ></div>
            </div>
          </div>
        </div>
    </>
    }
    </>
  )
}
export default Navbar