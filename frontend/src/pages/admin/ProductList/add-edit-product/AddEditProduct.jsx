//DEPENDENCIAS
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

//STYLES
import "./AddEditProduct.css";

const INITIAL_STATE = {
  category: "",
  sub_category: "",
  item: "",
  brand: "",
  complete_brand: "",
  model: "",
  price: "",
  precio_justo: false,
  stock: "",
  discount: "",
  image: "",
  properties: {},
};

export function AddEditProduct() {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState(INITIAL_STATE);
  //IMPLEMENTAR DESPUES LAS CATEGORIAS EN DROPDOWN
  /*   const category = [""]
  const subCategory = [] */
  //const [properties, setProperties] = useState(INITIAL_STATE.properties);
  /*   const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [properties, setProperties] = useState("");
 */
  const { id } = useParams();

  const cleanFields = () => {
    setNewProduct(INITIAL_STATE);
  };

  const validate = (_product) => {
    const product = { ..._product };
    if (product.stock === "") return product;
  };

  const createNewProduct = () => {
    //TODO implementar que si no tiene stock y otros campos los complete con 0
    //const product = validate(newProduct);
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

  const handleCheck = (e) => {
    const key = e.target.name;
    const checked = e.target.checked;

    setNewProduct({ ...newProduct, [key]: checked });
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

    if (id === undefined) {
      createNewProduct();
      cleanFields();
    } else updateProduct(id);

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
        setNewProduct(data);
      });
    }
  }, []);

  return (
    <>
      {/* DESPUES HACER ESTA VENTANA COMO MODAL*/}
      {/* TODO EL CONTENIDO DEL FORM, HACER UN ARRAY Y MAPEARLO*/}
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="category">Categoria</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={newProduct.category}
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="sub_category">Sub categoria</label>
          <input
            type="text"
            name="sub_category"
            onChange={handleChange}
            value={newProduct.sub_category}
          />
        </div>

        <div className="input-container">
          <label htmlFor="item">Item</label>
          <input
            type="text"
            name="item"
            onChange={handleChange}
            value={newProduct.item}
          />
        </div>

        <div className="input-container">
          <label htmlFor="brand">Marca</label>
          <input
            type="text"
            name="brand"
            onChange={handleChange}
            value={newProduct.brand}
          />
        </div>

        <div className="input-container">
          <label htmlFor="complete_brand">Marca completa</label>
          <input
            type="text"
            name="complete_brand"
            onChange={handleChange}
            value={newProduct.complete_brand}
          />
        </div>

        <div className="input-container">
          <label htmlFor="model">Modelo</label>
          <input
            type="text"
            name="model"
            onChange={handleChange}
            value={newProduct.model}
          />
        </div>

        <div className="input-container">
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={newProduct.price}
          />
        </div>

        <div className="input-container">
          <label htmlFor="precio_justo">Precio justo</label>
          <input
            className="checkbox"
            type="checkbox"
            name="precio_justo"
            onChange={handleCheck}
            checked={newProduct.precio_justo}
          />
        </div>

        <div className="input-container">
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            name="stock"
            onChange={handleChange}
            value={newProduct.stock}
          />
        </div>

        <div className="input-container">
          <label htmlFor="stock">Descuento</label>
          <input
            type="text"
            name="discount"
            onChange={handleChange}
            value={newProduct.discount}
          />
        </div>

        <div className="input-container">
          <label htmlFor="stock">Imagen</label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={newProduct.image}
          />
        </div>
        {/* este tengo que implementarlo, que haya un "MAS" para agregar nueva propiedad
        seleccionando de una lista desplegable */}
        <div className="input-container">
          <label htmlFor="stock">Propiedades -WIP-</label>
        </div>

        <div className="form-input">
          <button className="success">
            {id ? "Actualizar" : "Crear nuevo"}
          </button>
          <button
            className="warning"
            type="button"
            onClick={() => navigate("/admin/product-list")}
          >
            Cancelar
          </button>
        </div>
      </form>

      <button onClick={() => console.log(newProduct)}>(dev)Check datos</button>
    </>
  );
}
