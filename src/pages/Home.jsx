import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "./Home.css";

const Home = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  console.log(usuario);

  return (
    <main className="home-container">
      <Header />
      <section className="home-content">
        <h1>Bienvenido a tu Plataforma</h1>
        <p>Tu plataforma de gestión y acompañamiento estudiantil.</p>

        {usuario?.rol === "estudiante" ? (
          
          <p>
            Bienvenido, Estudiante {usuario.nombre}. Aquí puedes gestionar tus notas y el progreso académico.
          </p>
        ) : null}

      </section>
      <Footer />
    </main>
  );
};

export default Home;