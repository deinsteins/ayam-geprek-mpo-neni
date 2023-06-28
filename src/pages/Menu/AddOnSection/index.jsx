import React from "react";
import Wrapper from "../../../components/Wrapper";
import CardImage from "../CardImage";

const AddOnSection = () => {
  return (
    <Wrapper>
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col sm:gap-8 sm:flex-col sm:items-center sm:justify-between">
          <h1 className="text-4xl text-[#B21600] font-bold my-auto mb-4 text-center sm:mb-0">
            TAMBAHAN
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <CardImage image="images/sambal.png" price="3K" />
            <CardImage image="images/nasi.png" price="3K" />
            <CardImage image="images/saos_keju.png" price="4K" />
            <CardImage image="images/saos_sambal.png" price="4K" />
            <CardImage image="images/telur_dadar.png" price="5K" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddOnSection;
