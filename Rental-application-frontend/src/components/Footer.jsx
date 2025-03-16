import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Footer = ()=> {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-xl font-bold">Rental Properties</h4>
                        <p className="text-sm">© {new Date().getFullYear()} Rental Properties. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">Home</a>
                        <a href="#" className="hover:text-white">About</a>
                        <a href="#" className="hover:text-white">Contact</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-xs">Follow us on social media</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:text-white"><FaFacebook/></a>
                        <a href="#" className="hover:text-white"><FaInstagram/></a>
                        <a href="#" className="hover:text-white"><FaLinkedinIn/></a>
                        <a href="#" className="hover:text-white"><FaYoutube/></a>
                    </div>
                </div>
            </footer>
    )
}