import './Contact.css'
import {Button} from '../../Components/index'
import ContactImg from '../../image/contact.png'
import { UpButton } from '../../Components/index'

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1 className='text-uppercase text-center'>contact us</h1>
        <div className="contact-content d-flex justify-content-around mt-5 align-items-center">
          <form className='d-flex flex-column gap-3 '>
            <input type="text" className='p-2 bg-light border border-secondary' required  placeholder='Name' id="name" />
            <input type="email" className='p-2 bg-light border border-secondary' required  placeholder='Email' id="email" />
            <textarea id="subject" cols="50" rows="5" className='p-2 bg-light border border-secondary' required  placeholder='subject'></textarea>
            <Button className='text-uppercase'>
              send
            </Button>
          </form>
          <img src={ContactImg} alt="" />
        </div>
        <UpButton />
      </section>
    </>
  )
}

export default Contact