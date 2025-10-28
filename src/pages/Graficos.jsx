
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import "./Graficos.css";

function Graficos() {
  return (
    <div className="graficos-container">
      <Header />

      <main className="graficos-main">
        <h2>Promedio mensual de notas</h2>
        <div className="grafica-wrapper">
          <img
            src={`http://127.0.0.1:5001/api/grafica-promedio?t=${Date.now()}`}
            alt="Gráfica de promedio mensual"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Graficos;
