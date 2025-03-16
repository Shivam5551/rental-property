import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShowPasswordButton } from "../components/ShowPasswordButton";
import { FormLabel } from "../components/FormLabel";
import { WarnHeadingComponent } from "../components/WarnHeadingComponent";
import { SubmitButton } from "../components/SubmitButton";
import { GoogleButton } from "../components/GoogleButton";
import { useNavigate } from "react-router-dom";
import FrontImage from "../assets/homepage.jpg";
import { DarkModeToggle } from "../components/DarkModeToggle";

const Signin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email || !password) {
            toast.error("All fields are required!");
            return;
        }

        toast.success("Signin successful!");
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
        navigate('/')
    };

    return (
        <div className="min-h-screen grid-cols-1 md:grid-cols-2 grid bg-gray-100 dark:bg-gray-900">
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Sign In</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <FormLabel htmlFor="email" type="email" label="Email" name="email" value={formData.email} onChange={handleChange} required />
                        <div className="relative">
                            <FormLabel htmlFor="password" label="Password" type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required />
                            <ShowPasswordButton password={showPassword} toggleVisibility={togglePasswordVisibility} />
                        </div>
                        <SubmitButton text="Sign In" onClick={handleSubmit} />
                        <div className="flex justify-between items-center">
                            <label className="flex dark:text-white items-center">
                                <input type="checkbox" className="mr-2" />
                                Remember Me
                            </label>
                            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                        </div>
                    </form>
                    <GoogleButton title="Sign In" />    
                    <div className="flex items-center justify-center mt-4">
                        <hr className="w-full border-gray-300" />
                        <span className="mx-2 text-gray-500">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <WarnHeadingComponent para={" Don't have an account? "} href={"/signup"} title={"Sign up"} />
                    <ToastContainer />
                </div>
            </div>
            <div className="bg-gray-300 flex-col dark:bg-gray-700 hidden md:flex items-center justify-center">
                <img src={FrontImage} alt="App" className="object-cover h-[50%] w-[50%] rounded-full" />
                <h1 className=" text-black dark:text-white text-3xl px-10 pt-2 font-bold">
                    Welcome Back – Continue Your Journey with Us!
                </h1>
                <div className="absolute top-4 right-4">
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Signin;