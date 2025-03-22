import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logo from "@/assets/logo.png";
import SignupPic from "@/assets/signup.png";
import { signupUser } from "../../api/authApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const signupSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      console.log("Signup Successful:", data);
      localStorage.setItem("authToken", data.token);
      toast.success("Signup successful!");
      reset();
      setTimeout(() => navigate("/dashboard"), 2000);
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Signup failed. Try again.";
      toast.error(errorMessage);
    },
  });

  const onSubmit = (data) => {
    const { confirmPassword, ...userData } = data; 
    mutation.mutate(userData);  
  };
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 h-screen">
      <section
        className="lg:w-5/12 hidden lg:flex relative bg-cover bg-center"
        style={{ backgroundImage: `url(${SignupPic})` }}
      >
        <div className="absolute top-16 left-3 rounded-md w-[70%] bg-[#505256]/95 font-light text-white p-7">
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
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="First Name"
                  className="w-full text-sm px-4 bg-white border border-gray-100 shadow-sm py-5 rounded-md"
                />
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName?.message}
                </p>
              </div>
              <div>
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Last Name"
                  className="w-full text-sm px-4 bg-white border border-gray-100 shadow-sm py-5 rounded-md"
                />
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full text-sm px-4 bg-white border border-gray-100 shadow-sm py-5 rounded-md"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.email?.message}
              </p>
            </div>

            <div className="mt-4 relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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
              <p className="text-red-500 text-xs mt-1">
                {errors.password?.message}
              </p>
            </div>

            <div className="mt-4 relative">
              <input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
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
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword?.message}
              </p>
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="block cursor-pointer mt-6 border border-gray-300 rounded-md py-3 text-center w-full 
    hover:bg-blue-500 hover:text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? "Submitting..." : "Sign Up"}
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
