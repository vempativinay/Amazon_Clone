import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home"


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import All from "./pages/All";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import BulkPage from "./pages/BulkPage";
import { ShowProduct } from "./pages/ShowProduct";
import ProductContext from "./Context/ProductContext";
import Cart from "./pages/Cart";

export function App() {


  return (
    <div id="root" >
      <div id="app">
        <div>
          <ProductContext>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<All />} />
                <Route path="/all/category" element={<Shop />} />
                <Route path="/categories/:id" element={<Shop />} />
                <Route path="/name/bulk" element={<BulkPage />} />
                <Route path="/Showproducts/:id" element={<ShowProduct />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </ProductContext>
        </div>
      </div>
    </div>
  )
}

export default App
