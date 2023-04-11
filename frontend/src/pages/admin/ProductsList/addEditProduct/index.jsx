//DEPENDENCIAS
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

//COMPONENTS
import { Input } from "components/common/Input";

//STYLES
import "./index.scss";

const URL = "http://192.168.100.5:3001/api/products/";

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

  const { id } = useParams();

  const cleanFields = () => {
    setNewProduct(INITIAL_STATE);
  };

  const validate = (_product) => {
    const product = { ..._product };
    if (product.stock === "") return product;
  };

  const getProductById = () => {
    if (id !== undefined) {
      axios.get(URL + id).then((response) => {
        const { data } = response;
        setNewProduct(data);
      });
    }
  };

  const createNewProduct = () => {
    //TODO implementar que si no tiene stock y otros campos los complete con 0
    //const product = validate(newProduct);
    axios
      .post(URL, newProduct)
      .then((response) => console.log(response))
      .then(alert("Se envio con exito"))
      .catch((error) => alert(error));
  };

  const updateProduct = (id) => {
    axios
      .put(URL + id, newProduct)
      .then((response) => console.log(response))
      .then(alert("Se envio con exito"))
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
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
  };

  const inputs = [];

  const shortInputs = [
    { name: "category", text: "categoria" },
    { name: "sub_category", text: "sub categoria" },
    { name: "item", text: "item" },
    { name: "brand", text: "marca" },
    { name: "complete_brand", text: "marca completa" },
    { name: "model", text: "modelo" },
    { name: "price", text: "precio" },
    { name: "precio_justo", text: "precio_justo", type: "checkbox" },
    { name: "stock", text: "stock" },
    { name: "discount", text: "descuento" },
    { name: "image", text: "imagen" },
  ];

  for (let input of shortInputs) {
    inputs.push({
      name: input.name,
      value: input.type ? newProduct[input.checked] : newProduct[input.name],
      func: input.type ? handleCheck : handleChange,
      labelText: input.text,
      type: input.type ? input.type : "text",
    });
  }

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <>
      <h4>TODO: poner boton para revisar imagen</h4>
      {/* DESPUES HACER ESTA VENTANA COMO MODAL*/}
      {/* TODO EL CONTENIDO DEL FORM, HACER UN ARRAY Y MAPEARLO*/}
      <form className="form" onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <div key={index} className="input-container">
            <label htmlFor={input.name}>{input.labelText}</label>
            {input.type === "text" ? (
              <input
                type="text"
                name={input.name}
                onChange={input.func}
                value={input.value}
              ></input>
            ) : (
              <input
                type={input.type}
                name={input.name}
                onChange={input.func}
                checked={input.value}
              ></input>
            )}
          </div>
        ))}

        <div className="input-container">
          <label htmlFor="stock">Propiedades -WIP-</label>
        </div>

        <div className="form-input">
          <button className="success">
            {id ? "Actualizar" : "Crear nuevo"}
          </button>
          <button
            className="rounded-button warning"
            type="button"
            onClick={() => navigate("/admin/product-list")}
          >
            Cancelar
          </button>
        </div>
      </form>
      <button onClick={() => console.log(newProduct)}>(dev)Check datos</button>
      <button onClick={() => setNewProduct(INITIAL_STATE)}> RESET </button>
    </>
  );
}
