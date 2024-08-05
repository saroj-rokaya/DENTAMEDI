import React from "react";
import DatePicker from "./DatePicker.jsx";

const Form = () => {
  return (
    <>
      <form className="grid grid-cols-2 gap-4 col-span-full lg:col-span-3">
        <div className="col-span-full sm:col-span-1 lg:col-span-2 xl:col-span-1 text-[17px]">
          <input
            type="text"
            placeholder="Name*"
            className="w-full px-4 py-3 rounded-md"
          />
        </div>
        <div className="col-span-full sm:col-span-1 lg:col-span-2 xl:col-span-1">
          <input
            type="tel"
            placeholder="Phone*"
            className="w-full px-4 py-3 rounded-md text-[17px]"
          />
        </div>
        <DatePicker/>
        <button className="btn-dark-blue mt-10 md:mt-0">BOOK NOW</button>
      </form>
    </>
  );
};

export default Form;
