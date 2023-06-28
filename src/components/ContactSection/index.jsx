import React from "react";
import { isMobile } from "react-device-detect";
import Card from "../Card";
import Wrapper from "../Wrapper";
import {IoLogoWhatsapp} from 'react-icons/io'

const ContactSection = () => {
  return (
    <Wrapper Background={ isMobile ? null :"/images/bg-contact.png"}>
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl text-[#cdb4b1] font-bold text-center">Menerima Pesanan</h1>
          <div className="flex gap-2">
          {isMobile? <IoLogoWhatsapp className="text-green-500 w-9 h-9" /> : null}
          <h1 className="text-3xl md:text-5xl text-black font-bold">
            <a href="http://wa.me/6281998638828">0819-9863-8828</a>
          </h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactSection;
