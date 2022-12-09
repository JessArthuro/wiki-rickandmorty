import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

function Episodes() {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const { air_date, episode, name } = info;
  const [id, setId] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container mb-4">
      <div className="row mt-4 mb-5">
        <h1 className="text-center text-white mb-3">
          Episode name:{" "}
          <span style={{ color: "#00b5cc" }}>
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center text-secondary">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
        <h6 className="text-center text-secondary">
          {episode === "" ? "Unknown" : episode}
        </h6>
      </div>

      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center text-white mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setId} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episodes;
