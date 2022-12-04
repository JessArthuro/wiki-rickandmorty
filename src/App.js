import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="Navbar">
        <Navbar />
      </div>
      <Routes>
        {/* Cada ruta requiere de dos cosas: el path que es el que conducira la aplicacion y el element que es lo que se cargara. */}
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  // Mantenemos las palabras clave en nuestro buscador y obtenemos el numero de pagina actual.
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  // Hooks para almacenar el estado, genero y especie en los filtros.
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  // Almacenamiento de datos de la api en un hook de estado.
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData; // Desestructuracion de los datos para una mejor lectura.

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // El hook useEffect es utilizado para peticiones de datos o actualizaciones manuales del dom.
  useEffect(() => {
    // Usamos una funcion asincrona para obtener los datos sin procesar.
    (async function () {
      // Convertimos los datos en formato JSON.
      const data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center text-white my-4">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="container">
        <div className="row">
          <Filter
            // pageNumber={pageNumber}
            // status={status}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
