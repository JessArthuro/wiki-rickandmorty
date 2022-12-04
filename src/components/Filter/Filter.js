import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

function Filter({
  // pageNumber,
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
}) {

  // Funcion para borrar los filtros y actualizar la pagina.
  const clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center text-white fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer", color: "#00b5cc" }}
        onClick={clear}
        className="text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setPageNumber={setPageNumber}
          setStatus={setStatus}
         />

         <Species
          setPageNumber={setPageNumber}
          setSpecies={setSpecies}
         />

         <Gender
          setPageNumber={setPageNumber}
          setGender={setGender}
         />
      </div>
    </div>
  );
}

export default Filter;
