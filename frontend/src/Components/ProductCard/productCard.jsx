
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
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
						<Link to={`/product/${product.id}`}>
                <h6 className="hover:text-blue-600 text-[17px] font-medium mb-1">
                  {product.name}
                </h6></Link>
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
export default Product;