//STYLES
import "./UserProducts.css";
//DEPENDENCIES
import axios from "axios";
import { useEffect, useState } from "react";
//COMPONENTS
import { Filters } from "../../components/users/Filters";
import { Pepe } from "./product/userProduct";

const URL = "http://localhost:3001/api/products";

export function Products() {
  const [products, setProducts] = useState([]);

  const [isGrid, setIsGrid] = useState(true);

  const handleClickInline = () => {
    setIsGrid(false);
  };

  const handleClickGrid = () => {
    setIsGrid(true);
  };

  useEffect(() => {
    //TODO cambiar esto por la funcion que ya lo hace
    axios.get(URL).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="products-view">
      {/* TODO: CAMBIAR ESTO POR ICONOS DE VERDAD */}
      <div className="views-container">
        <div onClick={handleClickInline} className="list-view">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
            <path d="M350 836h470V699H350v137ZM140 453h150V316H140v137Zm0 187h150V513H140v127Zm0 196h150V699H140v137Zm210-196h470V513H350v127Zm0-187h470V316H350v137ZM140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Z" />
          </svg>
        </div>
        <div onClick={handleClickGrid} className="grid-view">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
            <path d="M120 546V216h330v330H120Zm0 390V606h330v330H120Zm390-390V216h330v330H510Zm0 390V606h330v330H510ZM180 486h210V276H180v210Zm390 0h210V276H570v210Zm0 390h210V666H570v210Zm-390 0h210V666H180v210Zm390-390Zm0 180Zm-180 0Zm0-180Z" />
          </svg>
        </div>
      </div>

      <div className="items-counter">
        <small>{products.length} products</small>
      </div>

      <Filters />

      <div
        className={
          isGrid
            ? "product-list-container-grid"
            : "product-list-container-inline"
        }
      >
        {products.map((product) => (
          <Pepe key={product.id} isGrid={isGrid} product={product} />
        ))}
      </div>
    </div>
  );
}
