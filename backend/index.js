const express = require("express");
const app = express();
const cors = require("cors");

const notFound = require("./middleware/notFound");
const handleIdErrors = require("./middleware/handleIdErrors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

//podria o crear una funcion en mongo.js y exportarlo, o traerlo de una con require
//ya que se ejecuta una sola vez y queda cacheado

require("./mongo");

//importar modelos
const { Product } = require("./models/Product");

//API
app.get("/test", (req, res) => {
  res.send("ES UNA PRUEbA!! ");
});

app.get("/api/products", (req, res) => {
  Product.find({}).then((products) => {
    res.json(products);
  });
});

app.get("/api/products/:id", (req, res, next) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      if (product) {
        return res.json(product);
      } else {
        return res.status(404).end();
      }
    })
    .catch((err) => {
      next(err);
    });
});

app.post("/api/products", (req, res) => {
  const product = req.body;
  /*   if (!product.content) {
    return res.status(400).json({
      error: "Campo requerido no esta completo",
    });
  } */

  const newProduct = new Product({
    category: product.category,
    sub_category: product.sub_category,
    brand: product.brand,
    model: product.model,
    price: product.price,
    stock: product.stock,
    properties: product.properties,
  });

  newProduct
    .save()
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/api/products/:id", (req, res, next) => {
  const { id } = req.params;

  Product.findByIdAndDelete(id)
    .then(() => {
      res.send({ success: "Se borro exitosamente" }).end();
    })
    .catch((err) => {
      next(err);
    });
});

app.put("/api/products/:id", (req, res, next) => {
  const { id } = req.params;
  const product = req.body;

  const updatedProduct = {
    category: product.category,
    sub_category: product.sub_category,
    brand: product.brand,
    model: product.model,
    price: product.price,
    stock: product.stock,
    properties: product.properties,
  };
  Product.findByIdAndUpdate(id, updatedProduct, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
});

//middleware para 404
app.use(notFound);
//lo trae el NEXT del get con ID
//creo un middleware para handlear los ID incorrectos
app.use(handleIdErrors);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
