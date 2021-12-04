import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../App";
import "./Filters.css";

export default function Filters() {
  const [products, setProducts] = useState([]);
  const { state, dispatch } = useContext(FilterContext);

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

  function getBrands() {
    const brands = products.map((product) => product.brand);
    const unique = [...new Set(brands)];
    return unique;
  }

  function isChecked(type, value) {
    const index = state[type].indexOf(value);
    if (index !== -1) return true;
    else return false;
  }

  return (
    <div className="filters">
      <div className="clear_container">
        <h3 className="filters_heading">Filters</h3>
        <div>
          <button
            onClick={() => dispatch({ type: "clear" })}
            className="clear_filters"
          >
            CLEAR ALL
          </button>
        </div>
      </div>
      <div className="line"></div>
      <div className="filter">
        <p className="filter_heading">Ideal For</p>
        <div>
          {["male", "female"].map((gender) => (
            <div key={gender}>
              <input
                checked={isChecked("gender", gender)}
                className="checkbox"
                id={gender}
                type="checkbox"
                name="gender"
                onChange={(e) =>
                  dispatch({
                    type: "gender",
                    payload: {
                      checked: e.target.checked,
                      value: gender,
                      name: e.target.name,
                    },
                  })
                }
              />
              <label htmlFor={gender} className="label">
                {gender}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="line"></div>
      <div className="filter">
        <p className="filter_heading">Brand</p>
        <div>
          {getBrands().map((brand) => (
            <div key={brand}>
              <input
                checked={isChecked("brand", brand)}
                onChange={(e) =>
                  dispatch({
                    type: "brand",
                    payload: {
                      checked: e.target.checked,
                      value: brand,
                      name: e.target.name,
                    },
                  })
                }
                className="checkbox"
                id={brand}
                type="checkbox"
                name="brand"
              />
              <label htmlFor={brand} className="label">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="line"></div>

      <div className="filter">
        <p className="filter_heading">Size</p>
        <div>
          {["S", "M", "L", "XL"].map((size) => (
            <div key={size}>
              <input
                checked={isChecked("size", size)}
                className="checkbox"
                id={size}
                type="checkbox"
                name="size"
                onChange={(e) =>
                  dispatch({
                    type: "size",
                    payload: {
                      checked: e.target.checked,
                      value: size,
                      name: e.target.name,
                    },
                  })
                }
              />
              <label htmlFor={size} className="label">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
