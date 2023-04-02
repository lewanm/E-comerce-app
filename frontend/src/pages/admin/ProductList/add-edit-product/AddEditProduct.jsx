import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const INITIAL_STATE = {
  category: "",
  item: "",
  brand: "",
  model: "",
  price: "",
  stock: "",
  properties: {},
};

export function AddEditProduct() {
  const [newProduct, setNewProduct] = useState(INITIAL_STATE);
  const [properties, setProperties] = useState(INITIAL_STATE);
  /*   const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [properties, setProperties] = useState("");
 */
  const { id } = useParams();

  const createNewProduct = () => {
    axios
      .post("http://localhost:3001/api/products", newProduct)
      .then((response) => console.log(response))
      .then(alert("Se envio con exito"))
      .catch((error) => alert(error));
  };

  const updateProduct = (id) => {
    axios
      .put(`http://localhost:3001/api/products/${id}`, newProduct)
      .then((response) => console.log(response))
      .then(alert("Se envio con exito"))
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    /*     console.log(`${key}: ${value}`); */
    setNewProduct({ ...newProduct, [key]: value });
  };
  const formIsComplete = () => {
    //TODO completar el fomrulario y la verificacion de que este completo correctamente.
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsComplete()) {
      alert("Debe completar todos los campos");
      return;
    }

    if (id === undefined) createNewProduct();
    else updateProduct(id);

    /* e.preventDefault();
    if (formIsComplete) {
      const objetoPrueba = {
        category: newProduct.category.trim(),
        item: newProduct.item.trim(),
        brand: newProduct.brand.trim(),
        model: newProduct.model.trim(),
        price: newProduct.price.trim(),
        stock: newProduct.stock.trim(),
        properties: newProduct.properties,
      };
      axios
        .post("http://localhost:3001/api/products", objetoPrueba)
        .then((response) => console.log(response))
        .then(alert("Se envio con exito"))
        .catch((error) => alert(error));
    } else alert("Hay campos sin completar"); */
  };

  useEffect(() => {
    if (id !== undefined) {
      axios.get(`http://localhost:3001/api/products/${id}`).then((response) => {
        const { data } = response;
        console.log(data);
        setNewProduct(data);
      });
    }
  }, []);

  return (
    <>
      {/* DESPUES HACER ESTA VENTANA COMO MODAL*/}
      {id && <h3>ID: {id}</h3>}
      <Link to="/admin/product-list">Volver</Link>
      <h1>soy el nuevo producto !</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={newProduct.category}
          />
        </div>

        <div>
          <label htmlFor="item">item</label>
          <input
            type="text"
            name="item"
            onChange={handleChange}
            value={newProduct.item}
          />
        </div>

        <div>
          <label htmlFor="brand">brand</label>
          <input
            type="text"
            name="brand"
            onChange={handleChange}
            value={newProduct.brand}
          />
        </div>

        <div>
          <label htmlFor="model">model</label>
          <input
            type="text"
            name="model"
            onChange={handleChange}
            value={newProduct.model}
          />
        </div>

        <div>
          <label htmlFor="price">price</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={newProduct.price}
          />
        </div>

        <div>
          <label htmlFor="stock">stock</label>
          <input
            type="number"
            name="stock"
            onChange={handleChange}
            value={newProduct.stock}
          />
        </div>

        <button>Enviar</button>
      </form>
    </>
  );
}
