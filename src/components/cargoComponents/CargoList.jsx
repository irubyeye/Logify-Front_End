import React from "react";
import CargoItem from "./CargoItem";

export default function CargoList({ cargos, title }) {
  if (!cargos.length) {
    return <h2 style={{ textAlign: "center" }}>List is empty</h2>;
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        {cargos.map((cargo, index) => {
          return (
            <div key={cargo._id}>
              <CargoItem cargo={cargo}></CargoItem>
            </div>
          );
        })}
      </div>
    );
  }
}
