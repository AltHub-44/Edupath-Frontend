import '../styles/contact.css';
import contactImage from '../assets/contact.png'; 
import callIcon from '../assets/telephone.png'; 
import mailIcon from '../assets/mail.png'; 


const Contact = () => (
  <div className="contact">
    <div className="side1">
        <p>Contact Us</p>
        <h3>Got any questions?  Do not hesitate to get in touch. </h3>
        <div  className="call"> <span><img src={callIcon} alt="phone" /></span>      <span>phone <br />  00(123)4567890</span> </div>
        <div className="mail"> <span><img src={mailIcon} alt="mail" /></span> <span>Email <br /> sandbox@email.com</span> </div>
    </div>
        



    <div className="side2">
        <img src={contactImage} alt="contact" />
    </div>

  </div>
);

export default Contact;