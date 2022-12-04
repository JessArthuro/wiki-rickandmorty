import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Pagination({ pageNumber, info, setPageNumber }) {
  // Funcion para manejar el cambio de pagina.
  const pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  // Creamos este pequeño componente para que nuestro componente de paginacion se adapte al tamaño de la pantalla.
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx="true">
        {`
          a {
            color: white;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
        `}
      </style>
      
      {/* Usamos las propiedades integradas de react-paginate para darle un poco de estilo */}
      <ReactPaginate 
        className="pagination justify-content-center my-4 gap-4"
        nextLabel={<BiChevronRight />}
        previousLabel={<BiChevronLeft />}
        previousClassName="btn btn-primary fs-6 prev"
        nextClassName="btn btn-primary fs-6 next"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"

        forcePage={pageNumber === 1 ? 0 : pageNumber -1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </>
  );
}

export default Pagination;
