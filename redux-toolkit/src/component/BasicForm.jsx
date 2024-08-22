import React, { useRef, useState } from "react";

const BasicForm = () => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);

  const handleValidation = (val) => {
    if (val?.trim() && val?.trim()?.length > 3) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={value}
            // onFocus={() => setTouched(true)}
            onBlur={() => {
              setTouched(true);
              handleValidation(value);
            }}
            onChange={(e) => {
              // handleValidation(e.target.value);
              setValue(e.target.value);
            }}
          />
          <div>
            {!valid && touched && (
              <small className="text-red-500"> Data not valid </small>
            )}
          </div>
        </div>

        <button type="submit"> Submit</button>
      </form>
      <div>
        <ul>
          <li> Value: {value}</li>
          <li> Touched: {touched ? "true" : "false"}</li>
          <li> valid: {valid ? "true" : "false"}</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicForm;
