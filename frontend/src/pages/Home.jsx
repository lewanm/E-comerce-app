import { Link } from "react-router-dom";
const style = {
  display: "flex",
  justifyContent: "center",
};
export const Home = () => {
  return (
    <>
      <h1>Esta es una copia de Jumbo</h1>
      <Link style={style} to="/products">
        Ingresar
      </Link>
    </>
  );
};
