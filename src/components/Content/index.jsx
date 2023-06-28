import React from "react";
import Card from "../Card";
import Wrapper from "../Wrapper";

const Content = () => {
  return (
    <Wrapper>
      <div className="flex flex-col mx-auto gap-4 md:gap-4">
        <h1 className="text-2xl md:text-4xl text-[#B21600] font-bold mx-auto text-center">YANG MENARIK PADA HARI INI</h1>
        <div className="flex flex-wrap justify-center gap-8 md:gap-8">
          <Card image="/images/Promo1.png" />
          <Card image="/images/Promo2.png" />
          <Card image="/images/Promo3.png" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Content;
