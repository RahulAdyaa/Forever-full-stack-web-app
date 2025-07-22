import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-9 md:w-2/4  text-gray-600">
          <p>
            At Forever, we are driven by a passion for innovation and a bold
            vision: to transform the way people shop online. What started as a
            simple idea — making online shopping effortless and enjoyable — has
            grown into a dynamic platform where customers can explore, discover,
            and shop a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since day one, we have been committed to bringing you a curated
            selection of top-quality products that fit every lifestyle and
            taste. Whether you're into fashion and beauty or on the hunt for the
            latest in electronics and home essentials — our collection is
            thoughtfully sourced from trusted brands to ensure you get only the
            best.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Forever, our mission is simple yet powerful: To redefine the
            online shopping experience by making it more accessible, inspiring,
            and customer-focused. We aim to connect people with products they
            love — across fashion, beauty, electronics, and everyday essentials
            — through a seamless and personalized shopping journey. We are
            committed to quality, trust, and innovation, ensuring every item we
            offer is curated with care and sourced from reliable brands.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'WHY CHOOSE'} text2={'US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
