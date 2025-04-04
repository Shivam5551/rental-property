import React, { useState } from "react";
import { PropertyCard } from "../components/PropertyCard";
import { Appbar } from "../components/Appbar";
import { Footer } from "../components/Footer";
import { FaMinusCircle, FaPlusCircle, FaSearch } from "react-icons/fa";
export const Properties = () => {
    const [location, setLocation] = useState("");
    const [activeFilters, setActiveFilters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [properties, setProperties] = useState([]);

    React.useEffect(() => {
        setProperties(property);
    }, []);
    
    const handleFilterChange = (filterName, value) => {
        // Implement filter logic here
        console.log(`Filter changed: ${filterName} = ${value}`);
    };

    const handleSearch = () => {
        // Implement search logic here
        console.log("Search clicked");
    };

    const removeFilter = (filter) => {
        setActiveFilters(activeFilters.filter((f) => f !== filter));
    };

    const togglePetFriendly = () => {
        if (activeFilters.includes("Pet Friendly")) {
            removeFilter("Pet Friendly");
        } else {
            setActiveFilters([...activeFilters, "Pet Friendly"]);
        }
    };
    return (
      <div>
      <Appbar />
      {/* Property Search */}
      <div className="bg-white dark:bg-black mt-18">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Browse Properties</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Find your next home with complete transparency on maintenance and rental history</p>
          
          {/* Search and Filters */}
          <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-700">
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-auto flex-grow">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Search Location</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch />
                  </div>
                  <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    className="focus:ring-primary focus:border-primary block w-full pl-10 pr-12 py-2 sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                    pSorlaceholder="City, neighborhood, or ZIP"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="w-full md:w-auto md:flex-1">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price Range</label>
                <select 
                  id="price" 
                  name="price" 
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "") {
                      handleFilterChange("minPrice", undefined);
                      handleFilterChange("maxPrice", undefined);
                    } else {
                      const [min, max] = value.split("-").map(v => parseInt(v));
                      handleFilterChange("minPrice", min);
                      handleFilterChange("maxPrice", max || null);
                    }
                  }}
                >
                  <option value="">Any Price</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-1500">$1,000 - $1,500</option>
                  <option value="1500-2000">$1,500 - $2,000</option>
                  <option value="2000-2500">$2,000 - $2,500</option>
                  <option value="2500-3000">$2,500 - $3,000</option>
                  <option value="3000-">$3,000+</option>
                </select>
              </div>
              
              <div className="w-full md:w-auto md:flex-1">
                <label htmlFor="beds" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bedrooms</label>
                <select 
                  id="beds" 
                  name="beds" 
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  onChange={(e) => handleFilterChange("beds", e.target.value ? parseInt(e.target.value) : undefined)}
                >
                  <option value="">Any</option>
                  <option value="1">1+ Bed</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                </select>
              </div>
              
              <div className="w-full md:w-auto md:flex-1">
                <label htmlFor="baths" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bathrooms</label>
                <select 
                  id="baths" 
                  name="baths" 
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  onChange={(e) => handleFilterChange("baths", e.target.value ? parseFloat(e.target.value) : undefined)}
                >
                  <option value="">Any</option>
                  <option value="1">1+ Bath</option>
                  <option value="2">2+ Baths</option>
                  <option value="3">3+ Baths</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="w-full md:w-auto flex-1">
                <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Property Type</label>
                <select 
                  id="property-type" 
                  name="property-type" 
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  onChange={(e) => handleFilterChange("propertyType", e.target.value || undefined)}
                >
                  <option value="">Any Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
              
              <div className="w-full md:w-auto flex-1">
                <label htmlFor="maintenance" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Maintenance History</label>
                <select 
                  id="maintenance" 
                  name="maintenance" 
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  onChange={(e) => handleFilterChange("maintenanceYears", e.target.value ? parseInt(e.target.value) : undefined)}
                >
                  <option value="">Any</option>
                  <option value="1">1+ Year History</option>
                  <option value="3">3+ Years History</option>
                  <option value="5">5+ Years History</option>
                </select>
              </div>
              
              <div className="w-full md:w-auto flex-1">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tenant Rating</label>
                <select 
                  id="rating" 
                  name="rating" 
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  onChange={(e) => handleFilterChange("rating", e.target.value ? parseFloat(e.target.value) : undefined)}
                >
                  <option value="">Any Rating</option>
                  <option value="3">3+ Stars</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                </select>
              </div>
              
              <div className="w-full md:w-auto md:flex-none md:self-end">
                <button 
                  type="button" 
                  className="w-full mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary bg-indigo-500 hover:bg-blue-700 focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-blue-600 dark:hover:bg-blue-800"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {activeFilters.map(filter => (
                <span key={filter} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  <button 
                    type="button" 
                    className="flex-shrink-0 h-5 w-full rounded-full inline-flex items-center justify-center text-blue-600 focus:outline dark:text-blue-300 "
                    onClick={() => removeFilter(filter)}
                  >
                   <FaMinusCircle className="mr-2"/> {filter} 
                  </button>
                </span>
              ))}
              
              {!activeFilters.includes("Pet Friendly") && (
                <button 
                  onClick={togglePetFriendly}
                  className="inline-flex items-center px-3 py-0.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  <FaPlusCircle className="mr-2"/> Pet Friendly
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    
      {/* Property Results */}
      <div className="bg-gray-50 dark:bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                {isLoading 
                  ? "Loading properties..." 
                  : error 
                  ? "Error loading properties" 
                  : `${properties?.length || 0} properties found`}
              </h2>
            </div>
            <div className="flex items-center">
              <span className=" w-full text-lg mr-2 text-gray-700 dark:text-gray-300">Sort by:</span>
              <select className="block w-fit pr-10 pl-2 py-2 text-base border-gray-300 focus:outline focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rated</option>
                <option>Most Viewed</option>
              </select>
            </div>
          </div>
    
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties && properties.length > 0 ? (
              properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500 dark:text-gray-400">
                No properties found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}


const property = [
    {
      title: "Coastal Retreat",
      address: "123 Ocean Drive, Miami, FL",
      price: 2400,
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      beds: 3,
      baths: 2,
      sqft: 1500,
      propertyType: "house",
      maintenanceYears: 5,
      rating: 4.8,
      verified: true,
      petFriendly: true
    },
    {
      title: "Downtown Loft",
      address: "456 Urban St, Chicago, IL",
      price: 1850,
      imageUrl: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      beds: 2,
      baths: 2,
      sqft: 1200,
      propertyType: "apartment",
      maintenanceYears: 3,
      rating: 4.5,
      verified: true,
      petFriendly: false
    },
    {
      title: "Suburban Charm",
      address: "789 Maple Ave, Austin, TX",
      price: 2100,
      imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      beds: 4,
      baths: 2.5,
      sqft: 2000,
      propertyType: "house",
      maintenanceYears: 7,
      rating: 4.9,
      verified: true,
      petFriendly: true
    },
    {
      title: "Urban Oasis",
      address: "123 Main St, San Francisco, CA",
      price: 1750,
      imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      beds: 2,
      baths: 2,
      sqft: 1100,
      propertyType: "apartment",
      maintenanceYears: 4,
      rating: 4.7,
      verified: true,
      petFriendly: false
    },
    {
      title: "Riverside Townhouse",
      address: "456 River Rd, Portland, OR",
      price: 2200,
      imageUrl: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      propertyType: "townhouse",
      maintenanceYears: 6,
      rating: 4.8,
      verified: true,
      petFriendly: true
    },
    {
      title: "Contemporary Villa",
      address: "789 Hillside Dr, Los Angeles, CA",
      price: 3500,
      imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      beds: 4,
      baths: 3,
      sqft: 2400,
      propertyType: "house",
      maintenanceYears: 8,
      rating: 4.9,
      verified: true,
      petFriendly: true
    }
  ];