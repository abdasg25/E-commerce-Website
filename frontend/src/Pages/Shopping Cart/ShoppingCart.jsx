import Header from "../../Components/topHeader/Header";
import NavBar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";
import Cart from "../../Components/Cart/Cart";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
	faChevronDown,
	faChevronUp,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const productList = [
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_5.png",
		title:
			"PD-04 Carbon Fiber Insole Poron Plantar Fasciitis Arch Support Flat Feet Orthopedic Insoles Custom Orthotics",
		price: "251",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_6.png",
		title:
			"Wholesale Hexagon Pine Solid Wood Brand Women Watch Display Box Custom Logo Wooden Watch Luxury Box",
		price: "3,517",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_7.png",
		title:
			"Lks01 Men'S Suits Casual Collar Blazers Youthful Handsome Trend Slim Fit Printed Blazers Plus Size Men'S Jackets",
		price: "7,351",
		qty: 2,
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio5.jpg",
		title:
			"Factory Direct Queendom Certipur-Us Luxury Comfortable Sell Top Spring Bed 'Matress' Hotel Mattress Springs",
		price: "1,782",
		qty: 2,
	},
];

const SideBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with query
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };
	return (
		<div className="bg-blue-50 dark:bg-slate-800 rounded-xl flex flex-col gap-6 p-4 md:p-6">
			<div className="">
				<h6 className="font-medium mb-6 opacity-75">Order Summary</h6>

				<div className="flex justify-between items-center">
					<span>Sub total</span>
					<span className="font-bold">$2099</span>
				</div>
				<hr className="my-4 dark:border-slate-700" />
				<div className="flex justify-between items-center">
					<span>Shipping Fee</span>
					<span className="font-bold">$99</span>
				</div>
				<hr className="my-4 dark:border-slate-700" />
				<div className="flex justify-between items-center">
					<span>Tax</span>
					<span className="font-bold">$168</span>
				</div>
				<hr className="my-4 dark:border-slate-700" />
				<div className="flex justify-between items-center">
					<span className="fs-5 font-bold">Total</span>
					<span className="font-bold">$2238</span>
				</div>
			</div>
			<div className="">
				<button className="w-full bg-blue-600 rounded-md text-white hover:bg-opacity-90 py-2.5" onClick={() => handleNavigation('/checkout')}>  
					BUY (13)
				</button>
			</div>
		</div>
	);
};

const QtyField = ({ name, value, onChange }) => {
	const qtyControl = (qty) =>
		onChange({
			target: {
				name,
				type: "radio",
				value: qty < 1 ? 1 : qty,
			},
		});

	return (
		<div className="flex h-11 w-24 mb-4">
			<input
				type="number"
				className="w-2/3 pl-2 text-center border border-black dark:border-slate-600 bg-transparent focus:outline-none rounded-lg overflow-hidden"
				placeholder=""
				value={value}
				onChange={(e) => qtyControl(e.target.value)}
			/>
			<div className="w-1/3 border border-black dark:border-slate-600 rounded-lg overflow-hidden flex flex-col bg-transparent p-0">
				<button
					className="text-[12px] hover:bg-blue-600 hover:text-white h-1/2"
					type="button"
					onClick={() => qtyControl(parseInt(value) + 1)}
				>
					<FontAwesomeIcon icon={faChevronUp} />
				</button>
				<button
					className="text-[12px] hover:bg-blue-600 hover:text-white h-1/2"
					type="button"
					onClick={() => qtyControl(parseInt(value) - 1)}
				>
					<FontAwesomeIcon icon={faChevronDown} />
				</button>
			</div>
		</div>
	);
};

QtyField.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any,
};

const ProductItem = ({ item, index, onChange }) => {
	const { img, price, title, qty } = item;
	return (
		<div className="bg-blue-50 dark:bg-slate-800 rounded-xl flex flex-col md:flex-row items-start p-2 md:p-6 mb-4">
			<div className="w-full lg:max-w-[150px] rounded-xl mr-4 md:mr-6 mb-4 lg:mb-0">
				<a href="#!">
					<img
						src={img}
						alt={title}
						className="max-w-full h-auto rounded-xl mx-auto"
					/>
				</a>
			</div>

			<div className="flex">
				{/* product details  */}
				<div>
					<div className="text-base md:text-lg hover:text-blue-600 mb-4">
						<a href="#!">{title}</a>
					</div>
					<div>
						<QtyField
							name={`ezy__epcart3-qty-${index}`}
							value={qty}
							onChange={(e) => onChange(e, index)}
						/>

						<h3 className="text-xl font-bold text-blue-600">Rs. {price}</h3>
					</div>
				</div>
				{/* delete button */}
				<div>
					<button className="w-10 h-10 hover:bg-blue-200 dark:bg-opacity-20 inline-flex justify-center items-center rounded-full">
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

const Epcart3 = () => {
	const [products, setProducts] = useState([...productList]);

	const onChange = (e, index) => {
		const { value } = e.target;

		setProducts([
			...products.slice(0, index),
			{
				...products[index],
				qty: value,
			},
			...products.slice(index + 1),
		]);
	};

	return (
    <>
    <Header/>
    <NavBar/>
		<section className="ezy__epcart3 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row gap-6">
					{/* products */}
					<div className="w-full lg:w-2/3">
						{products.map((item, i) => (
							<ProductItem item={item} index={i} onChange={onChange} key={i} />
						))}
					</div>

					{/* sidebar */}
					<div className="w-full lg:w-1/3">
						<SideBar />
					</div>
				</div>
			</div>
		</section>
    <Footer/>
    </>
	);
};

export default Epcart3;