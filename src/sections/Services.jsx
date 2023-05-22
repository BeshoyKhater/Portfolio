import { services } from "../data"
import Cards from "../components/Cards"

const Services = () => {
  return (
    <section id="Services">
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className="container row services__container justify-content-between g-4">
        {services.map(({id,icon,title,desc})=>{
          return (
            <div data-aos="zoom-in" key={id} className="col-lg-6  col-md-6 col-12">
              <Cards  className="service light ">
                <div className="service__icon">{icon}</div>
                <div className="service__details">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </Cards>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services