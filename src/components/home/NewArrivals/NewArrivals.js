import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  dates,
  dryedapricots,
  pistachios,
  corn,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={dates}
            productName="Dates"
            price="11.00"
            color="Mixed"
            badge={false}
            des="500 gr Dates from Middle East with Bio Sustainable Glass Jars"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={dryedapricots}
            productName="Dryed Apricots"
            price="17.00"
            color="Mixed"
            badge={false}
            des="500 gr Dryed Apricots (Qualitat aus Deutschland) with Bio Sustainable Glass Jars"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={pistachios}
            productName="Pistachios"
            price="27.00"
            color="Mixed"
            badge={false}
            des="500 gr Pistachios (Qualitat aus Deutschland) with Bio Sustainable Glass Jars"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={corn}
            productName="Corn"
            price="2.00"
            color="Mixed"
            badge={false}
            des="Single Piece (Qualitat aus Deutschland) with Bio Sustainable Paper Bags"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
