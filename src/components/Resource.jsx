import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";



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

const violetIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const yellowIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapHandler = ({ selectedResource }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedResource) {
      const { lat, lng } = selectedResource;
      map.flyTo([lat, lng], 15);
    }
  }, [selectedResource, map]);

  return null;
};

const Resource = () => {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [resourceQuery, setResourceQuery] = useState("");

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/rupeshsaha/resource-center/main/resourceCenters.json"
        );
        const data = await response.json();
        if (response.ok) {
          setResources(data);
        } else {
          alert("Failed to load resources");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while getting resources.");
      }
    };
    fetchResources();
  }, []);

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Resource Center
          </h2>
          <p className="text-xl text-neutral-600">
            Find and connect with resources in your area
          </p>
        </div>

        <div className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={resourceQuery}
                onChange={(e) => setResourceQuery(e.target.value)}
                id="resource-search"
                placeholder="Search for resources (e.g., 'food banks', 'medical camps', 'schools')"
                className="w-full px-6 py-4 text-lg border-2 border-neutral-200 rounded-full focus:outline-none focus:border-blue-500 shadow-sm"
              />

            </div>

            <div className="flex gap-4 justify-center mt-4 flex-wrap">
              <button
                onClick={() => setSelectedCategory("")}
                className={`resource-filter-btn px-4 py-2 rounded-full border border-neutral-200 
                ${
                  selectedCategory === "" ? "border-blue-500 text-blue-500" : ""
                } hover:border-blue-500 hover:text-blue-500 transition-all duration-300`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory("Education")}
                className={`resource-filter-btn px-4 py-2 rounded-full border border-neutral-200 
                ${
                  selectedCategory === "Education"
                    ? "border-blue-500 text-blue-500"
                    : ""
                } hover:border-blue-500 hover:text-blue-500 transition-all duration-300`}
              >
                Education
              </button>
              <button
                onClick={() => setSelectedCategory("HealthCare")}
                className={`resource-filter-btn px-4 py-2 rounded-full border border-neutral-200 
                ${
                  selectedCategory === "HealthCare"
                    ? "border-blue-500 text-blue-500"
                    : ""
                } hover:border-blue-500 hover:text-blue-500 transition-all duration-300`}
              >
                HealthCare
              </button>
              <button
                onClick={() => setSelectedCategory("Food")}
                className={`resource-filter-btn px-4 py-2 rounded-full border border-neutral-200 
                ${
                  selectedCategory === "Food"
                    ? "border-blue-500 text-blue-500"
                    : ""
                } hover:border-blue-500 hover:text-blue-500 transition-all duration-300`}
              >
                Food Banks
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-neutral-50 p-6 rounded-lg h-[400px]">
            <h3 className="text-xl font-semibold mb-4">Available Resources</h3>
            <div id="resources-list" className="h-[320px] overflow-y-auto">
              {resources
                ?.filter(
                  (resource) =>
                    resource.name
                      ?.toLowerCase()
                      .includes(resourceQuery.toLowerCase()) &&
                    resource.category
                      ?.toLowerCase()
                      .includes(selectedCategory.toLowerCase())
                )
                .map((resource) => (
                  <div
                    key={resource?.id}
                    onClick={() => setSelectedResource(resource)}
                    className="mb-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    >
                    <Link to={`/resource-details?id=${resource.id}`}><h4 className="font-semibold text-blue-400">{resource?.name}</h4></Link>
                    <p className="text-neutral-600">{resource?.address}</p>
                    <div className="flex gap-2 mt-2">
                      <span
                      onClick={(e)=>{setSelectedCategory(e.target.innerText)}}
                        className={`text-sm ${
                          resource.category === "Education"
                            ? "bg-violet-100 text-violet-800"
                            : resource.category === "HealthCare"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-700"
                        } px-2 py-1 rounded`}
                      >
                        {resource?.category}
                      </span>
                      {resource?.isActive && (
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                          Active
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg h-[400px]">
            <h3 className="text-xl font-semibold mb-4">Resource Map</h3>
            <MapContainer
              center={[0, 0]}
              zoom={1}
              className="w-full h-[320px] rounded-lg !sticky"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <MapHandler selectedResource={selectedResource} />
              {resources?.filter(
                  (resource) =>
                    resource.name
                      ?.toLowerCase()
                      .includes(resourceQuery.toLowerCase()) &&
                    resource.category
                      ?.toLowerCase()
                      .includes(selectedCategory.toLowerCase())
                ).map((resource) => (
                <Marker
                  key={resource.id}
                  position={[resource?.lat, resource?.lng]}
                  icon={
                    resource.category === "Education"
                      ? violetIcon
                      : resource.category === "HealthCare"
                      ? redIcon
                      : yellowIcon
                  }
                >
                  <Popup><Link to={`/resource-details?id=${resource.id}`}>{resource.name}</Link></Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resource;
