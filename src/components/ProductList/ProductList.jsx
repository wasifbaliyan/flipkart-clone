import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../App";
import Product from "../Product/Product";
import SortByPrice from "../SortByPrice/SortByPrice";
import "./ProductList.css";
export default function ProductList() {
  const { state } = useContext(FilterContext);

  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await fetch("db/products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();
      setProducts(data);
    }
    getData();
  }, []);

  function checkBrand(brand) {
    let index = state.brand.indexOf(brand);
    if (index !== -1) return brand;
    else return "not found";
  }
  function checkGender(gender) {
    let index = state.gender.indexOf(gender);
    if (index !== -1) return gender;
    else return "not found";
  }
  function checkSizes(size) {
    let flag = false;
    state.size.forEach((item) => {
      const index = size.indexOf(item);

      if (index !== -1) {
        flag = true;
      }
    });
    return flag;
  }

  function getFilteredProducts(products) {
    return getSortedProducts(products).filter((product) => {
      // if (state.brand.length !== 0) {
      //   return product.brand === checkBrand(product.brand);
      // } else if (state.gender.length !== 0) {
      //   return product.gender === checkGender(product.gender);
      // } else if (state.size.length !== 0) {
      //   return checkSizes(product.sizes);
      // } else {
      //   return product;
      // }

      if (
        state.brand.length !== 0 ||
        state.gender.length !== 0 ||
        state.size.length !== 0
      ) {
        return (
          product.brand === checkBrand(product.brand) ||
          product.gender === checkGender(product.gender) ||
          checkSizes(product.sizes)
        );
      }
      return product;
    });
  }

  function getSortedProducts(products) {
    if (sortBy === "low") {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      return products.sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  }

  console.log(state, products);

  return (
    <section className="product-list">
      <h3 className="product-list_heading">Product List</h3>
      <SortByPrice sortBy={sortBy} setSortBy={setSortBy} />
      <div className="line"></div>
      <div className="product-list_container">
        {getFilteredProducts(products).map((product) => (
          <Product product={product} key={product.price} />
        ))}
      </div>
    </section>
  );
}
