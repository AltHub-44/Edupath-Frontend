import '../styles/footer.css';
import tweetIcon from '../assets/tweet.png'; 
import facebookIcon from '../assets/facebook.png'; 
import webIcon from '../assets/web.png'; 
import instaIcon from '../assets/insta.png'; 
import youtubeIcon from '../assets/youtube.png'; 



const Footer = () => (
  <div className="footer">
    
   <div className='phase1'>
    <b>Edupah</b>
    <p>© 2024 Edupath</p>
    <p>All rights</p>
    <p>reserved</p>
    <div className="icons">
        <img src={tweetIcon} alt="tweeter" />
        <img src={facebookIcon} alt="facebook" />
        <img src={webIcon} alt="web" />
        <img src={instaIcon} alt="instagram" />
        <img src={youtubeIcon} alt="youtube" />
    </div>
   </div>


   <div className='phase2'>
    <b>Get in touch</b>
    <p>123 Freedom way</p>
    <p>Unity District Lagos Nigeria</p>
    <p>info@email.com</p>
    <p>00(123)4567890</p>
   </div>




   <div className='phase3'>
    <b>Learn more</b>
    <p>About Us</p>
    <p>Our Story</p>
    <p>Term Of Use</p>
    <p>Privacy Policy</p>
   </div>



   <div className='phase4'>
    <b>Our Newsletter</b>
    <p>Subscribe to our newsletter to get news update sent to you immediately</p>
   <div className="subscribe"><input type="email" /><input type="submit" value="Join"/></div> 
   </div>

  </div>
);

export default Footer;