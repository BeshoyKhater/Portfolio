import {data} from "../data"
import { FaLinkedin } from "react-icons/fa" 
import { FaFacebook } from "react-icons/fa" 
import { AiOutlineTwitter } from "react-icons/ai" 
import { AiFillInstagram } from "react-icons/ai" 


const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__links">
            <ul className="footer__menu">
              {data.map(({id,link,title})=>{
                return (
                  <li key={id}><a href={link}>{title}</a></li>
                )
               })}
            </ul>
        </div>
        <div className="footer__socials">
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener" > <FaLinkedin/></a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener" > <FaFacebook/></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener" > <AiOutlineTwitter/></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener" > <AiFillInstagram/></a>
        </div>
      </div>
        <div className="footer__copyright">
            <small>2023 BESHOY KHATER &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer