import "./Product.css";
export function Product() {
  return (
    <>
      <article className="modificar">
        <div className="product-img">
          <img
            src="https://electroluxar.vtexassets.com/arquivos/ids/162435-600-600?v=638016147499900000&width=600&height=600&aspect=true"
            alt=""
          />
        </div>
        <div className="product-info">
          <table>
            <tr>
              <th>Heladera Samsung</th>
            </tr>
            <tr>
              <td>12345-P</td>
            </tr>
            <tr>
              <td>Stock: 1</td>
            </tr>
          </table>
        </div>
        <div className="product-buttons">
          <div className="edit-button">✏️</div>
          <div className="remove-button">X</div>
        </div>
      </article>
    </>
  );
}
