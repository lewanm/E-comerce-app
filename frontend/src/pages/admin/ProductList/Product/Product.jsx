//DEPENDENCIES
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//STYLES
import "./Product.css";

export function Product({ updateProducts, product }) {
  const {
    id,
    item,
    brand,
    model,
    stock,
    img = "https://electroluxar.vtexassets.com/arquivos/ids/162435-600-600?v=638016147499900000&width=600&height=600&aspect=tru",
  } = product;

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
    <article className="modificar">
      <div className="product-img">
        <img src={img} alt={`${item} ${brand}`} />
      </div>
      <div className="product-info">
        <table>
          <tbody>
            <tr>
              <td>{`${item} ${brand}`}</td>
            </tr>
            <tr>
              <td>{model}</td>
            </tr>
            <tr>
              <td>Stock:{stock}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="product-buttons">
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
