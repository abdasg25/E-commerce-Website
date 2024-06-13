import React from "react";
import Product from "../ProductCard/productCard";


const products = [
	{
		id:1,
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_1.png",
		name: "Baby Truck",
		rating: 4.5,
		price: 676,
		isNew: true,
	},
	{	
		id:9,
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_2.png",
		name: "Rocket",
		rating: 3.5,
		price: 349,
		isNew: false,
	},
	{
		id:2,
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
		name: "Toy Car",
		rating: 4,
		price: 199,
		isNew: false,
	},
	{
		id:3,
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_4.png",
		name: "Superhero Action Figure",
		rating: 4.2,
		price: 499,
		isNew: true,
	},
	{
		id:4,
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_5.png",
		name: "Building Blocks",
		rating: 4.8,
		price: 149,
		isNew: false,
	},
	{
		id:5,
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_6.png",
		name: "Plush Bear",
		rating: 4.6,
		price: 249,
		isNew: false,
	},
	{
		id:6,
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_7.png",
		name: "Dollhouse",
		rating: 4.4,
		price: 899,
		isNew: true,
	},
	{
		id:7,
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_8.png",
		name: "Remote Control Helicopter",
		rating: 4.1,
		price: 599,
		isNew: false,
	},
	{
		id:8,
		image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
		name: "Art Set",
		rating: 4.7,
		price: 349,
		isNew: false,
	},
];
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
					Wishlist
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