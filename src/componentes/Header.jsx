import { Link, useNavigate } from "react-router-dom";
import { alertaRedireccion } from "../utils/alertas";
import "./Header.css";

const Header = () => {
  
  const usuarioAuth = JSON.parse(localStorage.getItem("usuario")) || { nombre: "Usuario" };
  const iniciales = usuarioAuth.nombre
    .split(" ")
    .map((palabra) => palabra[0].toUpperCase())
    .join("");

  const navigate = useNavigate();

 
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    alertaRedireccion("Sesión finalizada...", "info", navigate, "/");
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo y nombre de la plataforma */}
        <div className="header-logo">
          <div className="logo-icon">
            <span className="logo-text">📚</span>
          </div>
          <h1 className="platform-name">notas</h1>
        </div>

        {/* Navegación */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/notas" className="nav-link">
                Notas
              </Link>
            </li>
          </ul>
        </nav>

        {/* Navegación */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/graficos" className="nav-link">
                Graficos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Información de usuario */}
        <div className="header-user">
          <div className="user-profile">
            <div className="user-avatar">
              <span className="avatar-text">{iniciales}</span>
            </div>
            <div className="user-info">
              <span className="user-name">{usuarioAuth.nombre}</span>
            </div>
          </div>
          <button onClick={cerrarSesion} className="logout-btn" type="button">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
