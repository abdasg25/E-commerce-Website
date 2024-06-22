import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ProductItem from "../ProductCard/productCard";
import SummaryApi from "../../common";
const Epgrid8 = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(`${SummaryApi.allProduct.url}`); // Replace with your actual API endpoint
				setProducts(response.data.result);
				console.log(response.data.result);
				setLoading(false);
			} catch (error) {
				setError("There was an error fetching the products!");
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<section className="ezy__epgrid8 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6 text-center">
					{products.map((product, i) => (
						<div className="col-span-12 md:col-span-6 xl:col-span-4" key={i}>
							<ProductItem product={product} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Epgrid8;
