import contactImage from "@/assets/contact.png";
import callIcon from "@/assets/telephone.png";
import mailIcon from "@/assets/mail.png";

const Contact = () => (
  <div id="contact" className="flex flex-col lg:flex-row items-center px-4 lg:px-20 mt-20">
    <div className="lg:w-6/12">
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue100 via-green100 to-green100 bg-clip-text text-transparent">
        CONTACT US
      </h3>
      <p className="text-2xl lg:w-6/12 mt-3">
        Have any questions? Don’t hesitate to reach out.
      </p>
      <div className="flex gap-3 items-center mt-10">
        <img src={callIcon} alt="phone" className="h-6 w-6" />
        <div>
          <p>Phone</p>
          <p className="text-gray300">+234 (123) 456-7890</p>
        </div>
      </div>
      <div className="flex gap-3 items-center mt-6">
        <img src={mailIcon} alt="mail" className="h-6 w-6" />
        <div>
          <p>Email</p>
          <p className="text-gray300">sandbox@email.com</p>
        </div>
      </div>
    </div>
    <div className="lg:w-6/12 mt-10 lg:mt-0">
      <img src={contactImage} alt="Contact" className="md:h-96 lg:w-auto" />
    </div>
  </div>
);

export default Contact;