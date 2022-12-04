import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CardDetails() {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  const { name, location, origin, gender, image, status, species, type } =
    fetchedData;
  // console.log(fetchedData);

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center text-primary">{name}</h1>
        <img className="img-fluid" src={image} alt="" />

        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}

        <div className="content text-white">
          <div>
            <span className="fw-bold">Gender: </span>
            {gender}
          </div>
          <div>
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div>
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div>
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          {type && (
            <div>
              <span className="fw-bold">Type: </span>
              {type}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
