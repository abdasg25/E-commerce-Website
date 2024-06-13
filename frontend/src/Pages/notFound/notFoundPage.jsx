import React from "react";
import Header from "../../Components/topHeader/Header";
import NavBar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";
import Notfound from "../../Components/NotFound/notfound";
const NotFoundPage = () =>
    {
        return (
            <>
            <Header />
            <NavBar />
            <Notfound />
            <Footer />
            </>
        )
    }
export default NotFoundPage;