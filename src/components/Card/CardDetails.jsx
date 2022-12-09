import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetailsSkeleton from "./CardDetailsSkeleton";
import style from "./Card.module.scss";

function CardDetails() {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  const { name, location, origin, gender, image, status, species, type } =
    fetchedData;
  const [loading, setLoading] = useState(true);

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
      setLoading(false);
    })();
  }, [api]);

  return (
    <div className="container">
      {loading ? (
        <CardDetailsSkeleton />
      ) : (
        <div
          className={`${style.card_details} d-flex flex-column flex-md-row justify-content-start mb-5`}
        >
          <div>
            <img className={`${style.img_card}`} src={image} alt="" />
          </div>

          <div className="px-3 pt-3 ps-md-4 text-secondary">
            <h2 className={`${style.details_title}`}>{name}</h2>

            <div className="d-flex align-items-center">
              <span
                className={`${style.indicator} ${
                  status === "Alive"
                    ? `${style.success}`
                    : status === "Dead"
                    ? "bg-danger"
                    : "bg-secondary"
                } `}
              ></span>
              <p className="m-0 ps-2 text-capitalize text-white">
                {status} - {species}
              </p>
            </div>

            <div className={`${style.card_data} mt-3 ps-md-3`}>
              <p className="mb-2">
                Gender: <span className="text-white">{gender}</span>
              </p>

              <p className="mb-2">
                Location: <span className="text-white">{location?.name}</span>
              </p>

              <p className="mb-2">
                Origin: <span className="text-white">{origin?.name}</span>
              </p>

              {type && (
                <p>
                  Type: <span className="text-white">{type}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetails;
