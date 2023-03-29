import { Link } from "react-router-dom";
export function NewProduct() {
  return (
    <>
      {/* DESPUES HACER ESTA VENTANA COMO MODAL*/}
      <Link to="/admin/product-list">Volver</Link>
      <h1>soy el nuevo producto !</h1>
    </>
  );
}
