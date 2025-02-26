import '../styles/features.css';
import icon from '../assets/icon.png'; 
import icon1 from '../assets/icon1.png'; 
import icon2 from '../assets/icon2.png'; 
import icon3 from '../assets/icon3.png'; 


const Features = () => (
  <div className="features">
    <div className="heading">
        <h1>Our Features</h1>
        <h4>How we help you succeed</h4>
    </div>

    <div className="grid">
        <div className="layer1">

            <div className='content1'>
            <div className="icon"> <img src={icon} alt="icon" /></div> 
                <span>
                    <b>Personalized Learning</b>
                    <p>Tailored learning plans are created based on your strength, weakness, and interests. Engaging and interactive modules
                        ensure your learning jurney is both fun and effective, all alligned with the Nigerian curriculum.
                    </p>
                </span>
            </div>



            <div className='content2'>
            <div className="icon1"> <img src={icon1} alt="icon1" /></div>   
            <span>
                    <b>Skill Building</b>
                    <p>Enhance your soft skills, including critical thinking problem solving and communication. Our modules are designed to 
                        develop the essencial skill needed for both academic succes and career advancement.

                    </p>
                </span>
            </div>
        </div>


        <div className="layer2">
            <div className='content3'>
            <div className="icon2"><img src={icon2} alt="icon2" /></div>  
            <span>
                    <b>Carrer Guidance</b>
                    <p>Connet with experinced mentors for personalized career advice. Our platform provides valuable insight into various career path
                        helping you make informed decisions for your academic and professional future.
                    </p>
                </span>
            </div>


            <div className='content4'>
            <div className="icon3"><img src={icon3} alt="icon3" /></div>  
            <span>
                    <b>Community Building</b>
                    <p>EduPath fosters a supportive community where students can collaborate, share ideas and learn together. Peer-to-peer interaction
                        and group study sessions help to keep you motivated and on track.
                    </p>
                </span>
            </div>
        </div>
    </div>

  </div>
);

export default Features;