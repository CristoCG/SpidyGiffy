import logo from "./spiderman.png";
import { useLocation } from "wouter";
import "./styles.css";

export default function Icono() {
  const [path, pushLocation] = useLocation();

  const handleIcon = (evt) => {
    //evitar que refresque la pagina
    evt.preventDefault();
    // cambiar la ruta del navegador
    pushLocation("/");
  };

  return <>
  <img alt="Giffy logo" id="Icono" src={logo} onClick={handleIcon} />
  <h3 className="Icon-title">Spidy Giffy</h3>
  </>
}
