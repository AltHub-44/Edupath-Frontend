import '../styles/faqs.css';
import faqImage from '../assets/faq.png'; 


const Faqs = () => (
  <div className="frequent">
        <div className="frequency">
            <h1>FAQs</h1>
            <p>If you do not find an aswer to your questions,
                you can send us an email.
            </p>
            <img src={faqImage} alt="faq" />
         </div>



         <div className="questions">
            <select id="faq1">
                <option value="">What is EduPath and who is it for? </option>
                <option value="career"> Its For Anyone who seeks to get career advice</option>
                <option value="profession"> Its for Everyone who desires professional advancement</option>
            </select>
            <br />

            <select id="faq2">
                <option value="">How does Edupath create personalized learning path? </option>
                <option value="comm"> Through our community collaboration</option>
                <option value="mentee"> Through our mentorship program</option>
            </select>
            <br />

            <select id="faq3">
                <option value="">Is Edupath aligned with the Nigerian curriculum? </option>
                <option value="yes"> The answer is yes.</option>
                <option value="so-cu"> Edupath is also aligned with the socio-cultural sphere.</option>
            </select>
            <br />

            <select id="faq4">
                <option value="">How can I connect with mentors on EduPath? </option>
                <option value="click"> Click the (Start your journey) Button </option>
            </select>
         </div>


  </div>
);

export default Faqs;