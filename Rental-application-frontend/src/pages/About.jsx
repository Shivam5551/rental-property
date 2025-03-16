import { Appbar } from "../components/Appbar";
import FAQSection from "../components/FaqSection";
import { Footer } from "../components/Footer";

export const About = () => {
    return (
        <div className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col">
            <Appbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-cover bg-center h-72 flex items-center justify-center text-white" style={{ backgroundImage: "url('https://via.placeholder.com/1500x500')" }}>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">About Us</h2>
                        <p className="text-lg">Discover the best rental properties with trust and convenience.</p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="container mx-auto py-16 px-6">
                    <h3 className="text-3xl font-bold text-center mb-10">Unlock Unmatched Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-gray-300 dark:bg-gray-700 rounded-full text-2xl">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 bg-gray-200 dark:bg-gray-900 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                            Our platform provides a seamless and secure rental experience with verified listings, easy transactions, and 24/7 support.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                                    <div className="text-3xl mb-4">{feature.icon}</div>
                                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blockchain-Powered Transactions Section */}
                <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
                    <div className="max-w-5xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-6">Blockchain-Powered Transactions</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                            Experience unparalleled security and transparency with blockchain-based property rentals. Our platform utilizes smart contracts for secure agreements and decentralized storage for property details.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {blockchainFeatures.map((feature, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                                    <div className="text-3xl mb-4">{feature.icon}</div>
                                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <FAQSection/>
            <Footer/>
        </div>
    );
};

const benefits = [
    { title: "Wide Property Selection", description: "Browse through a vast collection of rental properties, from apartments to villas, tailored to your needs.", icon: "🏡" },
    { title: "Seamless Booking Process", description: "Easily book your rental property with a user-friendly interface and instant confirmations.", icon: "📅" },
    { title: "Verified Listings", description: "All properties are verified to ensure a safe and trustworthy renting experience.", icon: "✅" },
    { title: "Affordable Pricing", description: "Find the best rental deals that match your budget without compromising on quality.", icon: "💰" },
    { title: "24/7 Customer Support", description: "Get assistance anytime with our dedicated support team ready to help you.", icon: "🛎️" },
    { title: "Secure Transactions", description: "Make payments confidently with our secure and reliable payment system.", icon: "🔒" }
];

const blockchainFeatures = [
    { title: "Smart Contracts", description: "Automated rental agreements with blockchain-powered smart contracts.", icon: "📜" },
    { title: "Decentralized Storage", description: "Property details are securely stored on the blockchain, ensuring transparency.", icon: "🔗" },
    { title: "Fraud Prevention", description: "Blockchain ensures authenticity, reducing fraud and enhancing trust.", icon: "🛡️" }
];


const features = [
    { title: "Trusted by Thousands", description: "Over 10,000 happy tenants have found their homes with us.", icon: "🌟" },
    { title: "User-Friendly Platform", description: "Easily navigate and find the best rental options with our intuitive platform.", icon: "🖥️" },
    { title: "Flexible Payment Plans", description: "Choose from multiple payment options and flexible rental agreements.", icon: "💳" }
];