import AboutImage from "../images/about1.jpg"
import {HiDownload} from "react-icons/hi"
import { about } from "../data"
import Cards from "../components/Cards"
import { Row } from "react-bootstrap"


const About = () => {
  return (
    <section id="About"  >
      <div className=" container about__container " data-aos="zoom-in-up">
        <Row className="justify-content-between g-5">
          <div className="col-lg-5">
            <div data-aos="fade-right" className="about__left ">
              <div className="about__portrait">
                <img src={AboutImage} alt="AboutImage" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div data-aos="fade-left" className="about__right">
              <h2>About Me</h2>
              <div className="about__cards">
                {about.map(({id,icon,desc,title})=>{
                  return (
                    <Cards key={id} className="about__card">
                      <span>{icon}</span>
                      <h5>{title}</h5>
                      <small>{desc}</small>
                    </Cards>
                  )
                })}
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum libero deleniti facere, consequatur quidem vel ratione harum earum culpa. Ratione ex rerum unde doloremque labore eligendi. Quo, quidem aliquam!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dicta iure quam veritatis odit totam. Sapiente laboriosam alias sed voluptas molestias cum eum, sequi pariatur autem amet quaerat eos laudantium illo, dolorem explicabo assumenda tenetur, minus impedit deleniti porro exercitationem quo! Voluptate quae autem vel ad sunt molestias iure dolores?</p>
              <a href="/" download className="Btn primary" > Download CV <HiDownload/></a>
          </div>
          </div>
        </Row>
      </div>
    </section>
  )
}

export default About