import { socials } from "../data"
import HeaderImage from "../images/header1.jpg"



const Header = () => {
  
  return (
    <section id='Header'data-aos="fade-up">
      <div className= "container header__container"> 
        <div className="header__profile">
          <img  src={HeaderImage} alt="HeaderImage" />
        </div>
        <h3>Hajia Bintu</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab harum? Quibusdam eveniet, sapiente ad laborum quae ratione magnam fugit laboriosam voluptatum earum vitae placeat.</p>
        <div className="header__cta">
          <a href="#contact"className="Btn primary">Let's Talk</a>
          <a href="#portfolio"className="Btn work">My Work</a>
        </div>
        <div className="header__socials">
          {socials.map(({id,link,icon})=>{
            return (
              <a target="_blank" rel="noopener noreferrer"  key={id} href={link}>{icon}</a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Header