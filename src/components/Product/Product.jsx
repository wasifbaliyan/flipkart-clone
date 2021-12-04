import React from "react";
import "./Product.css";

export default function Product({ product }) {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product_info">
        <p className="product_brand">{product.brand}</p>
        <p className="product_name">{product.name}</p>
        <p className="product_price">₹{product.price}</p>
        <div className="product_size">
          <p className="product_size_heading">Size</p>
          {product.sizes.map((size, i) => (
            <p className="product_size_item" key={size}>
              {i !== 0 && ", "}
              {size}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
