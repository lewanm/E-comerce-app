import "./UserProducts.css";

import { Filters } from "../../components/users/Filters";
import { Product } from "./product/Product";

export function Products() {
  const randomNumber = Math.ceil(Math.random() * 200);

  return (
    <div className="products-view">
      <h1>Dejo este nombre?</h1>
      <div className="views-container">
        <div className="cambiarDeNombreLine">
          <div className="line 1"></div>
          <div className="line 2"></div>
          <div className="line 3"></div>
        </div>
        <div className="cambiarDeNombreGrid">
          <div className="grid 1"></div>
          <div className="grid 2"></div>
          <div className="grid 3"></div>
          <div className="grid 4"></div>
        </div>
      </div>

      <div className="items-counter">
        <small>{randomNumber} products</small>
      </div>

      <Filters />

      <div className="product-list-container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
