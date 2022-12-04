function FilterBtn({ input, task, setPageNumber, index, name }) {
  return (
    <div>
      <style jsx="true">
        {`
          .x:checked + label {
            // background-color: #0b5ed7;
            background-color: #00b5cc;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
            task(input);
            setPageNumber(1);
          }}
          className="btn btn-outline-info"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
}

export default FilterBtn;
