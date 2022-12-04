// import { BiSearch } from "react-icons/bi";
import styles from "./Search.module.scss";

function Search({ setSearch, setPageNumber }) {
  // Evitamos el comportamiento predeterminado de nuesta aplicacion.
  // const searchBtn = (e) => {
  //   e.preventDefault();
  // };

  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters..."
        className={styles.input}
        type="text"
      />

      {/* <button onClick={searchBtn} className={`${styles.btn} btn text-white`}>
        <BiSearch className={styles.icon_search} />
      </button> */}
    </form>
  );
}

export default Search;
