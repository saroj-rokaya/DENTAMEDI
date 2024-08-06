import React from "react";
import visitImg from "../../../assets/visitImg.jpg";
import Form from "./Form.jsx";

const Visit = () => {
  return (
    <>
      <section className="relative lg:h-[95vh] flex-col lg:flex  flex-wrap justify-center items-center text-blue-30-0 ">
        <div className="w-full px-4 py-2 bg-[#e3f2e7] min-h-[95vh] sm:px-6 lg:w-1/2 lg:px-8">
          <div className="w-full mx-auto py-4 sm:text-start">
            <h1 className="text-[57px] font-semibold ">Book Your Visit</h1>
            <p className=" text-[20px] text-blue-30-0">
              In ornare quam viverra orci sagittis
            </p>
          </div>
          <Form />
        </div>

        <img
          src={visitImg}
          alt="img"
          className=" w-full h-full lg:h-[100%] object-cover lg:w-[50%] "
        />
        {/* </div> */}
      </section>
    </>
  );
};

export default Visit;
