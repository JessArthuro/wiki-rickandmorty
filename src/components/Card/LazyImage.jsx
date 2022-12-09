import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImg from "../../img/img-placeholder.svg";

function LazyImage({ src, alt }) {
  return (
    <figure className="m-0">
      <LazyLoadImage
        src={src}
        alt={alt}
        width="100%"
        className="lazy-image"
        style={{ objectFit: "cover" }}
        placeholderSrc={PlaceholderImg}
      />
    </figure>
  );
}

export default LazyImage;
