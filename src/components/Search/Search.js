import styles from "./Search.module.scss";

function Search({ setSearch, setPageNumber }) {
  const preventRecharge = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="row">
        <form className="col-lg-8 offset-lg-3 mb-5" onSubmit={preventRecharge}>
          <input
            onChange={(e) => {
              setPageNumber(1);
              setSearch(e.target.value);
            }}
            placeholder="Search for characters..."
            className={styles.input}
            type="text"
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
