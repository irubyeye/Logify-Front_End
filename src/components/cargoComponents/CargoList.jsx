import React from "react";
import CargoItem from "./CargoItem";
import { Link } from "react-router-dom";

export default function CargoList({ cargos, title }) {
  if (!cargos.length) {
    return (
      <h2 style={{ marginTop: "20px", textAlign: "center" }}>
        List is empty <Link to={"/add-cargo"}>Add Cargo</Link>
      </h2>
    );
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
