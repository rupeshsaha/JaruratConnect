import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'
import { Link } from 'react-router-dom';

const redIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ResourceDetails = () => {
    const [resource, setResource] = useState([])

    useEffect(() => {
        const fetchResources = async () => {
          try {
            const response = await fetch(
              "https://raw.githubusercontent.com/rupeshsaha/resource-center/main/resourceCenters.json"
            );
            const data = await response.json();
            if (response.ok) {
              const params = new URLSearchParams(window.location.search);
              const id = params.get('id'); 
              const resourceById = data.find(resource => resource.id === parseInt(id)); 
              
              if (resourceById) {
                setResource(resourceById); 
                console.log(resourceById);
              } else {
                alert("Resource not found");
              }
            } else {
              alert("Failed to load resources");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while getting resources.");
          }
        };

        window.scrollTo(0,0)
        fetchResources();
      }, []);  
  return (
    <div className="w-full min-h-screen mx-auto bg-gradient-to-r from-blue-50 to-indigo-100 shadow-lg rounded-lg p-6 sm:px-8 py-20 flex flex-col justify-between">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {resource?.name}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
       {resource?.description}
      </p>

      {/* Location & Category */}
      <div className="flex justify-between text-gray-600 text-sm mb-6">
        <div className='text-lg'>
          <strong className="text-gray-800 text-xl">Location:</strong> {resource?.address}
        </div>
        <div className='text-lg'>
          <strong className="text-gray-800 text-xl">Category:</strong> {resource?.category}
        </div>
      </div>
      {resource && resource.lat && resource.lng && (
  <MapContainer
    center={[resource.lat, resource.lng]}
    zoom={14}
    className="w-full h-[320px] rounded-lg !sticky"
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
    <Marker position={[resource.lat, resource.lng]} icon={redIcon} >
      <Popup>{resource?.name}</Popup>
    </Marker>
  </MapContainer>
)}

               

      {/* Contact Details */}
      <div className=" bg-neutral-50 bg-opacity-35  p-6 rounded-lg hover:shadow-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h3>
        <ul className="space-y-2">
          <li className="text-gray-600"><strong>Email:</strong> {resource?.contact?.email}</li>
          <li className="text-gray-600"><strong>Phone:</strong> {resource?.contact?.phone}</li>
          <li className="text-gray-600"><strong>Website:</strong> <a target='_blank' href={`https://${resource?.contact?.website}`}className="text-blue-600 hover:text-blue-800">{resource?.contact?.website}</a></li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around">
        <Link to="/volunteer">
        <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white sm:py-3 sm:px-10 px-8 py-3 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-700 transition duration-300 sm:text-lg ">
          Get Involved
        </button>
        </Link>
        <Link to="/donate">
        <button className="bg-blue-500 hover:bg-blue-700 text-white sm:py-3 sm:px-10 px-8 py-3 rounded-lg shadow-lg  transition duration-300 sm:text-lg ">
          Donate
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ResourceDetails;
