import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import {Header} from "./components";
import {HotToast} from "./components";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <HotToast />
    </div>
  );
}
