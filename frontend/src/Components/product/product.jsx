import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import SummaryApi from "../../common";
const ProductPreviews = ({ previews }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-4 sm:p-6 lg:p-12 lg:mr-6">
      <div className="text-center mb-4 md:p-6">
		{
        //   src={previews[index].previewUrl}
        //   alt=""
        //   className="max-w-full h-auto w-full"
        // />:
}
		<img src='../../../public/noImage.png' alt="" className="max-w-full h-auto w-full"/>
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
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    color: "Multi",
    size: "XL",
    qty: 1,
  });

  useEffect(() => {
    // Fetch the product details from the backend
    axios.get(`${SummaryApi.productDetails.url}/${productId}`)
      .then(response => {
        setProduct(response.data.result);
		console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the product!", error);
      });
  }, [productId]);

  const setField = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            {/* <ProductPreviews previews={product.previews} /> */}
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mb-6 lg:mb-12">
              <h1 className="text-2xl leading-none md:text-4xl font-medium mb-4">
                {product.title}
              </h1>
              <p className="opacity-70 mb-6">
                <span>{product.rating}</span>{" "}
                <FontAwesomeIcon
                  icon={faStar}
                  className="mx-2 text-yellow-500"
                />
                <a href="#!" className="text-blue-600 font-medium ml-1">
                  {product.rateCount} Reviews
                </a>{" "}
                <span className="ml-2">104 Order</span>
              </p>
              <p className="opacity-70 lg:mr-56 xl:mr-80 my-4">
                {product.description}
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
