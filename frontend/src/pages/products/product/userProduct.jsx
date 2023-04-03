import "./Product.css";
import { PrecioJustos } from "../../../components/PrecioJustos/PrecioJustos";

const precio = (Math.random() * (1000 - 100) + 100).toFixed(2);
const listaMedidas = ["kilo", "unidad"];
const medida = listaMedidas[Math.floor(Math.random() * 2)];

const img =
  "https://electroluxar.vtexassets.com/arquivos/ids/162435-600-600?v=638016147499900000&width=600&height=600&aspect=tru";

export function Pepe(props) {
  const { isGrid } = props;

  return (
    <div className={isGrid ? "product-card-grid" : "product-card-inline"}>
      <div className={isGrid ? "product-img-grid" : "product-img-inline"}>
        {Math.random() * 10 > 7 && <PrecioJustos />}
        <img src={img} alt="" />
      </div>

      <div
        className={
          isGrid
            ? "product-text-container-grid"
            : "product-text-container-inline"
        }
      >
        <div className={isGrid ? "product-text-grid" : "product-text-inline"}>
          <p className="title">Cousine & CO NBE MP</p>
          <p className="subtitle">Linguine Cuisine & Co 500 Gr</p>
        </div>
        <div className={isGrid ? "product-price-grid" : "product-price-inline"}>
          ${precio}
        </div>
        <p className={isGrid ? "product-mini-grid" : "product-mini-inline"}>
          Precio regular: ${precio} x {medida}
        </p>

        <button
          className={
            isGrid ? "product-add-to-cart-grid" : "product-add-to-cart-inline"
          }
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
