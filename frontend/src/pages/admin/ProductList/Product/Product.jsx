//DEPENDENCIES
import { useNavigate } from "react-router-dom";
import axios from "axios";

//STYLES
import "./Product.css";

//COMPONENTS
import { PrecioJustos } from "../../../../components/PrecioJustos/PrecioJustos";

export function Product({ updateProducts, product }) {
  const { id, item, brand, model, stock, image, precio_justo } = product;

  const navigate = useNavigate();

  const handleRemove = () => {
    if (
      window.confirm(
        `Seguro que quiere elimiar el item ${item} ${brand} ${model}?`
      )
    ) {
      axios
        .delete(`http://localhost:3001/api/products/${id}`)
        .then((response) => console.log(response))
        .then(() => updateProducts());
    }
  };

  const handleUpdate = () => {
    navigate(`/admin/product/${id}`);
  };

  return (
    <article className="modificar-nombre">
      <div className="admin-product-img">
        <img src={image} alt={`${item} ${brand}`} />
        {precio_justo && (
          <span
            style={{
              background: "blue",
              position: "absolute",
              top: "0",
              left: "0",
              color: "white",
              borderRadius: "50%",
              fontSize: "0.7em",
              padding: "4px",
            }}
          >
            PJ
          </span>
        )}
      </div>
      <div className="admin-product-info">
        <table>
          <tbody>
            <tr>
              <td>{`${item} ${brand}`}</td>
            </tr>
            <tr>
              <td>{model}</td>
            </tr>
            <tr>{stock !== 0 && <td>Stock: {stock}</td>}</tr>
          </tbody>
        </table>
      </div>
      <div className="admin-product-buttons">
        <div className="edit-button" onClick={handleUpdate}>
          ✏️
        </div>
        <div className="remove-button" onClick={handleRemove}>
          X
        </div>
      </div>
    </article>
  );
}
