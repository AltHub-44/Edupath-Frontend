import { useState } from "react";
import logo from "@/assets/logo.png";
import loginPic from "@/assets/login.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="relative flex flex-col lg:flex-row bg-gray50 md:h-screen">
      <Link
        to="/"
        className="absolute hover:text-blue100 top-10 left-5 flex items-center space-x-2"
      >
        <Icon icon="mdi:arrow-left" className="text-xl" />
        <span>Home</span>
      </Link>
      <div className="lg:w-6/12 h-screen flex flex-col justify-center items-center">
        <div className="w-10/12 lg:w-9/12">
          <div className="flex flex-col items-center">
            <img src={logo} alt="logo" className="h-24 w-auto" />
            <p className="-mt-6">Login into your account</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-20">
            <div>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                className="w-full text-sm px-4 bg-white border border-gray100 shadow-sm shadow-gray100 py-5 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mt-8 relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full text-sm px-4 bg-white border border-gray100 shadow-sm shadow-gray100 py-5 rounded-md pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <Icon
                  icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                  className="text-xl"
                />
              </button>
            </div>

            {/* Remember Me & Recover Password */}
            <div className="flex justify-between text-sm mt-7">
              <label
                htmlFor="remember"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-500 border-gray100 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-red50 hover:text-blue100"
              >
                Recover password
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="block cursor-pointer hover:bg-blue100 hover:text-white mt-10 border border-gray300 rounded-md py-2 text-center w-full"
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-3 text-sm mt-6">
            <span>Do not have an account?</span>
            <Link to="/signup" className="text-blue100">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-6/12 hidden lg:flex">
        <img src={loginPic} alt="login" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Login;
