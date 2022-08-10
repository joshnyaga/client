import "./App.css";
import Nav from "./Components/Nav";
import About from "./Container/AboutUs/About";
import Category from "./Container/category/Category";
import Home from "./Container/Home/Home";
import Details from "./Container/ProductDetails/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Components/NoPage";
import Checkout from "./Container/Checkout/Checkout";
import Contact from "./Container/Contactus/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="category" element={<Category />} />
          <Route path="details" element={<Details />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
