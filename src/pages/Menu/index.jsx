import React from "react"
import Footer from "../../components/Footer";
import ListCard from "../../components/ListCard";
import NavBar from "../../components/NavBar";
import Wrapper from "../../components/Wrapper";
import AddOnSection from "./AddOnSection";

const Menu = () => {
    return (
        <div className="App">
            <NavBar />
            <h1 className="mt-4 text-3xl text-[#B21600] font-bold text-center">MENU YANG TERSEDIA</h1>
            <div className="py-4">
                <ListCard name="AYAM CRISPY" image="images/products/Ayam_Cripsy.png" />
                <ListCard name="AYAM CRISPY" image="images/products/Ayam_Cripsy.png" />
                <ListCard name="AYAM CRISPY" image="images/products/Ayam_Cripsy.png" />
                <ListCard name="AYAM CRISPY" image="images/products/Ayam_Cripsy.png" />
            </div>
            <AddOnSection />
            <Footer />
        </div>
    )
}

export default Menu;