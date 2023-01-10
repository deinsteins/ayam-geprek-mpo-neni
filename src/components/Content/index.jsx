import React from "react";
import Card from "../Card";
import Wrapper from "../Wrapper";

const Content = () => {
    return (
      <Wrapper>
        <div className="flex flex-col mx-auto">
          <h1 className="text-3xl text-[#B21600] font-bold mx-auto">YANG MENARIK PADA HARI INI</h1>
          <div className="flex justify-center">
            <Card image="/images/Promo1.png" />
            <Card image="/images/Promo2.png" />
            <Card image="/images/Promo3.png" />
          </div>
          </div>
      </Wrapper>
    )
}

export default Content;