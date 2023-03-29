//DEPENDENCIES
import { Link } from "react-router-dom";

//STYLES
import "./ProductList.css";

//COMPONENTS
import { Product } from "./Product/Product";

export function ProductList() {
  return (
    <>
      <div className="title-add-button">
        <p className="title">Administrar productos</p>

        <div className="add-product-container">
          <Link className="add-product " to="/admin/new-product">
            +
          </Link>
        </div>
      </div>

      <section className="list-container">
        <Product />
      </section>
    </>
  );
}
