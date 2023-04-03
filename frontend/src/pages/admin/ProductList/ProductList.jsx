//DEPENDENCIES
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//STYLES
import "./ProductList.css";
//COMPONENTS
import { Product } from "./Product/Product";
//SERVICES
import { getProducts } from "../../../services/products";

export function ProductList() {
  const [products, setProducts] = useState([]);

  const updateProducts = () => {
    getProducts().then((products) => setProducts(products));
  };
  useEffect(() => {
    updateProducts();
  }, []);
  return (
    <>
      <div className="title-add-button">
        <p className="title">Administrar productos</p>

        <div className="add-product-container">
          <Link className="add-product " to="/admin/product">
            +
          </Link>
        </div>
      </div>

      <section className="admin-list-container">
        {products.map((product) => (
          <Product
            updateProducts={updateProducts}
            product={product}
            key={product.id}
          />
        ))}
      </section>
    </>
  );
}
