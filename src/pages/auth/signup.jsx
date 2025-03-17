import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "@/assets/logo.png";
import SignupPic from "@/assets/signup.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 h-screen">
      <section
        className="lg:w-5/12 hidden lg:flex relative bg-cover bg-center"
        style={{ backgroundImage: `url(${SignupPic})` }}
      >
        <div className="absolute top-16 left-3  rounded-md w-[70%] bg-[#505256]/95 font-light text-white p-7">
          <h1 className="bg-blue200 inline-block px-3 py-1 text-xl rounded-md">
            School, But Make It Lit 📚✨
          </h1>
          <p className="text-lg mt-4">
            Connect with mentors to guide your career and university journey.
            Unlock your potential today! 🌟
          </p>
        </div>
      </section>
      <section className="relative lg:w-7/12 h-screen flex flex-col justify-center items-center">
        <Link
          to="/"
          className="absolute hover:text-blue100 top-10 left-5 flex items-center space-x-2"
        >
          <Icon icon="mdi:arrow-left" className="text-xl" />
          <span>Home</span>
        </Link>
        <div className="w-11/12 md:w-9/12 lg:w-9/12">
          <div className="flex flex-col items-center">
            <img src={logo} alt="logo" className="h-24 w-auto" />
            <p className="-mt-6">Create your account</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full text-sm px-4 bg-white border border-gray-100 shadow-sm py-5 rounded-md"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full text-sm px-4 bg-white border border-gray-100 shadow-sm py-5 rounded-md"
              />
            </div>
            <div className="mt-4">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full text-sm px-4 bg-white border border-gray-100 shadow-sm py-5 rounded-md"
              />
            </div>
            <div className="mt-4 relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full text-sm px-4 bg-white border border-gray-100 shadow-sm py-5 rounded-md pr-10"
              />
              <span
                className="absolute right-4 top-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon
                  className="text-gray200"
                  icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                  width={20}
                />
              </span>
            </div>
            <div className="mt-4 relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full text-sm px-4 bg-white border border-gray-100 shadow-sm py-5 rounded-md pr-10"
              />
              <span
                className="absolute right-4 top-4 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Icon
                  className="text-gray200"
                  icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"}
                  width={20}
                />
              </span>
            </div>
            <button
              type="submit"
              className="block cursor-pointer hover:bg-blue-500 hover:text-white mt-6 border border-gray-300 rounded-md py-3 text-center w-full"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center gap-3 text-sm mt-6">
            <span>Already have an account?</span>
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
