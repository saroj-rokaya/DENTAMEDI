import React, { useState } from "react";
import womanImage from "../../../assets/whatyouget/lady.png";
import toothbrush from "../../../assets/whatyouget/toothbrush.png";
import { FaCheck } from "react-icons/fa6";
import AOS from 'aos'
import 'aos/dist/aos.css'

const WhatYouGet = () => {
    useState(()=>{
        AOS.init({disable: "mobiles", duration: 2000});
    },[])
  return (
    <>
      <section className="lg:flexBetween fex-col container-size">
        <div  className=" lg:gap-0 gap-10 flexCenter flex-col md:flex-row lg:h-screen w-full lg:w-[50%]">
          <div>
            <img src={womanImage} alt="img" className="lg:size-[80%]" data-aos="fade-down"/>
          </div>
          <div>
            <img src={toothbrush} alt="img" className="lg:size-[70%]" data-aos="fade-up" />
          </div>
        </div>
        <div className=" h-screen w-full lg:w-[50%] flex justify-center gap-3 items-start  flex-col">
          <p className="text-blue-20-0 text-lg">Travel</p>
          <h3 className="text-6xl text-blue-30-0">What You Get</h3>
          <ul className="text-2xl text-blue-30-0 space-y-5">
            <li className="flexStart gap-2">
              <FaCheck />
              Cursus molest iaculis 24/7
            </li>
            <li className="flexStart gap-2">
              <FaCheck />
              Lorem ipsum dolor sit.
            </li>
            <li className="flexStart gap-2">
              <FaCheck />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flexStart gap-2">
              <FaCheck />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flexStart gap-2">
              <FaCheck />
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
          <button className="btn-dark-blue mt-10 md:mt-0">BOOK NOW</button>
        </div>
      </section>
    </>
  );
};

export default WhatYouGet;
