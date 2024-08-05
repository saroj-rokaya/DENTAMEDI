import React from "react";

const BeforeFooterCard = ({ image, heading }) => {
  return (
    <>
      <div className=" w-[300px] md:w-[30%] sm:h-[60vh] flexCenter flex-col gap-2 rounded-lg p-5 ">
        <img src={image} alt="image" className="mx-auto" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-semibold  text-blue-30-0 text-center ">
            {heading}
          </h5>
          <p className="mb-3 text-xl text-blue-30-0 text-center">
            Sed risus pretium quam vulputate dignissim suspendisse volutpat.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeFooterCard;
