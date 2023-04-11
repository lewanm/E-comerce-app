//DEPENDENCIES
import { useEffect, useState } from "react";
//STYLES
import "./index.scss";
//COMPONENTS
import { Product } from "./Product/index";
import { Button } from "components/common/Button";
//SERVICES
import { getProducts } from "services/products";

export function ProductList() {
  const [products, setProducts] = useState([]);

  const updateProducts = () => {
    getProducts().then((products) => {
      setProducts(products);
    });
  };

  useEffect(() => {
    updateProducts();
  }, []);
  return (
    <>
      <h3>TODO: HACER UN ORDER BY, QUE SEA POR QUERY Y QUE LO TRAIGA LA API</h3>
      <div className="admin-product-view">
        <div className="title-add-button">
          <p className="title">Administrar productos</p>
          <Button
            type="round"
            name="add-button"
            route="/admin/product"
            text="Agregar nuevo"
          />
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
      </div>
    </>
  );
}
