const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  category: String,
  sub_category: String,
  brand: String,
  model: String,
  price: Number,
  stock: Number,
  properties: Schema.Types.Mixed,
});

// realizo esto para modificar como me llega el _id y el __v del find
productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Product = model("Product", productSchema);

function findAll() {
  Product.find({})
    .then((result) => {
      console.log(result);
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

function insertOne() {
  const product = new Product({
    category: "appliances",
    sub_category: "frigde",
    brand: "samsung",
    model: "RT38K5932S 323L",
    price: "230000",
    stock: "20",
    properties: {
      origin_country: "argentina",
      light: "led",
      color: "black",
    },
  });

  product
    .save()
    .then((result) => {
      console.log(result);
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

//modifica el export para exportar tambien las funciones que se realizan en el CRUD a si queda mas prolijo el index.js
module.exports = { Product, insertOne, findAll };
