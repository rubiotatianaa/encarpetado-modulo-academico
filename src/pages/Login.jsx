import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { endPoints } from "../api/apiModuloAcademico";
import {alertaRedireccion } from "../utils/alertas";
import "./Login.css";


const generarToken = () => {
  return Math.random().toString(36).substring(2);
};


function Login() {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    fetch(endPoints.usuarios)
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error));


    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  function buscarUsuario() {
    return usuarios.find(
      (usuario) =>
        getEmail === usuario.correo && getPassword === usuario.contraseña
    );
  }

  function iniciarSesion(e) {
    e.preventDefault(); 
    const usuarioEncontrado = buscarUsuario();

    if (usuarioEncontrado) {
      const tokenAcceso = generarToken();
      localStorage.setItem("token", JSON.stringify(tokenAcceso));
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      alertaRedireccion(
        "Bienvenido " + usuarioEncontrado.nombre,
        "success",
        navigate,
        "/home"
      );
    } else {
      alert("Error de credenciales");
    }
  }
  

 return (
  <div className="login-wrapper">
    <form className="form-container" onSubmit={iniciarSesion}>
      <div className="flex-column">
        <label>Email</label>
      </div>
      <div className="inputForm">
        <input
          placeholder="Enter your Email"
          className="input"
          type="text"
          value={getEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex-column">
        <label>Password</label>
      </div>
      <div className="inputForm">
        <input
          placeholder="Enter your Password"
          className="input"
          type="password"
          value={getPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex-row">
        <div>
          <input type="radio" />
          <label>Remember me</label>
        </div>
        <span className="span">Forgot password?</span>
      </div>

      <button type="submit" className="button-submit">
        Sign In
      </button>

      <p className="p">
        Don't have an account? <span className="span">Sign Up</span>
      </p>
    </form>
  </div>
);
}
export default Login;