import { Appbar } from "../components/Appbar";
import FAQSection from "../components/FaqSection";
import { Footer } from "../components/Footer";
import { FaSearch, FaCalendarCheck, FaFileSignature } from "react-icons/fa";

const Home = () => {
    return (
        <div className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col">
            <Appbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section
                    className="bg-cover bg-center h-96 flex items-center justify-center relative"
                    style={{ backgroundImage: "url('https://via.placeholder.com/1500x500')" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="text-center z-10 text-white px-4">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Rental Property</h2>
                        <p className="text-lg md:text-xl mb-6">
                            Secure & transparent transactions powered by blockchain technology.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg">
                            Get Started
                        </button>
                    </div>
                </section>

                {/* Featured Properties */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-3xl font-bold text-center mb-8">Featured Properties</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {properties.map((property, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                                    <img className="w-full h-48 object-cover" src={property.image} alt={property.title} />
                                    <div className="p-4">
                                        <h4 className="text-xl font-semibold mb-2">{property.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">{property.details}</p>
                                        <p className="text-blue-600 font-bold">{property.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works - Blockchain Enhanced */}
                <section className="py-16 px-4 bg-gray-200 dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-3xl font-bold text-center mb-8">How It Works</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blockchain Benefits Section */}
                <section className="py-16 px-4 mx-5 md:mx-36 rounded-2xl bg-blue-600 text-white text-center">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">Why Choose Blockchain Rentals?</h3>
                        <p className="text-lg mb-6">
                            Experience <b>Secure, Fraud-free, and Fully transparent</b> rental agreements using blockchain technology.
                        </p>
                        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-200">
                            Learn More
                        </button>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h3>
                        <div className="overflow-hidden relative">
                            <div className="flex animate-scroll hover:pause-animation">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow min-w-[300px] mx-4 flex-shrink-0"
                                    >
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            "{testimonial.quote}"
                                        </p>
                                        <h4 className="font-bold text-xl">{testimonial.name}</h4>
                                        <p className="text-gray-500">{testimonial.title}</p>
                                    </div>
                                ))}
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow min-w-[300px] mx-4 flex-shrink-0"
                                    >
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            "{testimonial.quote}"
                                        </p>
                                        <h4 className="font-bold text-xl">{testimonial.name}</h4>
                                        <p className="text-gray-500">{testimonial.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <FAQSection />
            </main>

            <Footer />
        </div>
    );
};

export default Home;

// Properties Data
const properties = [
    {
        title: "Modern Apartment",
        details: "2 beds • 2 baths • 1200 sqft",
        price: "$1,200 / month",
        image: "https://via.placeholder.com/400x300",
    },
    {
        title: "Cozy House",
        details: "3 beds • 2 baths • 1500 sqft",
        price: "$1,500 / month",
        image: "https://via.placeholder.com/400x300",
    },
    {
        title: "Luxury Condo",
        details: "1 bed • 1 bath • 900 sqft",
        price: "$1,000 / month",
        image: "https://via.placeholder.com/400x300",
    },
];

// How It Works Data
const steps = [
    {
        title: "Search Properties",
        description: "Browse through blockchain-verified listings with real-time updates.",
        icon: <FaSearch size={24} />,
    },
    {
        title: "Book Securely",
        description: "Instantly reserve your home using smart contract technology.",
        icon: <FaCalendarCheck size={24} />,
    },
    {
        title: "Sign & Move In",
        description: "Digitally sign your lease and move in hassle-free.",
        icon: <FaFileSignature size={24} />,
    },
];

// Testimonials Data
const testimonials = [
    { quote: "Finding our new home was a breeze thanks to blockchain security!", name: "Arthur Morgon", title: "Verified Tenant" },
    { quote: "The process was smooth, and I loved the transparency!", name: "John Smith", title: "Happy Renter" },
    { quote: "No hidden fees or scams. Just a seamless rental experience.", name: "Sarah Johnson", title: "Satisfied User" },
    {
        quote: "I was able to find the perfect apartment in no time. The website is user-friendly and the customer service is top-notch.",
        name: "David Lee",
        title: "New Tenant",
    },
    {
        quote: "This site saved me so much time! The listings were clear, and I got the support I needed when I had questions.",
        name: "Emily White",
        title: "Happy Customer",
    },
    {
        quote: "I had been searching for weeks before I found this platform. It made finding the right rental property incredibly easy.",
        name: "Michael Brown",
        title: "Relieved Renter",
    },
    {
        quote: "I love how straightforward the process was. I found a place I adore, and the platform made it all so easy!",
        name: "Olivia Taylor",
        title: "Thrilled Tenant",
    },
];

