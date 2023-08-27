import React, { useState } from "react";
import MySelect from "../select/MySelect";

export default function ResultsAmount({ limit, changeLimit }) {
  return (
    <div>
      <MySelect
        onChange={(selected) => changeLimit(selected)}
        value={limit}
        defaultValue={5}
        options={[
          { value: 1, name: "1" },
          { value: 2, name: "2" },
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: 50, name: "50" },
        ]}
      ></MySelect>
    </div>
  );
}
