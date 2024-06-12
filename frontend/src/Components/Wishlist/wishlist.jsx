import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const products = [
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_1.png",
		name: "Baby Truck",
		rating: 4.5,
		price: 676,
		isNew: true,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_2.png",
		name: "Rocket",
		rating: 3.5,
		price: 349,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
		name: "Toy Car",
		rating: 4,
		price: 199,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_4.png",
		name: "Superhero Action Figure",
		rating: 4.2,
		price: 499,
		isNew: true,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_5.png",
		name: "Building Blocks",
		rating: 4.8,
		price: 149,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_6.png",
		name: "Plush Bear",
		rating: 4.6,
		price: 249,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_7.png",
		name: "Dollhouse",
		rating: 4.4,
		price: 899,
		isNew: true,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_8.png",
		name: "Remote Control Helicopter",
		rating: 4.1,
		price: 599,
		isNew: false,
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
		name: "Art Set",
		rating: 4.7,
		price: 349,
		isNew: false,
	},
];

const Product = ({ product }) => {
	return (
		<div className="col-span-12 md:col-span-6 lg:col-span-4">
			<div className="bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-xl p-4 pb-0">
				<div className="bg-gray-100 dark:bg-slate-700 rounded flex justify-center items-center min-h-[265px] relative p-12 w-full">
					{product.isNew && (
						<h6 className="bg-cyan-400 text-white absolute top-4 left-0 rounded-r-md px-6 py-2 mb-0 font-medium">
							New
						</h6>
					)}
					<div className="absolute top-2.5 right-2.5 w-10 h-10 bg-white dark:bg-slate-800 rounded-full text-base flex justify-center items-center cursor-pointer">
						<FontAwesomeIcon icon={faHeart} />
					</div>
					<img src={product.image} alt="" className="max-w-full h-auto" />
					<button className="absolute bottom-4 right-0 rounded-l-md bg-blue-600 text-white hover:bg-opacity-90 font-bold py-2 px-6">
						Add to cart
					</button>
				</div>
				<div className="py-6 px-1">
					<div className="flex justify-between items-center">
						<div>
							<a href="#!">
								<h6 className="hover:text-blue-600 text-[17px] font-medium mb-1">
									{product.name}
								</h6>
							</a>
							<span className="text-sm text-yellow-500">
								{Array.from(
									{ length: Math.floor(product.rating) },
									(_, index) => (
										<FontAwesomeIcon
											key={index}
											icon={faStar}
											className="mr-1"
										/>
									)
								)}
								{product.rating % 1 !== 0 && (
									<FontAwesomeIcon icon={faStarHalfAlt} className="mr-1" />
								)}
							</span>
						</div>
						<div>
							<p className="text-3xl font-bold">${product.price}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		isNew: PropTypes.bool.isRequired,
	}).isRequired,
};

const wishlist = () => {
	return (
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			{/* shapes */}
			<div className="absolute top-0 right-0">
				<img
					src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_shape2.png"
					alt=""
				/>
			</div>
			<div className="absolute top-1/2 left-0">
				<img
					src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_shape1.png"
					alt=""
				/>
			</div>

			<div className="container relative px-4 mx-auto">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
					Popular Products
				</h2>
				<div className="grid grid-cols-12 gap-6 mt-12">
					{products.map((product, index) => (
						<Product key={index} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default wishlist;