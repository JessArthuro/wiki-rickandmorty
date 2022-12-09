import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import styles from "./Card.module.scss";

function Card({ page, results }) {
  let display;

  if (results) {
    display = results.map((info) => {
      let { id, image, name, status, location, species } = info;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-white"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <LazyImage src={image} alt={name} />

            <div className={styles.content}>
              <h4
                className={`${styles.name_character} fw-bold text-truncate my-1`}
              >
                {name}
              </h4>

              <div className="d-flex align-items-center">
                <span
                  className={`${styles.indicator} ${
                    status === "Alive"
                      ? `${styles.success}`
                      : status === "Dead"
                      ? "bg-danger"
                      : "bg-secondary"
                  }`}
                ></span>
                <p className="m-0 ps-2 text-truncate">
                  {status} - {species}
                </p>
              </div>

              <div className="text-secondary">
                <p className="mt-3 mb-0">Last Location:</p>
                <p className="text-white text-truncate mb-2">{location.name}</p>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No characters Found :/";
  }

  return <>{display}</>;
}

export default Card;
