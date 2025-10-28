import { useState, useEffect } from "react";
import Header from "../componentes/Header";
import { endPoints } from "../api/apiModuloAcademico";
import Footer from "../componentes/Footer";
import "./Notas.css";

const Notas = () => {
  const [notas, setNotas] = useState([]);
  const [filtro, setFiltro] = useState(""); 
  const [notasFiltradas, setNotasFiltradas] = useState([]);

  function getNotas() {
    fetch(endPoints.notas)
      .then((response) => response.json())
      .then((data) => {
        setNotas(data);
        console.log("hola")
        console.log(data)
        setNotasFiltradas(data); 
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getNotas();
  }, []);

  // Función para filtrar notas
  const filtrarNotas = () => {
    if (!filtro) {
      setNotasFiltradas(notas);
    } else {
      const filtradas = notas.filter(
        (nota) =>
          nota.materia.toLowerCase().includes(filtro.toLowerCase()) ||
          nota.tipo_evaluacion.toLowerCase().includes(filtro.toLowerCase())
      );
      setNotasFiltradas(filtradas);
    }
  };

  // Función para descargar CSV
  const descargarCSV = () => {
    const encabezados = ["ID", "Usuario", "Estudiante ID", "Materia", "Matricula", "Nota"];
    const filas = notasFiltradas.map((nota) => [
      nota.id,
      nota.profesor_id,
      nota.estudiante_id,
      nota.materia,
      nota.tipo_evaluacion,
      nota.valor,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [encabezados, ...filas].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "notas.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="notas-container">
      <Header />

      <div className="notas-content">
        <div className="notas-header">
          <h2>Listado de Notas</h2>
          <p>Gestión y seguimiento de calificaciones estudiantiles</p>
        </div>

        <div className="notas-filtros">
          <input
            type="text"
            placeholder="Filtrar por materia o tipo"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
          <button onClick={filtrarNotas}>Filtrar</button>
          <button onClick={descargarCSV}>Descargar CSV</button>
        </div>

        <div className="tabla-wrapper">
          <table className="tabla-notas">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Tipo Evalucion</th>
                <th>Valor</th>
               
              </tr>
            </thead>
           <tbody>
              {notasFiltradas.map((nota, index) => (
                <tr key={nota.id || `${nota.materia}-${nota.estudiante_id}-${index}`}>
                  <td>{nota.fecha}</td>
                  <td>{nota.tipoEvaluacion}</td>
                  <td>{nota.valor}</td>
                  <td>{nota.nota}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Notas;
