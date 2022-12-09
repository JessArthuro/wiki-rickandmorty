import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Pagination({ pageNumber, info, setPageNumber }) {
  // Funcion para manejar el cambio de pagina.
  const pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  // Evento para adaptar la paginacion a distintos tamaños de pantalla.
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <ReactPaginate
        className="pagination justify-content-center align-items-center my-5 gap-4 text-white"
        previousLabel={<BiChevronLeft />}
        nextLabel={<BiChevronRight />}
        previousLinkClassName="link-prev"
        nextLinkClassName="link-next"
        activeClassName="active-page"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        breakLabel={width < 576 ? "" : "..."}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1} // Controlamos el numero de pagina desde el estado de la aplicacion.
        marginPagesDisplayed={width < 576 ? 0 : 1} // El numero de paginas a mostrar para los margenes.
        pageRangeDisplayed={width < 576 ? 1 : 2} // Rango de paginas mostradas alrededor de la activa.
        pageCount={info?.pages} // Numero total de paginas.
        onPageChange={pageChange} // Este metodo expone el objeto de la pagina actual como un argumento.
      />
    </>
  );
}

export default Pagination;
