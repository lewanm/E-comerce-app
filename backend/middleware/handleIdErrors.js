module.exports = (error, request, response, next) => {
  console.error(error);

  if ((error.name = "CastError"))
    response.status(400).send({ error: "el id ingresado no es correcto" });
  else response.status(500).end();
};
