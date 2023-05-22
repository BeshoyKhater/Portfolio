import { MdEmail } from "react-icons/md"
import { BsMessenger } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"

const Contact = () => {
  return (
    <section id="Contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below</p>
      <div className="socials__contact "data-aos="fade-up"
     data-aos-anchor-placement="top-center">
        <a href="https://email.com/" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
        <a href="https://messenger.com/" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
        <a href="https://whatsapp.com/" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
      </div>
    </section>
  )
}

export default Contact