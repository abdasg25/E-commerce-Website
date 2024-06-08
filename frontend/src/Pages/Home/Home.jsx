import React from 'react';
import './Home.css';
import Header from '../../Components/topHeader/Header';
import NavBar from '../../Components/NavBar/navBar';
import Sidebar from '../../Components/SideBar.jsx/SideBar';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import FlashSales from '../../Components/FlashSales/FlashSales';
import Footer from '../../Components/Footer/Footer';
const Home = () => {
    return (
        <>
            <Header />
            <NavBar />
            <div className="sidebarCarousel">
                <Sidebar />
                <ImageCarousel />
            </div>
            
                <FlashSales />
            <Footer />
        </>
    );
}
export default Home;