import tweetIcon from "@/assets/tweet.png";
import facebookIcon from "@/assets/facebook.png";
import webIcon from "@/assets/web.png";
import instaIcon from "@/assets/insta.png";
import youtubeIcon from "@/assets/youtube.png";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const Footer = () => {
  const { scrollToSection } = useMenu();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-0 bg-blue100 text-white justify-between p-10 mt-20">
      <section className="" id="contact">
        <h2 className="font-semibold text-lg md:text-md">Edupath</h2>
        <div className="mt-1 mb-3 md:my-3 text-gray100 text-sm">
          <p>© 2024 Edupath</p>
          <p>All rights reserved</p>
        </div>
        <div className="flex gap-3">
          <img src={tweetIcon} alt="tweeter" className="w-5 h-5" />
          <img src={facebookIcon} alt="facebook" className="w-5 h-5" />
          <img src={webIcon} alt="web" className="w-5 h-5" />
          <img src={instaIcon} alt="instagram" className="w-5 h-5" />
          <img src={youtubeIcon} alt="youtube" className="w-5 h-5" />
        </div>
      </section>

      <div className="">
        <h2 className="font-semibold text-lg md:text-md">Get in touch</h2>
        <p className="text-gray100 mt-1 md:mt-3 lg:w-8/12 text-sm">
          123 Freedom way Unity District Lagos Nigeria
        </p>

        <p className="mt-5">info@email.com</p>
        <p className="text-gray100 text-sm">00(123)4567890</p>
      </div>

      <div className="">
        <h2 className="font-semibold text-lg md:text-md">Learn more</h2>
        <ul className="space-y-2 mt-1 md:mt-3 text-sm">
          <li>
            <Link href="/" onClick={() => scrollToSection('about')} className="text-gray100 hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => scrollToSection('why')} className="text-gray100 hover:text-white">
              Why Us
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-gray100 hover:text-white">
              Terms of Use
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-gray100 hover:text-white">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <div className="">
        <h2 className="font-semibold text-lg md:text-md">Our Newsletter</h2>
        <p className="text-sm mt-3">
          Subscribe to our newsletter to get news update sent to you immediately
        </p>
        <form className="subscribe border rounded-md mt-1 md:mt-3 overflow-hidden">
          <input
            type="email"
            className="w-9/12 py-1 px-3 text-sm border-none outline-none"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="bg-white text-black w-3/12 py-1 hover:bg-blue200 hover:text-white"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
