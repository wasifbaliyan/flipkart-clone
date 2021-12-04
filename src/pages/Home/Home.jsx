import React from "react";
import Filters from "../../components/Filters/Filters";
import ProductList from "../../components/ProductList/ProductList";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <aside className="home_sidebar">
        <Filters />
      </aside>
      <section className="home_main">
        <ProductList />
      </section>
    </div>
  );
}
