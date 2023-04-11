import { useNavigate } from "react-router-dom";

export function Button({
  route = "error/agregar-ruta",
  name = "",
  buttonType = "rounded",
  color = "success",
  text = "modificar texto",
  type = "round",
}) {
  const navigate = useNavigate();

  const class_name = `${name} ${
    type === "round" ? "round-button" : "circle-button"
  } ${buttonType} ${color}`;

  return (
    <>
      <button onClick={() => navigate(route)} className={class_name}>
        {text}
      </button>
    </>
  );
}
