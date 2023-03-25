import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /> <Subscribe /></>}/>
        <Route path="/productlist" element={<ProductList />}/>
        <Route path="/productlist/:id" element={<SingleProduct />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
