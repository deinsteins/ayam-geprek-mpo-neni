import React from "react";
import Card from "../Card";
import Wrapper from "../Wrapper";

const ContactSection = () => {
    return (
      <Wrapper Background="/images/bg-contact.png">
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-[#B21600] font-bold text-center">Menerima Pesanan</h1>
            <h1 className="text-5xl text-black font-bold"><a href="http://wa.me/6281998638828">0819-9863-8828</a></h1>
          </div>
        </div>
      </Wrapper>
    )
}

export default ContactSection;