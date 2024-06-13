import React,{ useState,Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaStar } from "react-icons/fa";
import { faHeart, faShareAlt,faStar } from "@fortawesome/free-solid-svg-icons";    
const product = 
{
	_id:5,
	title: "ID 05",
	previews: [
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2.png",
			thumbUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-1.png",
		},
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
			thumbUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
		},
		{
			previewUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
			thumbUrl:
				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
		},
	],
	rating: 5.0,
	rateCount: 1256,
	price: 27351,
};
// {
// 	id:9,
// 	title: "ID 09",
// 	previews: [
// 		{
// 			previewUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2.png",
// 			thumbUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-1.png",
// 		},
// 		{
// 			previewUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
// 			thumbUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
// 		},
// 		{
// 			previewUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
// 			thumbUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
// 		},
// 	],
// 	rating: 5.0,
// 	rateCount: 1256,
// 	price: 27351,
// 	colorVariants: [
// 		{ bgcolor: "bg-yellow-500", value: "Multi" },
// 		{ bgcolor: "bg-blue-500", value: "Blue" },
// 		{ bgcolor: "bg-red-400", value: "Pink" },
// 		{ bgcolor: "bg-black", value: "Black" },
// 		{ bgcolor: "bg-red-600", value: "Red" },
// 	],
// 	sizeVariants: [
// 		{ label: "XXS", value: "SSX", title: "Extra extra small" },
// 		{ label: "XS", value: "XS", title: "Extra small" },
// 		{ label: "S", value: "S", title: "Small" },
// 		{ label: "M", value: "M", title: "Medium" },
// 		{ label: "L", value: "L", title: "Large" },
// 		{ label: "XL", value: "XL", title: "Extra large" },
// 		{ label: "XXL", value: "XXL", title: "Extra extra large" },
// 		{
// 			label: "XXXL",
// 			value: "XXXL",
// 			title: "Extra extra extra large",
// 			disabled: true,
// 		},
// 	],
// },
// {
// 	id:6,
// 	title: "ID 06",
// 	previews: [
// 		{
// 			previewUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2.png",
// 			thumbUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-1.png",
// 		},
// 		{
// 			previewUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
// 			thumbUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
// 		},
// 		{
// 			previewUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
// 			thumbUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
// 		},
// 	],
// 	rating: 5.0,
// 	rateCount: 1256,
// 	price: 27351,
// 	colorVariants: [
// 		{ bgcolor: "bg-yellow-500", value: "Multi" },
// 		{ bgcolor: "bg-blue-500", value: "Blue" },
// 		{ bgcolor: "bg-red-400", value: "Pink" },
// 		{ bgcolor: "bg-black", value: "Black" },
// 		{ bgcolor: "bg-red-600", value: "Red" },
// 	],
// 	sizeVariants: [
// 		{ label: "XXS", value: "SSX", title: "Extra extra small" },
// 		{ label: "XS", value: "XS", title: "Extra small" },
// 		{ label: "S", value: "S", title: "Small" },
// 		{ label: "M", value: "M", title: "Medium" },
// 		{ label: "L", value: "L", title: "Large" },
// 		{ label: "XL", value: "XL", title: "Extra large" },
// 		{ label: "XXL", value: "XXL", title: "Extra extra large" },
// 		{
// 			label: "XXXL",
// 			value: "XXXL",
// 			title: "Extra extra extra large",
// 			disabled: true,
// 		},
// 	],
// },
// {
// 	id:8,
// 	title: "ID 08",
// 	previews: [
// 		{
// 			previewUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2.png",
// 			thumbUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-1.png",
// 		},
// 		{
// 			previewUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
// 			thumbUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
// 		},
// 		{
// 			previewUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
// 			thumbUrl:
// 				"https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
// 		},
// 	],
// 	rating: 5.0,
// 	rateCount: 1256,
// 	price: 27351,
// 	colorVariants: [
// 		{ bgcolor: "bg-yellow-500", value: "Multi" },
// 		{ bgcolor: "bg-blue-500", value: "Blue" },
// 		{ bgcolor: "bg-red-400", value: "Pink" },
// 		{ bgcolor: "bg-black", value: "Black" },
// 		{ bgcolor: "bg-red-600", value: "Red" },
// 	],
// 	sizeVariants: [
// 		{ label: "XXS", value: "SSX", title: "Extra extra small" },
// 		{ label: "XS", value: "XS", title: "Extra small" },
// 		{ label: "S", value: "S", title: "Small" },
// 		{ label: "M", value: "M", title: "Medium" },
// 		{ label: "L", value: "L", title: "Large" },
// 		{ label: "XL", value: "XL", title: "Extra large" },
// 		{ label: "XXL", value: "XXL", title: "Extra extra large" },
// 		{
// 			label: "XXXL",
// 			value: "XXXL",
// 			title: "Extra extra extra large",
// 			disabled: true,
// 		},
// 	],
// },
// ];
const ProductPreviews = ({ previews }) => {
	const [index, setIndex] = useState(0);

	return (
		<div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-4 sm:p-6 lg:p-12 lg:mr-6">
			<div className="text-center mb-4 md:p-6">
				<img
					src={previews[index].previewUrl}
					alt=""
					className="max-w-full h-auto w-full"
				/>
			</div>

			<ul className="flex gap-3">
				{previews.map((preview, i) => (
					<li
						className="w-24 h-24 flex justify-center items-center p-2 rounded-md border border-gray-200 dark:border-slate-700 cursor-pointer"
						key={i}
						onClick={() => setIndex(i)}
					>
						<img src={preview.thumbUrl} alt="" className="max-w-full h-auto" />
					</li>
				))}
			</ul>
		</div>
	);
};

ProductPreviews.propTypes = {
	previews: PropTypes.array.isRequired,
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
				className="w-2/3 pl-2 text-center border border-black dark:border-white bg-transparent focus:outline-none rounded-lg overflow-hidden font-bold text-lg"
				type="number"
				placeholder=""
				value={value}
				onChange={(e) => qtyControl(e.target.value)}
			/>
			<div className="w-1/3 rounded-lg overflow-hidden flex flex-col border border-black dark:border-white bg-transparent p-0">
				<button
					className="text-blue-600 hover:bg-blue-600 hover:text-white h-1/2 font-bold leading-none text-lg"
					type="button"
					onClick={() => qtyControl(parseInt(value) - 1)}
				>
					-
				</button>
				<button
					className="text-blue-600 hover:bg-blue-600 hover:text-white h-1/2 font-bold leading-none text-lg"
					type="button"
					onClick={() => qtyControl(parseInt(value) + 1)}
				>
					+
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

const Epoverview4 = () => {
	const [formData, setFormData] = useState({
		color: "Multi",
		size: "XL",
		qty: 1,
	});

	const setField = (e) => {
		const { name, value, type, checked } = e.target;

		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	return (
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row gap-6">
					<div className="w-full lg:w-1/2">
						<ProductPreviews previews={product.previews} />
					</div>
					<div className="w-full lg:w-1/2">
						<div className="mb-6 lg:mb-12">
							<h1 className="text-2xl leading-none md:text-4xl font-medium mb-4">
								{product.title}
							</h1>
							<p className="opacity-70 mb-6">
								<span>4.0</span>{" "}
								<FontAwesomeIcon
									icon={faStar}
									className="mx-2 text-yellow-500"
								/>
								<a href="#!" className="text-blue-600 font-medium ml-1">
									8 Reviews
								</a>{" "}
								<span className="ml-2">104 Order</span>
							</p>
							<p className="opacity-70 lg:mr-56 xl:mr-80 my-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								nec consequat lorem. Maecenas elementum at diam consequat
								bibendum.
							</p>
							<h3 className="text-2xl text-blue-600 font-medium">
								Rs. {product.price}
							</h3>
						</div>

						<form action="#!">
							<div className="mb-6">
								<h5 className="font-medium mb-2">QTY</h5>
								<QtyField onChange={setField} name="qty" value={formData.qty} />
							</div>

							<div className="flex flex-col gap-3 w-full my-7">
								<div className="flex items-center gap-4 w-full max-w-lg">
									<button className="bg-blue-600 border border-blue-600 text-white text-sm rounded uppercase hover:bg-opacity-90 px-10 py-2.5 h-10 md:px-12 w-1/2">
										Buy Now
									</button>
									<button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm rounded uppercase px-6 py-2.5 h-10 md:px-12 w-1/2">
										Add To Cart
									</button>
								</div>
								<div className="flex items-center gap-4 w-full">
									<button className="hover:bg-blue-600 rounded hover:bg-opacity-10 text-blue-600 px-3 py-2">
										<FontAwesomeIcon icon={faHeart} /> Add to wishlist
									</button>
									<button className="hover:bg-blue-600 rounded hover:bg-opacity-10 text-blue-600 px-3 py-2">
										<FontAwesomeIcon icon={faShareAlt} className="mr-1" /> share
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>

	);
};

export default Epoverview4;