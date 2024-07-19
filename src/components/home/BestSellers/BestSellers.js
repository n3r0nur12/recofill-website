import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  strawberries,
  blueberries,
  coffeebeans,
  pasta,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={strawberries}
          productName="Strawberries"
          price="6.00"
          color="Mixed"
          badge={false}
          des="500 gr Strawaberries (Qualitat aus Deutschland) with Sustainable Glass Jars."
        />
        <Product
          _id="1012"
          img={blueberries}
          productName="Blueberries"
          price="7.00"
          color="Mixed"
          badge={false}
          des="500 gr Blueberries (Qualitat aus Deutschland) with Sustainable Glass Jars."
        />
        <Product
          _id="1013"
          img={coffeebeans}
          productName="Coffee Beans"
          price="11.00"
          color="Mixed"
          badge={false}
          des="500 gr Coffee Beans totally natural (Qualitat aus Deutschland) with Sustainable Glass Jars."
        />
        <Product
          _id="1014"
          img={pasta}
          productName="Pasta"
          price="4.00"
          color="Mixed"
          badge={false}
          des="500 gr Pasta with Sustainable Glass Jars."
        />
      </div>
    </div>
  );
};

export default BestSellers;
