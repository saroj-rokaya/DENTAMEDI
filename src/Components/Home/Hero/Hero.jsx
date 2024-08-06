import React, { useEffect } from "react";
import image from "../../../assets/Hero/herobg.jpeg";
import line from "../../../assets/Hero/line.png";
import location from "../../../assets/Hero/location.png";
import plane from "../../../assets/Hero/plane.png";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(()=>{

  })
  return (
    <>
      <section
        className=" bg-cover h-[90vh] bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className=" mx-auto container-size py-32 lg:flex h-full lg:items-center ">
          
          <div data-aos="fade-down" className="max-w-xl absolute z-1 left-[10%] text-center ltr:sm:text-left rtl:sm:text-left">
            <h1 className=" font-semibold text-white text-7xl">
              Dental Tourism
            </h1>

            <p className="mt-4 max-w-lg text-xl text-white">
              Tation lorem spusm sit dollar amet suis lorem
            </p>

            <div className="mt-8 flex justify-center items-center gap-4 text-center">
              <button className="btn-dark-blue mt-10 md:mt-0">
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
