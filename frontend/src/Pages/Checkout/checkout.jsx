import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlus,
	faFileInvoiceDollar,
	faChevronDown,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import Header from "../../Components/topHeader/Header";
import NavBar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";

const coupons = [
	{
		value: "Store Coupons",
	},
	{
		value: "BusinessName Coupon",
	},
];

const orders = [
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio8.jpg",
		title:
			"Chair Living Room Chairs For Bedroom Dining Desk Chairs Kitchen Bathroom Silla стулья для кухни 가구 Dinning Chair Chaise",
		color: "black",
		country: "China",
		bdPrice: "6,638.89",
		usPrice: "44.07",
		shipper: "BrandName Premium Shipping Estimated",
		shippingTime: "50-53",
		subTotal: "6,638.89",
		shipping: "0.00",
		total: "6,638.89",
	},
	{
		seller: "NIDIN Factory Online Store",
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio2.jpg",
		title:
			"Lks01 Men'S Suits Casual Collar Blazers Youthful Handsome Trend Slim Fit Printed Blazers Plus Size Men'S Jackets",
		color: "black",
		country: "China",
		bdPrice: "2132.43",
		usPrice: "44.07",
		shipper: "BrandName Premium Shipping Estimated",
		shippingTime: "50-53",
		subTotal: "2132.43",
		shipping: "0.00",
		total: "2132.43",
	},
];

const TopBar = () => {
	return (
		<>
			<div className="flex flex-col sm:flex-row sm:gap-6">
				{/* shipping info  */}
				<div className="w-full sm:w-1/2 bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 mb-4">
					<h6 className="font-bold mb-4">Shipping Information</h6>

					<div className="flex flex-col gap-4 justify-between">
						<div>
							<p className="text-sm font-bold">
								<b>Santush Deb Nath, +880 1742031080</b> <br />
								<span className="font-normal opacity-75">
									Iron Man Fitness Club, Zindabazar, Sylhet
								</span>
								<br />
								<span className="font-normal opacity-75">
									Sylhet, Sylhet Sadar, Bangladesh, 3100
								</span>
							</p>
						</div>

						<div className="font-medium opacity-100 text-blue-600 text-sm">
							<a href="#!" className="inline-block mb-1 hover:underline">
								<FontAwesomeIcon icon={faPlus} className="mr-1" />
								Add New Address
							</a>
							<br />
							<a href="#!" className="hover:underline">
								Select Other Addresses
							</a>
						</div>
					</div>
				</div>

				{/* payment method  */}
				<div className="w-full sm:w-1/2 bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 mb-4">
					<h6 className="font-bold mb-4">Payment Methods</h6>
					<div className="flex flex-col sm:flex-row gap-4 justify-between">
						<p className="text-sm">
							<FontAwesomeIcon icon={faCcMastercard} className="mr-3" />
							<span>544407******0943</span>
						</p>
						<div className="sm:text-end text-sm">
							<a
								href="#!"
								className="text-blue-600 hover:underline font-medium"
							>
								Change
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 mb-4">
				<h6 className="font-bold">Order Review</h6>
			</div>
		</>
	);
};

const CouponItem = ({ coupon }) => (
	<div className="flex justify-between items-center mb-2">
		<span>
			<FontAwesomeIcon
				icon={faFileInvoiceDollar}
				className="mr-2 text-blue-600"
			/>
			{coupon.value}
		</span>
		<span>
			<a href="#!" className="text-blue-600 hover:underline font-medium">
				View <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
			</a>
		</span>
	</div>
);

CouponItem.propTypes = {
	coupon: PropTypes.object.isRequired,
};

const PromoCode = () => (
	<div className="mt-3">
		<p className="text-sm mb-1">Promo Code</p>
		<div className="flex h-10">
			<input
				type="text"
				className="bg-blue-100 dark:bg-slate-700 border-none focus:outline-none h-full flex-grow rounded-md p-3 mr-2"
				placeholder="Recipient's username"
			/>
			<button
				className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 px-4 py-2 leading-none h-full rounded-md"
				type="button"
			>
				Apply
			</button>
		</div>
	</div>
);
const SideBar = () => {
	return (
		<div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6">
			<h6 className="text-2xl font-bold mb-6">Order Summary</h6>

			{coupons.map((coupon, i) => (
				<CouponItem coupon={coupon} key={i} />
			))}

			<PromoCode />

			<hr className="dark:border-slate-700 my-6" />
			<div className="flex justify-between items-center">
				<span className="font-bold">Total</span>
				<span className="text-2xl font-bold">US $1231.00</span>
			</div>
			<p className="text-sm text-end opacity-50">Approximately BDT 94,856.76</p>

			<button className="bg-blue-600 text-white hover:bg-opacity-90 w-full rounded-md py-3 px-4 mt-6">
				Place Order
			</button>
		</div>
	);
};

const Quantity = () => {
	return (
		<div className="flex items-center">
			<button
				className="w-8 h-8 bg-slate-200 dark:bg-slate-600 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 flex justify-center items-center rounded-full font-bold"
				type="button"
			>
				-
			</button>
			<input
				type="number"
				className="bg-transparent text-center pl-3 font-bold w-12"
				placeholder=""
				value="2"
			/>
			<button
				className="w-8 h-8 bg-slate-200 dark:bg-slate-600 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 flex justify-center items-center rounded-full font-bold"
				type="button"
			>
				+
			</button>
		</div>
	);
};

const OrderItem = ({ item }) => {
	return (
		<div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 my-4">
			<p className="text-sm">Seller: {item.seller}</p>
			<hr className="dark:border-slate-700 my-4" />
			<div className="flex flex-col sm:flex-row">
				<div className="flex-grow w-48 sm:mr-4 mx-auto">
					<a href="#!">
						<img src={item.img} alt="" className="w-full h-auto rounded" />
					</a>
				</div>
				<div>
					<div className="flex flex-col md:flex-row justify-between gap-6">
						<div className="flex-grow w-full md:w-auto">
							<div className="hover:text-blue-600 hover:underline mb-1">
								<a href="#!">{item.title}</a>
							</div>
							<p className="text-sm mb-2">
								<span className="mr-3">
									<b>Color</b>: {item.color}
								</span>
								<span>
									<b>Ships From</b>: {item.country}
								</span>
							</p>
							<div>
								<a
									href="#!"
									className="text-blue-600 hover:underline font-medium text-sm inline-block mb-1"
								>
									<FontAwesomeIcon
										icon={faPlus}
										className="fas fa-plus mr-1 text-xl"
									/>{" "}
									Leave message
								</a>
							</div>
						</div>
						<div className="w-full md:w-1/2 text-center">
							<div className="mb-2">
								<span className="text-[17px] font-bold mr-2">
									BDT {item.bdPrice}
								</span>
							</div>
						</div>
						<div className="w-full md:w-auto">
							<Quantity />
							<button className="px-5 py-2 mt-4 rounded text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-700 inline-flex justify-center items-center">
								<FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
								Remove
							</button>
						</div>
					</div>
				</div>
			</div>
			<hr className="dark:border-slate-700 my-4" />
			<div className="flex justify-end">
				<div className="w-[300px]">
					<div className="text-sm opacity-50 flex justify-between items-center mb-1">
						<span>Subtotal</span>
						<span>BDT {item.subTotal}</span>
					</div>
					<div className="text-sm flex justify-between items-center mb-1">
						<span className="opacity-75">
							<FontAwesomeIcon
								icon={faFileInvoiceDollar}
								className="mr-2 text-blue-600"
							/>
							Store Coupons
						</span>
						<span>
							<a href="#!" className="text-blue-600 hover:underline">
								View <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
							</a>
						</span>
					</div>
					<div className="text-sm flex justify-between items-center opacity-50 mb-1">
						<span>Shipping</span>
						<span>BDT 0.00</span>
					</div>
					<div className="text-sm font-bold flex justify-between items-center">
						<span>Total</span>
						<span>BDT {item.total}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

OrderItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Epcheckout3 = () => {
	return (
        <>
        <Header />
        <NavBar />
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row gap-6 justify-center">
					<div className="w-full lg:w-2/3">
						<TopBar />
						{orders.map((item, i) => (
							<OrderItem item={item} key={i} />
						))}
					</div>
					<div className="w-full lg:w-1/3">
						<SideBar />
					</div>
				</div>
			</div>
		</section>
        <Footer />
        </>
	);
};
export default Epcheckout3;