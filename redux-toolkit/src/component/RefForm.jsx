import React, { useRef } from "react";

const BasicForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ cc: inputRef.current.value });

    inputRef.current.value = "123";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <input type="text" ref={inputRef} />
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
