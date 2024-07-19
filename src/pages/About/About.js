import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-8">
          <span className="text-primeColor font-semibold text-lg">Recofill</span>{" "}
          is a student-led initiative from the Technical University of Munich. We are passionate about building solutions that reduce packaging waste and promote a healthier planet. Our mission is to deliver fresh, local food to your doorstep while eliminating the environmental impact of traditional packaging.
        </h1>
        <div className="max-w-[600px] text-base text-lightText mb-8">
          <h2 className="text-primeColor font-semibold text-lg italic">Zero-Waste Delivery</h2>
          <p className="mb-4">We deliver all our products in reusable glass jars, completely eliminating packaging waste. Enjoy your favorite foods knowing you’re making a positive impact on the environment.</p>

          <h2 className="text-primeColor font-semibold text-lg italic">Local and Fresh</h2>
          <p className="mb-4">Our foods are sourced from local farms and warehouses, guaranteeing that you get the best quality produce and snacks while supporting your local community.</p>

          <h2 className="text-primeColor font-semibold text-lg italic">24/7 Vending Machines</h2>
          <p>For ultimate convenience, our vending machines are available around the clock in specific neighborhoods, offering a wide variety of pantry foods in eco-friendly packaging.</p>
        </div>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
