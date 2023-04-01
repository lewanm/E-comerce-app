import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NoPage";
import { TestPage } from "./pages/TestPage";

//STYLES
import "./global.css";
//COMPONENTS

//ADMIN
import { ProductList } from "./pages/admin/ProductList/ProductList";
import { AddEditProduct } from "./pages/admin/ProductList/add-edit-product/AddEditProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<TestPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="product" element={<AddEditProduct />} />
          <Route path="product/:id" element={<AddEditProduct />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
