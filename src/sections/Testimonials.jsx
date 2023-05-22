import Cards from "../components/Cards"
import { testimonials } from "../data"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Testimonials = () => {
  const params ={
    breakpoints:{
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
          },
  slidesPerView :1,
  pagination:{
    clickable: true
  },
  modules:[Pagination],
  }
  return (
    <section className="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testimonials from some of my clients</p>
      <div  className="container testimonials__container"data-aos="zoom-out-up" data-aos-duration="3000" >
        <Swiper  className="mySwiper" {...params}>
            {testimonials.map(({id,name,quote,job,avatar})=>{
              return (
                <SwiperSlide key={id}>
                  <Cards  className="testimonial">
                    <p>{quote}</p>
                    <div className="details">
                      <div className="details__image">
                        <img src={avatar} alt={name} />
                      </div>
                      <div className="details_person">
                        <h3>{name}</h3>
                        <p>{job}</p>
                      </div>
                    </div>
                  </Cards>
                </SwiperSlide>
              )
            })}

        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
