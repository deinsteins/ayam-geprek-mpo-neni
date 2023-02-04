import React from "react";
import Wrapper from "../../../components/Wrapper";
import CardImage from "../CardImage";

const AddOnSection = () => {
    return (
      <Wrapper>
        <div className="flex flex-col mx-auto">
          <div className="flex gap-12">
            <h1 className="text-4xl text-[#B21600] font-bold my-auto">TAMBAHAN</h1>
            <div className="flex gap-4">
              <CardImage image="images/sambal.png" price="3K" />
              <CardImage image="images/nasi.png" price="3K" />
              <CardImage image="images/saos_keju.png" price="4K" />
              <CardImage image="images/saos_sambal.png" price="4K" />
              <CardImage image="images/telur_dadar.png" price="5K" />
            </div>
          </div>
        </div>
      </Wrapper>
    )
}

export default AddOnSection;