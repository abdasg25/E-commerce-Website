
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faStar,
	faStarHalfAlt,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import { Fragment } from "react";
import {Link} from "react-router-dom";
const Rating = ({ rating }) => (
	<span className="flex items-center text-yellow-500">
		{[...Array(5)].map((_, i) => {
			const index = i + 1;
			let content = "";
			if (index <= Math.floor(rating))
				content = <FontAwesomeIcon icon={faStar} className="mr-1" />;
			else if (rating > i && rating < index + 1)
				content = <FontAwesomeIcon icon={faStarHalfAlt} className="mr-1" />;
			else if (index > rating)
				content = <FontAwesomeIcon icon={farStar} className="mr-1" />;

			return <Fragment key={i}>{content}</Fragment>;
		})}
	</span>
);

Rating.propTypes = {
	rating: PropTypes.number,
};

const ProductItem = ({ product }) => {
	return (
		<div className="rounded border dark:border-slate-700 h-full">
			<div className="relative">
				{/* <h6 className="absolute top-3 right-5 bg-green-500 text-white py-1 px-3 rounded-2xl">
					{product.new}
				</h6> */}
				<a href="#!">
					<img src={product.img} alt="..." className="w-full rounded-t" />
				</a>
			</div>
			<div className="p-4 lg:p-6 text-start">
					<Link to={`/productdetail/${product._id}`}>
					<h5 className="text-[17px] font-medium hover:underline mb-1">
						{product.title}
					</h5>
				</Link>
				<a href="#!">
					<h5 className="text-sm leading-none opacity-60 hover:underline font-medium">
						{product.category}
					</h5>
				</a>
				<div className="py-2 flex items-center">
					<h5 className="text-2xl font-medium text-blue-600">
						${product.discount}
					</h5>
					<h5 className="text-[15px] opacity-70 line-through ml-2">
						${product.real}
					</h5>
				</div>
				<div className="opacity-80">
					<h6 className="font-medium text-sm mb-1">
						Shipping Cost: ${product.shipping}
					</h6>
					<h6 className="text-sm font-medium">
						Stock:
						<span className="text-emerald-500">{product.availibility}</span>
					</h6>
				</div>
				<div className="flex justify-between items-center mt-6">
					<div className="flex items-center text-yellow-500">
						<Rating rating={product.rating} />
						<span className="text-black dark:text-white opacity-75">
							({product.count})
						</span>
					</div>
					<div className="flex">
						<button className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded py-1 px-3 text-sm mr-2">
							<FontAwesomeIcon icon={faHeart} />
						</button>
						<button className="bg-blue-600 border border-blue-600 text-white hover:bg-opacity-90 py-1 px-3 rounded text-sm">
							<FontAwesomeIcon icon={faShoppingCart} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};
export default ProductItem;