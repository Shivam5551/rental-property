import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShowPasswordButton } from "../components/ShowPasswordButton";
import { FormLabel } from "../components/FormLabel";
import { WarnHeadingComponent } from "../components/WarnHeadingComponent";
import { SubmitButton } from "../components/SubmitButton";
import { GoogleButton } from "../components/GoogleButton";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { DarkModeToggle } from "../components/DarkModeToggle";

const Signup = () => {
    const [formData, setFormData] = useState({
        email: "",
        fullname: "",
        phoneno: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isBackendCall , setIsBackendCall] = useState(false);

    const navigate = useNavigate();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    useEffect(()=> {
        const backendCall = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/v1/user/signup', 
                    formData
                )
                const token = response.data.token;
                if(token) {
                    toast.success("Signup successful!");
                    localStorage.setItem('token', token);
                    navigate('/');
                }
            } catch (error) {
                if(axios.isAxiosError(error)) {
                    toast.error(error.response.data.message);
                }
                else {
                    toast.error("An error occurred while signing up");
                }
            }
        }
        if(isBackendCall) {
            setIsBackendCall(false);
            backendCall();
        }
    }, [isBackendCall, formData, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validatePassword = (password) => {
        return /[A-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, fullname, password, confirmPassword, phoneno } = formData;

        if (!email || !fullname || !password || !confirmPassword || !phoneno) {
            toast.error("All fields are required!");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (!validatePassword(password)) {
            toast.error("Password must contain at least one uppercase letter and one special character!");
            return;
        }

        setIsBackendCall(true);
        
        
    };

    return (
        <div className="min-h-screen grid-cols-1 md:grid-cols-2 grid bg-gray-100 dark:bg-gray-900">
            <div className="bg-gray-300 flex-col dark:bg-gray-700 hidden md:flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1729838809728-48566c1ef0e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="App" className="object-cover rounded-full h-[50%] w-[50%]" />
                <h1 className="dark:text-white px-10 py-2 text-4xl font-bold">
                    Begin Your Journey with Us!
                </h1>
            </div>
            <div className="absolute top-4 right-4">
                <DarkModeToggle />
            </div>

            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Create an Account</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <FormLabel htmlFor="email" type="email" label="Email" name="email" value={formData.email} onChange={handleChange} required />
                        <FormLabel htmlFor="fullname" type="text" label="Full Name" name="fullname" value={formData.fullname} onChange={handleChange} required />
                        <FormLabel htmlFor="phoneno" type="text" label="Phone Number" name="phoneno" value={formData.phoneno} onChange={handleChange} required />
                        
                        <div className="relative">
                            <FormLabel htmlFor="password" label="Password" type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required />
                            <ShowPasswordButton password={showPassword} toggleVisibility={togglePasswordVisibility} />
                        </div>
                        <div className="relative">
                            <FormLabel htmlFor="confirmPassword" label="Confirm Password" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            <ShowPasswordButton password={showConfirmPassword} toggleVisibility={toggleConfirmPasswordVisibility} />
                        </div>
                        <SubmitButton text="Sign Up" onClick={handleSubmit} />
                        <div className="flex justify-between dark:text-white items-center">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                I agree to the Terms and Conditions
                            </label>
                        </div>
                    </form>
                    <GoogleButton title={"Sign up"} />
                    <div className="flex items-center justify-between mt-4">
                        <hr className="w-full border-gray-300" />
                        <span className="mx-2 text-gray-500">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <WarnHeadingComponent para={" Already have an account? "} href={"/signin"} title={"Log in"} />
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Signup;
