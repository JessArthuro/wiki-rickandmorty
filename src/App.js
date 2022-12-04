import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importamos react-router-dom para definir todo tipo de ruta de archivos
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
  // Creamos dos hooks useState para mantener las palabras clave en nuestro buscador y tambien para obtener el numero de pagina actual.
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  // Creamos 3 hooks para almacenar el estado, genero y especie de los filtros que vamos a generar.
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  // La variable fetchedData almacenara los datos que obtuvimos de la api y usaremos la funcion setFetchedData para cambiar los datos cuando queramos.
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData; // Desestructuramos info y result de la constante fetchedData.

  // Actualizamos nuestra api con variable para que nuestro hook useEffect siempre obtenga los nuevos datos cuando se haga una busqueda.
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  // El hook useEffect es utilizado para peticiones de datos o actualizaciones manuales del dom. Te permite llevar a cabo efectos secundarios en componentes funcionales.
  useEffect(() => {
    // Usamos una funcion asincrona para obtener los datos sin procesar.
    (async function () {
      const data = await fetch(api).then((res) => res.json()); // Despues convertimos los datos en formato JSON y los guardamos en la variable data.
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center text-white mt-3 mb-4">Characters</h1>
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
