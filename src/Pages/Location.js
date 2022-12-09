import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

function Location() {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const { dimension, type, name } = info;
  const [number, setNumber] = useState(1);

  const api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <section className="container mb-4">
      <div className="row mt-4 mb-5">
        <h1 className="text-center text-white mb-3">
          Location:{" "}
          <span style={{ color: "#00b5cc" }}>
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center text-secondary">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center text-secondary">
          Type: {type === "" ? "Unknown" : type}
        </h6>
      </div>

      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center text-white mb-4">Pick Episode</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/locations/" results={results} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
