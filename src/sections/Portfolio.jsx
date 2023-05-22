import { useState } from "react"
import Cards from "../components/Cards"
import { projects ,buttons } from "../data"
import { Row } from "react-bootstrap"

const Portfolio = () => {
  const [myProjects, setMyProjects]= useState(projects)
  const [activeClass, setActiveClass]= useState("all")
  const handleClick =(type)=>{
    if (type === 'all'){
      setMyProjects(projects); 
      setActiveClass("all");}
     else {
      setMyProjects(projects.filter((el)=> el.type === type ))
      setActiveClass(type);
    }
  }

  return (
    <section id="Portfolio" >
      <h2>Recent Projects</h2>
      <p>Check Out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.</p>
      <div className="container portfolio__container" >
        <div className={`${activeClass} buttons__group text-center`}>
          {buttons.map((btn)=>(          
          <button key={btn.id} onClick={()=>handleClick(btn.type)}  className={
            `${activeClass === btn.type? "active" : ""} Btn  white`}  >{btn.text}</button>
              ))}
        </div>
        <div className="port__projects">
          <Row className="g-4">
            {myProjects.map(({id,image,title,desc})=>{
              return (
                <div data-aos="fade-up"key={id}  className="col-lg-4 col-md-6 col-12">
                  <Cards  className="project ">
                    <div className="image__project">
                      <img src={image} alt={`Project ${id}`} />
                    </div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <div className="buttons__project">
                      <a href="/" className="Btn sm">Demo</a>
                      <a href="/" className="Btn primary sm">Github</a>
                    </div>
                  </Cards>
                </div>
              )
            })}
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Portfolio