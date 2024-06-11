import React from "react";
import Header from "../../Components/topHeader/Header";
import Footer from "../../Components/Footer/Footer";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import NavBar from "../../Components/NavBar/navBar";
import "./checkout.css";

const Checkout = () =>
    {
        // const [open, setOpen] = useState(true);
        return (
            <>
                <Header />
                <NavBar />
                <div className="container">
                    <div className="flex justify-center">
                        <div className="checkout-container">
                            <div className="checkout-header">
                            </div>
                            <div className="checkout-content">
                                <OrderSummary />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                </>
        );
    }

    export default Checkout;