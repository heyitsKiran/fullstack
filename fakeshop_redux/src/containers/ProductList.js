import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SetProduct } from "../redux/action/ProductAction";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.product);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(SetProduct(response.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log("products :", products);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductList;
