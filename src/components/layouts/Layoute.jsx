import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layoute = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layoute;
