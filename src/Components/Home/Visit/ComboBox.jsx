import React from "react";
import { FaAngleDown } from "react-icons/fa";

const ComboBox = ({heading}) => {
  return (
    <>
        <div class="relative">
          <select class="block appearance-none w-full py-4 px-4 pr-8 rounded-lg shadow leading-tight ">
            <option>{heading}</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaAngleDown />
          </div>
        </div>
    </>
  );
};

export default ComboBox;
