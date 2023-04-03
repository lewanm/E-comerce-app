import "./UserProducts.css";

import { useState } from "react";

import { Filters } from "../../components/users/Filters";
import { Pepe } from "./product/userProduct";

export function Products() {
  const [isGrid, setIsGrid] = useState(true);
  const [randomNumber, setRandomNumber] = useState(
    Math.ceil(Math.random() * 200)
  );

  const handleClickInline = () => {
    setIsGrid(false);
  };

  const handleClickGrid = () => {
    setIsGrid(true);
  };

  return (
    <div className="products-view">
      <h1>Dejo este nombre?</h1>
      <div className="views-container">
        <div onClick={handleClickInline} className="cambiarDeNombreLine">
          <div className="line 1"></div>
          <div className="line 2"></div>
          <div className="line 3"></div>
        </div>
        <div onClick={handleClickGrid} className="cambiarDeNombreGrid">
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

      <div
        className={
          isGrid
            ? "product-list-container-grid"
            : "product-list-container-inline"
        }
      >
        <Pepe isGrid={isGrid} />
        <Pepe isGrid={isGrid} />
        <Pepe isGrid={isGrid} />
        <Pepe isGrid={isGrid} />
        <Pepe isGrid={isGrid} />
        <Pepe isGrid={isGrid} />
      </div>
    </div>
  );
}
