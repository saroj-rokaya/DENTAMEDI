import React from "react";
import PriceCards from "./PriceCards.jsx";

const Prices = () => {
  return (
    <>
      <section>
        <div className="container-size flexCenter pt-20 flex-col">
          <p className={`font-20`}>Stotamatology</p>
          <h2 className="text-6xl font-semibold text-blue-30-0">
            Comparing Prices
          </h2>
        </div>
        <div className="container-size bg-[#F1F7FC] flexCenter gap-10 pb-20 flex-wrap">
          <PriceCards
            card_text_color="#013a65"
            border_b_color="#5EB2F2"
            colors="white"
            textColor="#5EB2F2"
          />
          <PriceCards
            card_text_color="white"
            border_b_color="white"
            colors="#5EB2F2"
            btncolor="white"
            btn_color="#013a65"
          />
          <PriceCards
            card_text_color="#013a65"
            border_b_color="#5EB2F2"
            colors="white"
            textColor="#5EB2F2"
          />
        </div>
      </section>
    </>
  );
};

export default Prices;
