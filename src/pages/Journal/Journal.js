import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the coordinates for the vending machines
const vendingMachineLocations = [
  { lat: 48.2656027, lng: 11.6684166 },
  { lat: 48.1487646, lng: 11.4157411 }
];

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    setPrevLocation(location.state ? location.state.data : "");
  }, [location]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Vending Machines" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-5">
          Our 24/7 vending machines are marked with red icons. Hover over them to see available pantry products and more!
          If a vending machine is out of stock, please request a refill by sending us a contact form.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
      <div className="h-[800px]">
        <MapContainer center={[48.2656027, 11.6684166]} zoom={10} className="h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {vendingMachineLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}
              icon={L.icon({
                iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
                iconSize: [38, 38]
              })}
            >
              <Popup>
                <div>
                  <h3>Vending Machine {index + 1}</h3>
                  <p>Available Pantries:</p>
                  <ul>
                    <li>Pasta</li>
                    <li>Coffee Beans</li>
                    <li>Rice</li>
                    <li>Sugar</li>
                    <li>Salt</li>
                  </ul>
                </div>
              </Popup>
            </Marker>
          ))}
          {userLocation && (
            <Marker 
              position={[userLocation.lat, userLocation.lng]} 
              icon={L.icon({
                iconUrl: 'data:image/svg+xml;base64,' + btoa(`
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="10" fill="#00eaff" stroke="white" stroke-width="2" />
                  </svg>
                `),
                iconSize: [30, 30],
                iconAnchor: [15, 30],
                popupAnchor: [0, -30]
              })}
            >
              <Popup>Your Location</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Journal;
