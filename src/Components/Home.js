import React from "react";
import Slide from "./Slider";
import Header from "./elements/Header";

//components
import ProductsCards from "./containers/Products";
import OrderSection from "./containers/OrderSection";
import About from "./containers/About";
import Overlay from "./containers/Overlay";
import Contact from "./containers/Contact";
const Home = () => {
  return (
    <div>
      <Slide/>
      <Header>Productos</Header>
      <ProductsCards />
      <OrderSection />
      <About />
      <Overlay />
      <Contact/>
    </div>
  );
};

export default Home;
