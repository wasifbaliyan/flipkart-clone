import React from "react";
import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <main style={{ paddingTop: "3.5rem" }}>{children}</main>
    </div>
  );
}
