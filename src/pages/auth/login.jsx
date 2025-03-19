import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import logo from "@/assets/logo.png";
import loginPic from "@/assets/login.png";
import { loginUser } from "../../api/authApi";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Login successful!");
      reset();
      navigate("/dashboard");
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Login failed. Check credentials.";
      toast.error(errorMessage);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="relative flex flex-col lg:flex-row bg-gray-50 md:h-screen">
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
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div>
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
                className="w-full text-sm px-4 bg-white border border-gray-100 shadow-sm py-5 rounded-md pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <Icon
                  icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                  className="text-xl"
                />
              </button>
              <p className="text-red-500 text-xs mt-1">
                {errors.password?.message}
              </p>
            </div>

            <div className="flex justify-between text-sm mt-7">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-500 border-gray-100 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-red-500 hover:text-blue-500"
              >
                Recover password
              </Link>
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="block cursor-pointer mt-6 border border-gray-300 rounded-md py-3 text-center w-full 
              hover:bg-blue-500 hover:text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="flex items-center gap-3 text-sm mt-6">
            <span>Do not have an account?</span>
            <Link to="/signup" className="text-blue-500">
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
