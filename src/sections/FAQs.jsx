import React, { useState } from 'react'
import Cards from '../components/Cards'
import { faqs } from '../data'
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"

const Faq = ({el})=>{
  const [showAnswer,setShowAnswer]= useState(false)
 return (
        <Cards className="faq" onClick={()=>setShowAnswer(prev =>!prev)}>
                <div>
                  <h5>{el.question}</h5>
                  <button className="faqs__button">
                    {showAnswer?<AiOutlineMinus/>:<AiOutlinePlus/>}  
                  </button>
                </div>
                {showAnswer && <p>{el.answer}</p> }
              </Cards>
     )
}

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam qui voluptates culpa corporis architecto tempore.</p>
      <div className="container faqs__container row g-3">
        {faqs.map((el)=>{
          return (
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" key={el.id} className="col-lg-6 col-12">
             <Faq el={el}/>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQs