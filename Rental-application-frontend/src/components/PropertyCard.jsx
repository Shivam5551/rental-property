import { FaHistory, FaStar } from "react-icons/fa";

export const PropertyCard = ({ property }) => {
    return (
      <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
        <div className="relative">
          <img 
            className="h-48 w-full object-cover" 
            src={property.imageUrl} 
            alt={property.title} 
          />
          {property.verified && (
            <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-secondary rounded-md bg-green-500 text-xs font-bold text-white">
              Verified
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
            <p className="text-lg font-bold text-primary">${property.price}/mo</p>
          </div>
          <p className="mt-1 text-gray-600">{property.address}</p>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span className="flex items-center mr-4">
              <i className="fas fa-bed mr-1"></i> {property.beds} beds
            </span>
            <span className="flex items-center mr-4">
              <i className="fas fa-bath mr-1"></i> {property.baths} baths
            </span>
            <span className="flex items-center">
              <i className="fas fa-ruler-combined mr-1"></i> {property.sqft} sqft
            </span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
                <FaHistory className="mr-2"/>
              <span className="text-sm text-gray-600">{property.maintenanceYears} year maintenance history</span>
            </div>
            <div className="flex items-center">
                <FaStar className="text-yellow-500 mr-1"/>
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
            
          </div>
          <div className="flex items-center justify-between mt-2">
                <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                    View Details
                </button>
                <button className="ml-2 bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
                    Book Now
                </button>
            </div>
        </div>
      </div>
    );
  };


 
  
  