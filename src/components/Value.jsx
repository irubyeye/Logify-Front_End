import React, { useState } from "react";

const Value = () => {
  const [value, setValue] = useState("Some");

  return (
    <div>
      <h1>{value}</h1>
      <input onChange={(e) => setValue(e.target.value)} value={value}></input>
    </div>
  );
};

export default Value;
