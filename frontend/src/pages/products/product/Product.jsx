import "./Product.css";
import { PrecioJustos } from "../../../components/PrecioJustos/PrecioJustos";

const precio = (Math.random() * (1000 - 100) + 100).toFixed(2);
const listaMedidas = ["kilo", "unidad"];
const medida = listaMedidas[Math.floor(Math.random() * 2)];

const img =
  "https://electroluxar.vtexassets.com/arquivos/ids/162435-600-600?v=638016147499900000&width=600&height=600&aspect=tru";

export function Product() {
  return (
    <div className="product-container">
      <div className="product-img">
        {Math.random() * 10 > 7 && <PrecioJustos />}
        <img src={img} alt="" />
      </div>
      <div className="product-text">
        <p className="title">Cousine & CO NBE MP</p>
        <p className="subtitle">Linguine Cuisine & Co 500 Gr</p>
      </div>
      <div className="product-price">${precio}</div>
      <p className="product-mini .start-center-text">
        Precio regular: ${precio} x {medida}
      </p>

      <button className="product-add-to-cart .start-center-text ">
        Agregar
      </button>
    </div>
  );
}
