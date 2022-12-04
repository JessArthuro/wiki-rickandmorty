import FilterBtn from "../FilterBtn";

function Gender({ setGender, setPageNumber }) {
  const genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>

      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => {
            return (
              <FilterBtn
                name="gender"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setGender}
                input={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gender;
