import React, { useEffect, useState } from "react";
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
import axios from "axios"

const Signin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);


    useEffect(() => {
        const sendRequest = async () => {
            try {
                const res = await axios.post(`http://localhost:5000/api/v1/user/signin`, {
                    email: formData.email,
                    password: formData.password
                });
                if (res.data.success) {
                    toast.success("Signin successful!");
                    localStorage.setItem('token', `${res.data.token}`);
                    navigate('/')
                }
            } catch (e) {
                console.log(e);
                setIsSubmitting(false);
                if (axios.isAxiosError(e)) {
                    toast.error(e.response.data.message);
                    return;
                }
                toast.error("An error occurred while signing in");
            }

        }

        if (isSubmitting) {
            sendRequest();
        }
    }, [isSubmitting, navigate, formData])

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
        setIsSubmitting(true);
    };

    return (
        <div className="min-h-screen grid-cols-1 grid bg-gray-100 dark:bg-gray-900">

            <div className="absolute top-5 right-10"><DarkModeToggle /></div>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 text-center">Sign In</h2>
                    <h3 className="text-md font-light text-gray-500 dark:text-gray-50 mb-6 text-center">Welcome Back!</h3>
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
        </div>
    );
};

export default Signin;