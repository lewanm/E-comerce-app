import "./Product.css";
import { PrecioJustos } from "../../../components/PrecioJustos/PrecioJustos";

//weas placeholder
const listaMedidas = ["kilo", "litro", "unidad"];
const medida = listaMedidas[Math.floor(Math.random() * listaMedidas.length)];

export function Pepe({ isGrid, product }) {
  const { brand, discount, price, image, item, model } = product;

  const price_with_discount = price - (price * discount) / 100;
  const subtitle = `${item} ${
    brand.toLowerCase() === "sin marca" ? "" : brand
  } ${model}`;

  const formatNumber = (number) => number.toLocaleString();
  const formatText = (string) => {
    if (string.length > 45 && isGrid) return string.slice(0, 40) + "...";
    return string;
  };

  return (
    <div className={isGrid ? "product-card-grid" : "product-card-inline"}>
      <div className={isGrid ? "product-img-grid" : "product-img-inline"}>
        {product.precio_justo && <PrecioJustos />}
        <img src={image} alt={`${item} ${brand}`} />
      </div>

      <div
        className={
          isGrid
            ? "product-text-container-grid"
            : "product-text-container-inline"
        }
      >
        <div className={isGrid ? "product-text-grid" : "product-text-inline"}>
          <p className="title">
            {/*             {complete_brand
              ? complete_brand.toUpperCase()
              : brand.toUpperCase()} */}
            {brand.toUpperCase()}
          </p>
          <p className="subtitle">{formatText(subtitle)}</p>
        </div>
        <div className={isGrid ? "product-price-grid" : "product-price-inline"}>
          {discount !== 0 ? (
            <div
              className={
                isGrid ? "price-container-grid" : "price-container-inline"
              }
            >
              <p className="price">${formatNumber(price_with_discount)}</p>
              <p className="original-price">${formatNumber(price)}</p>
              <p className="discount">-{discount}%</p>
            </div>
          ) : (
            <div
              className={
                isGrid ? "price-container-grid" : "price-container-inline"
              }
            >
              <p className="price">${formatNumber(price)}</p>
            </div>
          )}
        </div>
        <div className={isGrid ? "product-mini-grid" : "product-mini-inline"}>
          <p>
            Precio regular: ${price} x {medida}
          </p>
          <p>Llevando 2 ${price} c/u</p>
        </div>

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
