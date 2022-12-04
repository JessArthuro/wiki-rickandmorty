import React from "react";

function InputGroup({ name, changeID, total }) {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        {/* <option value="1">Choose...</option> */}
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1} key={index}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InputGroup;
