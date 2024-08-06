import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ComboBox from "./ComboBox.jsx";

const Form = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <form className="grid grid-cols-2 gap-4 col-span-full lg:col-span-3">
        <div className="col-span-full sm:col-span-1 lg:col-span-2 xl:col-span-1 text-[17px]">
          <input
            type="text"
            placeholder="Name*"
            className="w-full px-4 py-3 rounded-md placeholder-blue-30-0"
          />
        </div>
        <div className="col-span-full sm:col-span-1 lg:col-span-2 xl:col-span-1">
          <input
            type="tel"
            placeholder="Phone*"
            className="w-full px-4 py-3 rounded-md text-[17px] placeholder-blue-30-0"
          />
        </div>
        <div className="col-span-full sm:col-span-1 lg:col-span-2 xl:col-span-1">
          <ComboBox heading="Select your dentist*" />
        </div>
        <div className="col-span-full sm:col-span-1 lg:col-span-2 xl:col-span-1">
          <ComboBox heading="Types of services*" />
        </div>
        <div className="col-span-full sm:col-span-1 lg:col-span-2 xl:col-span-1">
          <ComboBox heading="Select time*" />
        </div>
        <div className="col-span-full sm:col-span-1 lg:col-span-2 xl:col-span-1 text-[17px]">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/mm/dd"
            minDate={new Date()}
            filterDate={(date) => date.getDay() != 6 && date.getDay() != 0}
            placeholderText="yyyy/mm/dd*"
            className="w-full px-4 py-3 rounded-md text-[17px]"
          />
        </div>

        <button className="btn-dark-blue mt-10 md:mt-0">BOOK NOW</button>
      </form>
    </>
  );
};

export default Form;
