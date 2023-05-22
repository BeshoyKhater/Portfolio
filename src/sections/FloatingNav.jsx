/* eslint-disable no-restricted-globals */
import {AiTwotoneHome} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import {MdMedicalServices} from "react-icons/md";
import {HiSquares2X2} from "react-icons/hi2";
import {AiFillMessage} from "react-icons/ai";
import { useEffect } from "react";


const FloatingNav = () => {
  useEffect(() => {
    return () => {
      let sections=document.querySelectorAll("main section");
        window.onscroll=function () {
          sections.forEach((section)=>{
            const sectionTop = section.offsetTop;
          if( pageYOffset >= sectionTop - 60 ){
            document.querySelectorAll("#floating__nav article a").forEach((a)=>{
              if(section.id === a.dataset.name){
                a.classList.add("active-nav")
              }else {
                a.classList.remove("active-nav")
              }
            })
          }
          })
          
        }
    };
  });

  return (
    <section id="floating__nav">
      <div className="container ">
        <div className="floating__container">
          <article>
            <a data-name="Header" href="#Header"><AiTwotoneHome/></a>
            <a data-name="About" href="#About"><BsFillPersonFill/></a>
            <a data-name="Services" href="#Services"><MdMedicalServices/></a>
            <a data-name="Portfolio" href="#Portfolio"><HiSquares2X2/></a>
            <a data-name="Contact" href="#Contact"><AiFillMessage/></a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default FloatingNav