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
                        <iframe 
                            src="https://bit.ly/3wVr49v" 
                            width="100%" 
                            height="450" 
                            style={{display: "flex", margin: "auto"}} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
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