import React from "react";
import Header from "../../../Components/topHeader/Header";
import NavBar from "../../../Components/NavBar/navBar";
import Footer from "../../../Components/Footer/Footer";
import UploadProduct from "../../../Components/UploadProduct/uploadProduct";

const UploadProductPage = () => {
    return (
        <>
        <Header />
        <NavBar />  
        <UploadProduct/>
        <Footer/>
        </>
    )
}
export default UploadProductPage