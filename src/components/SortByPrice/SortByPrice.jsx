import React from "react";
import "./SortByPrice.css";
export default function SortByPrice({ sortBy, setSortBy }) {
  return (
    <section className="sortby">
      <div className="sortby_text">SortBy:</div>
      <div>
        <button
          onClick={() => setSortBy("low")}
          className={
            sortBy === "low" ? "sortby_button active" : "sortby_button"
          }
        >
          Price -- Low to High
        </button>
      </div>
      <div>
        <button
          onClick={() => setSortBy("high")}
          className={
            sortBy === "high" ? "sortby_button active" : "sortby_button"
          }
        >
          Price -- High to Low
        </button>
      </div>
    </section>
  );
}
