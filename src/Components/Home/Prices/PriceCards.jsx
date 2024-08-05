import React from "react";

const PriceCards = ({ btncolor,btn_color,colors, textColor, border_b_color, card_text_color }) => {
  return (
    <>
      <div
        className={` h-[525px] w-[333px] text-blue-30-0 p-10 flex gap-5 sm:gap-10 flex-col rounded-tr-[15vh] rounded-bl-[15vh]`}
        style={{ background: `${colors}`, color: `${card_text_color}` }}
      >
        <div>
          <h3 className="text-4xl font-semibold">Dental Implants</h3>
          <p className="text-xl">
            Ut wisi enim ad minim veniam, quis laore nostrx
          </p>
        </div>
        <div className="w-full text-2xl">
          <div
            className={`border-b  w-full py-2 flexBetween`}
            style={{ borderColor: `${border_b_color}` }}
          >
            <p style={{ color: `${textColor}` }}>Serbia</p>
            <p style={{ color: `${textColor}` }}>$350</p>
          </div>
          <div
            className={`border-b  w-full py-2 flexBetween`}
            style={{ borderColor: `${border_b_color}` }}
          >
            <p>Serbia</p>
            <p>$350</p>
          </div>
          <div
            className={`border-b  w-full py-2 flexBetween`}
            style={{ borderColor: `${border_b_color}` }}
          >
            <p>Serbia</p>
            <p>$350</p>
          </div>
          <div
            className={`border-b  w-full py-2 flexBetween`}
            style={{ borderColor: `${border_b_color}` }}
          >
            <p>Serbia</p>
            <p>$350</p>
          </div>
        </div>
        <button className="btn-dark-blue w-[100%] "
        style={{background:`${btncolor}`,color:`${btn_color}`}}
        >BOOK APPOINTMENT</button>
      </div>
    </>
  );
};

export default PriceCards;
