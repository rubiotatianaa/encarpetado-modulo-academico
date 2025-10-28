import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { endPoints } from "../api/apiModuloAcademico";
import {alertaRedireccion } from "../utils/alertas";
import "./Registro.css"

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol, setRol] = useState("");
  const [estado, setEstado] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      nombre,
      correo,
      contrasena,
      rol,
      estado,
    };

    try {
      const response = await fetch(endPoints.usuarios, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
      });

      if (response.ok) {
        alertaRedireccion("Usuario registrado correctamente", "success", navigate, "/login");
      } else {
        alert("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="registro-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label>Nombre</label>
        </div>
        <div className="inputForm">
          <input
            placeholder="Ingresa tu nombre"
            className="input"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <input
            placeholder="Ingresa tu correo"
            className="input"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="flex-column">
          <label>Contraseña</label>
        </div>
        <div className="inputForm">
          <input
            placeholder="Crea una contraseña"
            className="input"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        <div className="flex-column">
          <label>Rol</label>
        </div>
        <div className="inputForm">
          <select
            className="input"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          >
            <option value="">Selecciona un rol</option>
            <option value="Estudiante">Estudiante</option>
           
          </select>
        </div>

        <div className="flex-column">
          <label>Estado</label>
        </div>
        <div className="inputForm">
          <select
            className="input"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="">Selecciona estado</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <button type="submit" className="button-submit">
          Registrarse
        </button>

        <p className="p">
          ¿Ya tienes una cuenta?{" "}
          <span
            className="span"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Inicia sesión
          </span>
        </p>
      </form>
    </div>
  );
}

export default Registro;
