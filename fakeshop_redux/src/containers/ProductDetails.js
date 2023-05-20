import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // const { productId } = useParams();
  // const fetchProductDetail = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/{id}`)
  //     .catch((err) => console.log("err", err));
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   if (productId && productId !== "") fetchProductDetail();
  // }, [productId]);

  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;
