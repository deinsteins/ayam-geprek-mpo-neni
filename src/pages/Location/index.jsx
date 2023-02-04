import { Wrapper } from "@googlemaps/react-wrapper";
import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Location = () => {
    return (
        <div className="App">
            <NavBar />
                <Wrapper>
                    <div className="flex flex-col p-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63454.380370119085!2d106.72109849468008!3d-6.277037999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698de17126cadf%3A0x4daedea1971231e3!2sNasi%20Uduk%20Mpo%20Neni!5e0!3m2!1sid!2sid!4v1673535767720!5m2!1sid!2sid" width="100%" height="450" style={{display: "flex", margin: "auto"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <h1 className="text-4xl mt-4 text-[#B21600] font-bold">AYAM GEPREK MPO NENI</h1>
                        <div className="flex flex-col font-bold">
                            <span>Jl. Dalang 1 No.19</span>
                            <span>Kelurahan Pengasinan</span>
                            <span>Kecamatan Rawa Lumbu</span>
                            <span>Kota Bekasi</span>
                            <span>17115</span>
                        </div>
                    </div>
                </Wrapper>
            <Footer />
       </div>
    )
}

export default Location;